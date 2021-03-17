const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
    const category = await Category.findOne({
      where: { name: "Sleutelhangers" },
    });

    const sleutelDraak = await Product.create({
      name: "Sleutelhanger Draak ",
      price: "5.00",
      description:
        "Sleutelhanger draak gehaakt met katoengaren. De draak heeft een houten kraal als lijf. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "6cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheidsoogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-draak/sleutel-geluks-draak.jpg",
      thumbnail: true,
      productId: sleutelDraak.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-draak/sleutel-geluks-draak_size.jpg",
      thumbnail: false,
      productId: sleutelDraak.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-draak/sleutel-geluks-draak_size1.jpg",
      thumbnail: false,
      productId: sleutelDraak.id,
    });

  } catch (error) {
    console.log(error);
  }
}

sleutel();
