const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
    const category = await Category.findOne({
      where: { name: "Sleutelhangers" },
    });

    const sleutelEenhoorn = await Product.create({
      name: "Sleutelhanger Eenhoorn ",
      price: "5.00",
      description:
        "Sleutelhanger eenhoorn gehaakt met katoengaren. De eenhoorn heeft een houten kraal als lijf. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "9cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheidsoogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-eenhoorn/sleutel-geluks-eenhoorn.jpg",
      thumbnail: true,
      productId: sleutelEenhoorn.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-eenhoorn/sleutel-geluks-eenhoorn_size.jpg",
      thumbnail: false,
      productId: sleutelEenhoorn.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-eenhoorn/sleutel-geluks-eenhoorn_size1.jpg",
      thumbnail: false,
      productId: sleutelEenhoorn.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-eenhoorn/sleutel-geluks-eenhoorn_size2.jpg",
      thumbnail: false,
      productId: sleutelEenhoorn.id,
    });

  } catch (error) {
    console.log(error);
  }
}

sleutel();
