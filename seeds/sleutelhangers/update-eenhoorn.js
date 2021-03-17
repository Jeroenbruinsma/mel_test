const Product = require("../../products/model");

async function sleutel() {
  try {
    await Product.update(
      { size: "6cm" },
      {
        where: { name: "Sleutelhanger Eenhoorn " },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

sleutel();
