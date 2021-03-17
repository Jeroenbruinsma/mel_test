const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function muts() {
  try {
    const category = await Category.findOne({
      where: { name: "Overige" },
    });

    const muts = await Product.create({
      name: "Koptelefoon Muts",
      price: "25.00",
      description:
        "Muts met een koptelefoon. Deze is gemaakt van een combinatie garen van acryl en katoen. Verschillende kleuren zijn mogelijk, geef je even aan welke kleuren je wilt in de opmerkingen bij je bestelling.",
      size: "20cm",
      optional:
      "Ook verschillende maten kan ik maken. Hierover neem ik contact met je op.",
      stock: 0,
      categoryId: category.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/muts/muts-koptelefoon.jpg",
      thumbnail: true,
      productId: muts.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/muts/muts-koptelefoon_size.jpg",
      thumbnail: false,
      productId: muts.id,
    });
    
    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/muts/muts-koptelefoon_size1.jpg",
      thumbnail: false,
      productId: muts.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/muts/muts-koptelefoon_size2.jpg",
      thumbnail: false,
      productId: muts.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/muts/muts-koptelefoon_size3.jpg",
      thumbnail: false,
      productId: muts.id,
    });

  } catch (error) {
    console.log(error);
  }
}

muts();
