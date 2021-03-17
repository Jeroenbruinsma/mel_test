const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function bookmark() {
  try {
    const category = await Category.findOne({
      where: { name: "Overige" },
    });

    const boekHaai = await Product.create({
      name: "Boekenlegger Haai",
      price: "12.50",
      description:
        "Maakt voorlezen of lezen nog leuker met deze stoere haai boekenlegger. De boekenlegger is gehaakt met katoengaren. Plat lijf wat precies tussen een boek past.",
      size: "37cm",
      optional:
        "",
      stock: 0,
      categoryId: category.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/boekenlegger/boek-haai.jpg",
      thumbnail: true,
      productId: boekHaai.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/boekenlegger/boek-haai_size.jpg",
      thumbnail: false,
      productId: boekHaai.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/boekenlegger/boek-haai_size1.jpg",
      thumbnail: false,
      productId: boekHaai.id,
    });

  } catch (error) {
    console.log(error);
  }
}

bookmark();
