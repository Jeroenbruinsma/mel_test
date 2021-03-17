const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
    const category = await Category.findOne({
      where: { name: "Sleutelhangers" },
    });

    const sleutelEendje = await Product.create({
      name: "Sleutelhanger Eendje",
      price: "7.50",
      description:
        "Sleutelhanger eendje gehaakt met katoengaren. Het eendje heeft een leuke houtenkraal als gezichtje en een houten kraal als lijf.",
      size: "5cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-eend/sleutel-cute-eend.jpg",
      thumbnail: true,
      productId: sleutelEendje.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-eend/sleutel-cute-eend_size.jpg",
      thumbnail: false,
      productId: sleutelEendje.id,
    });

  } catch (error) {
    console.log(error);
  }
}

sleutel();
