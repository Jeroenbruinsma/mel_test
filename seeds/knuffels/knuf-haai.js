const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function haai() {
  try {
    const knuffels = await Category.findOne({
      where: { name: "Knuffels" },
    });
    
    const haai = await Product.create({
      name: "Haai",
      price: "15.00",
      description:
        "Haai gemaakt van een dikkere katoendraad. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "20cm",
      optional:
        "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-haai/knuf-haai.jpg",
      thumbnail: true,
      productId: haai.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-haai/knuf-haai_size.jpg",
      thumbnail: false,
      productId: haai.id,
    });
    
    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-haai/knuf-haai_size1.jpg",
      thumbnail: false,
      productId: haai.id,
    });

  } catch (error) {
    console.log(error);
  }
}

haai();
