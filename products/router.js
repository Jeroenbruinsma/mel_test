const { Router } = require("express");
const Product = require("./model");
const Category = require("../categories/model");
const ProductImage = require("../productImages/model");
const router = Router();

router.get("/products", async (request, response) => {
  try {
    const page = request.query.page;
    const limit = 16;
    const offset = (page - 1) * limit;

    const product = await Product.findAll({
      limit,
      offset,
      include: [Category, ProductImage],
    });
    const total = await Product.count();
    response.json({ product, total });
  } catch (error) {
    console.log(error);
    response.send("error by jeroen ")
  }

  // Product.findAll({limit, offset, include: [Category, ProductImage] })
  //   .then((product) => response.json(product))
  //   .catch(next);
});

router.get("/products/:productId", (request, response, next) => {
  Product.findByPk(request.params.productId, {
    include: [Category, ProductImage],
  })
    .then((product) => {
      if (!product) {
        response.status(404).end();
      } else {
        response.json(product);
      }
    })
    .catch(next);
});

router.post("/products", async (request, response, next) => {
  try {
    const {
      name,
      price,
      description,
      size,
      optional,
      stock,
      category,
    } = request.body.fields;

    const { productImages } = request.body;

    if (!name || !price || !description || !size || !optional || !category) {
      return response
        .status(400)
        .send({ message: "Niet alle velden zijn ingevuld." });
    } else {
      const category_id = await Category.findOne({
        where: { name: category },
      });

      const newProduct = {
        name,
        price,
        description,
        size,
        optional,
        stock,
        categoryId: category_id.id,
      };

      const product = await Product.create(newProduct);

      await productImages.map((image) => {
        const newImage = {
          url: image.url,
          thumbnail: Boolean(image.thumbnail),
          productId: product.id,
        };
        const newProductImage = ProductImage.create(newImage);

        return newProductImage;
      });

      response.status(200).send();
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
