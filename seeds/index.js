const Product = require("../products/model");
const Category = require("../categories/model");
const ProductImage = require("../productImages/model");

async function seedDataBase() {
  try {
    const rammelaar = await Category.create({
      name: "Bijtringen & Rammelaars",
    });

    const babyOverig = await Category.create({
      name: "Baby Overige",
    });

    const knuffels = await Category.create({
      name: "Knuffels",
    });

    const sleutelhangers = await Category.create({
      name: "Sleutelhangers",
    });

    const overige = await Category.create({
      name: "Overige",
    });

    const bijtringAbel = await Product.create({
      name: "Bijtring/Rammelaar Aap Abel",
      price: "12.50",
      description:
        "Houten bijtring van een apenkop met een rammelkraal erin. Deze aap is gemaakt van zacht knuffelgaren en katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "De rammelkraal kan vervangen worden door een pieper in de neus. Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    const bijtringVos = await Product.create({
      name: "Bijtring/Rammelaar Vos",
      price: "12.50",
      description:
        "Houten bijtring van een vos met een staart. In het hoofdje zit een rammelkraal. Deze vos is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "De rammelkraal kan vervangen worden door een pieper in de staart. Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    const bijtringWasbeer = await Product.create({
      name: "Bijtring/Rammelaar Wasbeer",
      price: "12.50",
      description:
        "Houten bijtring van een wasbeer. In het hoofdje zit een rammelkraal. Deze wasbeer is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Deze is heel makkelijk te veranderen naar een rode panda, door de kleuren aanpassen naar oranjerood. Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    const speenDraak = await Product.create({
      name: "Speenknuffel Draak",
      price: "15.00",
      description:
        "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door om het handje te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "18cm",
      optional:
        "Er kan een leuk knisper geluidje aan toegevoegd worden in het lijfje. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    const speenGiraf = await Product.create({
      name: "Speenkoord Giraf",
      price: "12.50",
      description:
        "Speenkoord om een speentje aan te bevestigen. Het lusje is van waxkoord gemaakt, er zit een mooie houten speenclip op. De giraf is gehaakt met katoen",
      size: "18cm",
      optional:
        "Er kan een rammel geluidje aan toegevoegd worden in het hoofdje.",
      stock: 1,
      categoryId: babyOverig.id,
    });

    const mike = await Product.create({
      name: "Grote Aap",
      price: "40.00",
      description:
        "Grote Aap gemaakt van een dikkere katoendraad. Zittend is deze leuke aap 30cm, liggend gemeten vanaf de voeten tot het hoofd is hij maar liefst 60cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "30cm",
      optional:
        "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: knuffels.id,
    });

    // const huski = await Product.create({
    //   name: "Huski",
    //   price: "22.50",
    //   description:
    //     "Huski gemaakt van een dikkere katoendraad. Liggend gemeten is hij 30cm groot en zitten ongeveer 22cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    //   size: "22cm",
    //   optional:
    //     "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    //   stock: 0,
    //   categoryId: knuffels.id,
    // });

    const sleutelSmiley = await Product.create({
      name: "Sleutelhanger Smileypoppetje",
      price: "2.50",
      description:
        "Vrolijke sleutelhanger met een houten smileykraal, in het lijfje is gehaakt met katoen, er zit een houten kraal in. In bijna alle kleuren mogelijk! Vermeld bij de opmerkingen even de kleur die je wilt.",
      size: "4cm",
      optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 9,
      categoryId: sleutelhangers.id,
    });

    const sleutelEend = await Product.create({
      name: "Sleutelhanger Eend",
      price: "7.50",
      description:
        "Sleutelhanger Eend gehaakt met katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "9cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheidsoogjes kunnen vervangen worden door geborduurde ^ ^ of | | oogjes.",
      stock: 0,
      categoryId: sleutelhangers.id,
    });

    const sleutelPinguin = await Product.create({
      name: "Sleutelhanger Pinguin",
      price: "7.50",
      description:
        "Sleutelhanger Pinguin gehaakt met katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "7cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheidsoogjes kunnen vervangen worden door geborduurde ^ ^ of | | oogjes.",
      stock: 1,
      categoryId: sleutelhangers.id,
    });

    const doekjeDraak = await Product.create({
      name: "Knuffeldoekje Draak",
      price: "20.00",
      description:
        "Dit knuffeldoekje is gehaakt met zacht knuffelgaren. Het doekje is ongeveer 35 x 35 cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "35cm",
      optional:
        "Geluidjes, zoals piepertje of rammelkraal kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: babyOverig.id,
    });

    const speenAap = await Product.create({
      name: "Speenknuffel Aap",
      price: "15.00",
      description:
        "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door het handje om te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren en katoen. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "18cm",
      optional:
        "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    const speenKonijn = await Product.create({
      name: "Speenknuffel Konijn",
      price: "15.00",
      description:
        "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door het handje om te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren en katoen. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "18cm",
      optional:
        "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    const bijtringKoala = await Product.create({
      name: "Bijtring/Rammelaar Koala",
      price: "12.50",
      description:
        "Bijtring van een koala met een rammelkraal erin. Deze koala is gemaakt van katoengaren, in de oortjes die een klein stukje zacht knuffelgaren. De bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "10cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    const bijtringKoe = await Product.create({
      name: "Bijtring/Rammelaar Koe",
      price: "12.50",
      description:
        "Bijtring van een koeienkop met een rammelkraal erin. Deze koe is gemaakt van zacht knuffelgaren en katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "De rammelkraal kan ook vervangen worden door een pieper in de neus. Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-abel/bijt-abel.jpg",
      thumbnail: true,
      productId: bijtringAbel.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/bijtring-abel/bijtringAapAbel_size.jpg",
      thumbnail: false,
      productId: bijtringAbel.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-koala/bijt-koala.jpg",
      thumbnail: true,
      productId: bijtringKoala.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/bijtring-koala/bijtringKoala_size.jpg",
      thumbnail: false,
      productId: bijtringKoala.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/bijtring-wasbeer/bijt-wasbeer.jpg",
      thumbnail: true,
      productId: bijtringWasbeer.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/bijtring-wasbeer/bijtringWasbeer_size.jpg",
      thumbnail: false,
      productId: bijtringWasbeer.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-vos/bijt-vos.jpg",
      thumbnail: true,
      productId: bijtringVos.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/bijtring-vos/bijtringVosFelix_size.jpg",
      thumbnail: false,
      productId: bijtringVos.id,
    });

    // ProductImage.create({
    //   url: "https://haakdraak.nl/afbeeldingen/knuf-huski/knuf-huski.jpg",
    //   thumbnail: true,
    //   productId: huski.id,
    // });

    // ProductImage.create({
    //   url: "https://haakdraak.nl/afbeeldingen/knuf-huski/knuf-huski_size.jpg",
    //   thumbnail: false,
    //   productId: huski.id,
    // });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/speenknuffel-aap/speen-aap.jpg",
      thumbnail: true,
      productId: speenAap.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/speenknuffel-aap/lulu1_size.jpg",
      thumbnail: false,
      productId: speenAap.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/speenknuffel-aap/lulu2_size.jpg",
      thumbnail: false,
      productId: speenAap.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/speenknuffel-draak/speen-draak.jpg",
      thumbnail: true,
      productId: speenDraak.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/speenknuffel-draak/speen-draak1_size.jpg",
      thumbnail: false,
      productId: speenDraak.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/speenknuffel-draak/speen-draak2_size.jpg",
      thumbnail: false,
      productId: speenDraak.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/speenknuffel-draak/speen-draak3_size.jpg",
      thumbnail: false,
      productId: speenDraak.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/speenkoord-giraf/speen-giraf.jpg",
      thumbnail: true,
      productId: speenGiraf.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/speenkoord-giraf/speen-giraf_size.jpg",
      thumbnail: false,
      productId: speenGiraf.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/aap-mike/knuf-mike.jpg",
      thumbnail: true,
      productId: mike.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/aap-mike/knuf-mike1_size.jpg",
      thumbnail: false,
      productId: mike.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/aap-mike/knuf-mike2_size.jpg",
      thumbnail: false,
      productId: mike.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/aap-mike/knuf-mike3_size.jpg",
      thumbnail: false,
      productId: mike.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/smileypoppetjes/sleutel-smile1.jpg",
      thumbnail: true,
      productId: sleutelSmiley.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/smileypoppetjes/sleutel-smile2_size.jpg",
      thumbnail: false,
      productId: sleutelSmiley.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/smileypoppetjes/sleutel-smile3_size.jpg",
      thumbnail: false,
      productId: sleutelSmiley.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/smileypoppetjes/sleutel-smile4_size.jpg",
      thumbnail: false,
      productId: sleutelSmiley.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/smileypoppetjes/sleutel-smile5_size.jpg",
      thumbnail: false,
      productId: sleutelSmiley.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/smileypoppetjes/sleutel-smile6_size.jpg",
      thumbnail: false,
      productId: sleutelSmiley.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-eend/sleutel-enzo.jpg",
      thumbnail: true,
      productId: sleutelEend.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-eend/sleutel-eend1_size.jpg",
      thumbnail: false,
      productId: sleutelEend.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-eend/sleutel-eend2_size.jpg",
      thumbnail: false,
      productId: sleutelEend.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-pinguin/sleutel-pingu.jpg",
      thumbnail: true,
      productId: sleutelPinguin.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-pinguin/sleutel-pinguin1_size.jpg",
      thumbnail: false,
      productId: sleutelPinguin.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-pinguin/sleutel-pinguin2_size.jpg",
      thumbnail: false,
      productId: sleutelPinguin.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-pinguin/sleutel-pinguin3_size.jpg",
      thumbnail: false,
      productId: sleutelPinguin.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-pinguin/sleutel-pinguin4_size.jpg",
      thumbnail: false,
      productId: sleutelPinguin.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/knuffeldoekje-draak/doek-draak.jpg",
      thumbnail: true,
      productId: doekjeDraak.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/knuffeldoekje-draak/doek-draak1_size.jpg",
      thumbnail: false,
      productId: doekjeDraak.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/knuffeldoekje-draak/doek-draak2_size.jpg",
      thumbnail: false,
      productId: doekjeDraak.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/knuffeldoekje-draak/doek-draak3_size.jpg",
      thumbnail: false,
      productId: doekjeDraak.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/knuffeldoekje-draak/doek-draak4_size.jpg",
      thumbnail: false,
      productId: doekjeDraak.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/speenknuffel-konijn/speen-kim.jpg",
      thumbnail: true,
      productId: speenKonijn.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/speenknuffel-konijn/speen-konijn_size.jpg",
      thumbnail: false,
      productId: speenKonijn.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/speenknuffel-konijn/speen-konijn1_size.jpg",
      thumbnail: false,
      productId: speenKonijn.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/speenknuffel-konijn/speen-konijn2_size.jpg",
      thumbnail: false,
      productId: speenKonijn.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-koe/bijt-koe.JPG",
      thumbnail: true,
      productId: bijtringKoe.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-koe/bijt-koe_size.jpg",
      thumbnail: false,
      productId: bijtringKoe.id,
    });

    const bijtringVarken = await Product.create({
      name: "Bijtring/Rammelaar Varken",
      price: "12.50",
      description:
        "Bijtring van een varkenskop met een rammelkraal erin. Dit varken is gemaakt van zacht knuffelgaren en katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-varken/bijt-varken.jpg",
      thumbnail: true,
      productId: bijtringVarken.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-varken/bijt-varken_size.jpg",
      thumbnail: false,
      productId: bijtringVarken.id,
    });

    const bijtringDraak = await Product.create({
      name: "Bijtring/Rammelaar Draak",
      price: "12.50",
      description:
        "Bijtring van een draak met een staart. Er zit een rammeltje in de staart. Deze stoere draak is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Het rammeltje kan vervangen worden voor een piepertje in de staart. Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-draak/bijt-draak.jpg",
      thumbnail: true,
      productId: bijtringDraak.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-draak/bijt-draak_size.jpg",
      thumbnail: false,
      productId: bijtringDraak.id,
    });

    const rodePanda = await Product.create({
      name: "Rode Panda",
      price: "22.50",
      description:
        "Rode Panda gemaakt van een dikkere katoendraad. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "30cm",
      optional:
        "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuf-rode-panda/knuf-rode-panda.jpg",
      thumbnail: true,
      productId: rodePanda.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuf-rode-panda/knuf-rode-panda_size.jpg",
      thumbnail: false,
      productId: rodePanda.id,
    });

    const bijtringEenhoorn = await Product.create({
      name: "Bijtring/Rammelaar Eenhoorn",
      price: "12.50",
      description:
        "Bijtring van een eenhoorn hoofd met een rammelkraal erin. Deze eenhoorn is gemaakt van katoengaren met veel vrolijke kleurtjes, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-eenhoorn/bijt-eenhoorn.jpg",
      thumbnail: true,
      productId: bijtringEenhoorn.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-eenhoorn/bijt-eenhoorn_size.jpg",
      thumbnail: false,
      productId: bijtringEenhoorn.id,
    });

    const bijtringTriceratops = await Product.create({
      name: "Bijtring/Rammelaar Triceratops",
      price: "12.50",
      description:
        "Bijtring van een  triceratops hoofd met een rammelkraal erin. Deze triceratops is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-triceratops/bijt-triceratops.jpg",
      thumbnail: true,
      productId: bijtringTriceratops.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-triceratops/bijt-triceratops_size.jpg",
      thumbnail: false,
      productId: bijtringTriceratops.id,
    });

    const bijtringPinguVis = await Product.create({
      name: "Bijtring/Rammelaar Pinguin met vis",
      price: "12.50",
      description:
        "Bijtring van een pinguïn met een vis bijtring vast. Er zit een rammelkraal in. Deze pinguïn is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "10cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-pinguin/vis-pingu.jpg",
      thumbnail: true,
      productId: bijtringPinguVis.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-pinguin/bijt-pingu-vis_size.jpg",
      thumbnail: false,
      productId: bijtringPinguVis.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-pinguin/bijt-pingu-vis_size1.jpg",
      thumbnail: false,
      productId: bijtringPinguVis.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-pinguin/bijt-pingu-vis_size2.jpg",
      thumbnail: false,
      productId: bijtringPinguVis.id,
    });

    const bijtringZeepaard = await Product.create({
      name: "Bijtring/Rammelaar Zeepaardje",
      price: "9.95",
      description:
        "Bijtring van een zeepaardje met een rammelkraal erin. Dit zeepaardje is gemaakt van dikker katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-zeepaard/bijt-zeepaard.jpg",
      thumbnail: true,
      productId: bijtringZeepaard.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-zeepaard/bijt-zeepaard_size.jpg",
      thumbnail: false,
      productId: bijtringZeepaard.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-zeepaard/bijt-zeepaard1_size.jpg",
      thumbnail: false,
      productId: bijtringZeepaard.id,
    });

    // ProductImage.create({
    //   url:
    //     "https://www.haakdraak.nl/afbeeldingen/bijtring-zeepaard/bijt-zeepaard1.jpg",
    //   thumbnail: true,
    //   productId: bijtringZeepaard.id
    // });

    const bijtringHert = await Product.create({
      name: "Bijtring/Rammelaar Hert",
      price: "12.50",
      description:
        "Bijtring van een hertenkop met een rammelkraal erin. Dit hert is gemaakt van zacht knuffelgaren en katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/bijtring-hert/bijt-hert.JPG",
      thumbnail: true,
      productId: bijtringHert.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-hert/bijt-hert_size.jpg",
      thumbnail: false,
      productId: bijtringHert.id,
    });

    const bijtringPinguin = await Product.create({
      name: "Bijtring/Rammelaar Pinguin",
      price: "9.95",
      description:
        "Bijtring van een pinguïn met een rammelkraal erin en leuke wiebelpootjes. Deze pinguïn is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "10cm",
      optional:
        "In de voetjes kan ook knisper gestopt worden. Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-pinguin/bijt-pingu.jpg",
      thumbnail: true,
      productId: bijtringPinguin.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-pinguin/bijt-pingu_size.jpg",
      thumbnail: false,
      productId: bijtringPinguin.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-pinguin/bijt-pingu_size1.jpg",
      thumbnail: false,
      productId: bijtringPinguin.id,
    });

    const bijtringVliegtuig = await Product.create({
      name: "Bijtring/Rammelaar Vliegtuig",
      price: "9.95",
      description:
        "Bijtring van een vliegtuig met een rammelkraal erin. Dit vliegtuig is gemaakt van katoengaren, de bijtring is van hout.",
      size: "10cm",
      optional: "Zonder geluid is natuurlijk ook mogelijk.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-vliegtuig/bijt-vliegtuig.jpg",
      thumbnail: true,
      productId: bijtringVliegtuig.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-vliegtuig/bijt-vliegtuig_size1.jpg",
      thumbnail: false,
      productId: bijtringVliegtuig.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-vliegtuig/bijt-vliegtuig_size2.jpg",
      thumbnail: false,
      productId: bijtringVliegtuig.id,
    });

    // const bijtringOlifant = await Product.create({
    //   name: "Bijtring/Rammelaar Olifant",
    //   price: "9.95",
    //   description:
    //     "Bijtring met een olifantje met een rammelkraal erin. Dit olifantje is gemaakt van katoengaren, de bijtring is van hout. Deze is vrij plat.",
    //   size: "10cm",
    //   optional:
    //     "De rammelkraal kan vervangen worden voor knisper. Zonder geluid is natuurlijk ook mogelijk.",
    //   stock: 0,
    //   categoryId: rammelaar.id,
    // });

    // ProductImage.create({
    //   url:
    //     "https://www.haakdraak.nl/afbeeldingen/bijtring-olifant/bijt-platolifant.jpg",
    //   thumbnail: true,
    //   productId: bijtringOlifant.id,
    // });

    // ProductImage.create({
    //   url:
    //     "https://www.haakdraak.nl/afbeeldingen/bijtring-olifant/bijt-platolifant_size.jpg",
    //   thumbnail: false,
    //   productId: bijtringOlifant.id,
    // });

    // const bijtringNijlpaard = await Product.create({
    //   name: "Bijtring/Rammelaar Nijlpaard",
    //   price: "9.95",
    //   description:
    //     "Bijtring van een nijpaardkop met een rammelkraal erin. Dit nijlpaard is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    //   size: "12cm",
    //   optional:
    //     "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    //   stock: 0,
    //   categoryId: rammelaar.id,
    // });

    // ProductImage.create({
    //   url:
    //     "https://www.haakdraak.nl/afbeeldingen/bijtring-nijlpaard/bijt-nijlpaard.jpg",
    //   thumbnail: true,
    //   productId: bijtringNijlpaard.id,
    // });

    // ProductImage.create({
    //   url:
    //     "https://www.haakdraak.nl/afbeeldingen/bijtring-nijlpaard/bijt-nijlpaard_size.jpg",
    //   thumbnail: false,
    //   productId: bijtringNijlpaard.id,
    // });

    const kralenSilOlifant = await Product.create({
      name: "Gele Olifant met kralen",
      price: "9.95",
      description:
        "Silicone olifant bijtring met kralenketting. Een aantal kralen is omhaakt met katoengaren. De kralenketting is goed bevestigd met waxkoord.",
      size: "15cm",
      optional: "Dit is de enige optie van deze en de laatste.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/bijt-gele-olifant.jpg",
      thumbnail: true,
      productId: kralenSilOlifant.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/bijt-gele-olifant_size.jpg",
      thumbnail: false,
      productId: kralenSilOlifant.id,
    });

    const kralenGiraf = await Product.create({
      name: "Giraf bijtring met kralen",
      price: "12.50",
      description:
        "Giraf bijtring met slierten met kralen, een omhaakte rammelkraal en 2 houten ringetjes. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
      size: "15cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De giraf is ook mogelijk met kralenketting. Zonder geluid is een optie.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-giraf.jpg",
      thumbnail: true,
      productId: kralenGiraf.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-giraf_size.jpg",
      thumbnail: false,
      productId: kralenGiraf.id,
    });

    const bijtringLeeuw = await Product.create({
      name: "Bijtring/Rammelaar Leeuw",
      price: "12.50",
      description:
        "Houten bijtring met een leeuw. In zijn lijf zit een rammelkraal. Deze leeuw is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-leeuw/bijtring-leeuw.jpg",
      thumbnail: true,
      productId: bijtringLeeuw.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-leeuw/bijtring-leeuw_size.jpg",
      thumbnail: false,
      productId: bijtringLeeuw.id,
    });

    const kralenNijlpaard = await Product.create({
      name: "Nijlpaard bijtring met kralen",
      price: "12.50",
      description:
        "Nijlpaard bijtring met slierten met kralen, een omhaakte rammelkraal en 2 houten ringetjes. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
      size: "15cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. Het nijlpaard is ook mogelijk met kralenketting. Zonder geluid is een optie.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-nijlpaard.jpg",
      thumbnail: true,
      productId: kralenNijlpaard.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-nijlpaard_size_.jpg",
      thumbnail: false,
      productId: kralenNijlpaard.id,
    });

    const kralenSchaap = await Product.create({
      name: "Schaap bijtring met kralen",
      price: "17.50",
      description:
        "Schaap bijtring met twee kralenkettingen, een mooie bloem bijtring en een houten bijtring met de tekst 'Sweet Dreams' erop. Daarnaast zitten er kleine plastic ringetjes aan die leuke rammelen. Een aantal kralen is omhaakt met katoengaren, het schaap is van hout, de bloem is van plastic. De kralenkettingen zijn goed bevestigd met waxkoord.",
      size: "20cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De bloem bijtring en de kleine ringetjes kunnen ook in andere kleuren. Het schaap is ook mogelijk alleen met een kralenketting.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-schaap.jpg",
      thumbnail: true,
      productId: kralenSchaap.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-schaap_size.jpg",
      thumbnail: false,
      productId: kralenSchaap.id,
    });

    const kralenVos = await Product.create({
      name: "Vos bijtring met kralen",
      price: "12.50",
      description:
        "Vos bijtring met een kralenketting en een plastic bloem bijtring. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
      size: "13cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De bloem bijtring kan ook in andere kleuren. De vos is ook mogelijk zonder de bloem bijtring.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-vos.jpg",
      thumbnail: true,
      productId: kralenVos.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-vos_size.jpg",
      thumbnail: false,
      productId: kralenVos.id,
    });

    const kralenSter = await Product.create({
      name: "Ster bijtring met kralen",
      price: "12.50",
      description:
        "Ster bijtring met een kralenketting en een plastic bloem bijtring. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
      size: "13cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De bloem bijtring kan ook in andere kleuren. De ster is ook mogelijk zonder de bloem bijtring.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-ster.jpg",
      thumbnail: true,
      productId: kralenSter.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-ster_size.jpg",
      thumbnail: false,
      productId: kralenSter.id,
    });

    const kralenVlinder = await Product.create({
      name: "Vlinder bijtring met kralen",
      price: "12.50",
      description:
        "Vlinder bijtring met een kralenketting en een plastic bloem bijtring. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
      size: "13cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De bloem bijtring kan ook in andere kleuren. De vlinder is ook mogelijk zonder de bloem bijtring.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-vlinder.jpg",
      thumbnail: true,
      productId: kralenVlinder.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-vlinder_size.jpg",
      thumbnail: false,
      productId: kralenVlinder.id,
    });

    const kralenCupcake = await Product.create({
      name: "Cupcake bijtring met kralen",
      price: "9.95",
      description:
        "Cupcake bijtring met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
      size: "9cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-cupcake.jpg",
      thumbnail: true,
      productId: kralenCupcake.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-cupcake_size.jpg",
      thumbnail: false,
      productId: kralenCupcake.id,
    });

    const kralenPinguin = await Product.create({
      name: "Pinguin bijtring met kralen",
      price: "9.95",
      description:
        "Pinguïn bijtring met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
      size: "9cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-pingu.jpg",
      thumbnail: true,
      productId: kralenPinguin.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-pingu_size.jpg",
      thumbnail: false,
      productId: kralenPinguin.id,
    });

    const kralenDolfijn = await Product.create({
      name: "Dolfijn bijtring met kralen",
      price: "9.95",
      description:
        "Dolfijn bijtring met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
      size: "9cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-dolfijn.jpg",
      thumbnail: true,
      productId: kralenDolfijn.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-dolfijn_size.jpg",
      thumbnail: false,
      productId: kralenDolfijn.id,
    });

    const kralenOlifant = await Product.create({
      name: "Olifant bijtring met kralen",
      price: "9.95",
      description:
        "Olifant bijtring met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
      size: "9cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-olifant1.jpg",
      thumbnail: true,
      productId: kralenOlifant.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-olifant_size.jpg",
      thumbnail: false,
      productId: kralenOlifant.id,
    });

    const kralenDino = await Product.create({
      name: "Dino bijtring met kralen",
      price: "9.95",
      description:
        "Dino bijtring met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
      size: "9cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-dino.jpg",
      thumbnail: true,
      productId: kralenDino.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-dino_size.jpg",
      thumbnail: false,
      productId: kralenDino.id,
    });

    const kralen = await Product.create({
      name: "Bijtringen met kralen",
      price: "7.50",
      description:
        "Twee bijtringen met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtringen zijn van hout. De kralenketting is goed bevestigd met waxkoord. Doordat er twee bijtringen aan zitten maakt het ook geluid.",
      size: "12cm",
      optional:
        "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/bijt-kraal.jpg",
      thumbnail: true,
      productId: kralen.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/bijt-kraal_size.jpg",
      thumbnail: false,
      productId: kralen.id,
    });

    const bijtringKonijnOren = await Product.create({
      name: "Knisperende Konijnen Oren",
      price: "7.50",
      description:
        "Bijtring met knisperend konijnenoren. Deze konijnen oren zijn gemaakt van katoengaren, de bijtring is van hout.",
      size: "11cm",
      optional:
        "Het knisper kan vervangen worden door een piepertje, het oor wordt dan wel dikker. Zonder geluid is natuurlijk ook mogelijk. Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
      stock: 1,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-konijn-oren/bijt-konijnoor1.jpg",
      thumbnail: true,
      productId: bijtringKonijnOren.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-konijn-oren/bijt-konijnoor_size.jpg",
      thumbnail: false,
      productId: bijtringKonijnOren.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-konijn-oren/bijt-konijnoor_size1.jpg",
      thumbnail: false,
      productId: bijtringKonijnOren.id,
    });

    const doekjeAbel = await Product.create({
      name: "Knuffeldoekje Aap",
      price: "15.00",
      description:
        "Dit knuffeldoekje is gehaakt met zacht knuffelgaren. Het doekje is ongeveer 30 x 30 cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "30cm",
      optional:
        "Geluidjes, zoals piepertje of rammelkraal kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuffeldoekje-aap/doek-aap.jpg",
      thumbnail: true,
      productId: doekjeAbel.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuffeldoekje-aap/doek-aap_size.jpg",
      thumbnail: false,
      productId: doekjeAbel.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuffeldoekje-aap/doek-aap_size1.jpg",
      thumbnail: false,
      productId: doekjeAbel.id,
    });

    const doekjeIJsbeer = await Product.create({
      name: "Knuffeldoekje IJsbeer",
      price: "15.00",
      description:
        "Dit knuffeldoekje is gehaakt met zacht knuffelgaren. Het heeft een gevuld hoofdje met een plat lijfje. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "25cm",
      optional:
        "Geluidjes, zoals piepertje of rammelkraal kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuffeldoekje-ijsbeer/doek-ijsbeer.jpg",
      thumbnail: true,
      productId: doekjeIJsbeer.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuffeldoekje-ijsbeer/doek-ijsbeer_size.jpg",
      thumbnail: false,
      productId: doekjeIJsbeer.id,
    });

    const speenKoe = await Product.create({
      name: "Speenknuffel Koe",
      price: "15.00",
      description:
        "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door om het handje te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren en katoen. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "18cm",
      optional:
        "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/speenknuffel-koe/speen-koe_size.jpg",
      thumbnail: false,
      productId: speenKoe.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/speenknuffel-koe/speen-koe.jpg",
      thumbnail: true,
      productId: speenKoe.id,
    });

    const speenkoordKonijn = await Product.create({
      name: "Speenkoord Konijn",
      price: "9.95",
      description:
        "Speenkoord om een speentje aan te bevestigen. Het lusje is van waxkoord gemaakt, er zit een mooie houten speenclip op, verschillende houten kralen zijn omhaakt met katoengaren en een paar houten kralen zijn niet omhaakt. Het konijn is gehaakt met katoen. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "18cm",
      optional:
        "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Konijn kan ik in verschillende kleuren maken, natuurlijk kunnen de omhaakte kralen aangepast worden naar de kleuren die je wilt. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/speenkoord-konijn/speen-konijn.jpg",
      thumbnail: true,
      productId: speenkoordKonijn.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/speenkoord-konijn/speenkoord-konijn_size.jpg",
      thumbnail: false,
      productId: speenkoordKonijn.id,
    });

    const mobielKoala = await Product.create({
      name: "Mobiel Koala",
      price: "25.00",
      description:
        "Deze slapende koala mobiel is leuk voor op de babykamer. De koala en de bladeren zijn gehaakt van katoengaren, hij ligt op een mooie houten ring. Er zit een visdraad lus aan om hem aan op te hangen.",
      size: "18cm",
      optional:
        "Geluidjes, rammelkraal of een muziekdoosje(+ €7.50) kan toegevoegd worden.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/mobiel-koala/mobiel-koala.jpg",
      thumbnail: true,
      productId: mobielKoala.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/mobiel-koala/mobiel-koala_size.jpg",
      thumbnail: false,
      productId: mobielKoala.id,
    });

    const piepGiraf = await Product.create({
      name: "Piepspeeltje Giraf",
      price: "12.50",
      description:
        "Leuk piepspeeltje om mee te spelen.Deze giraf is gemaakt van zacht knuffelgaren en katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "15cm",
      optional:
        "Het piepertje kan ook vervangen worden voor een rammelkraal. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/piep-giraf/piep-guus.jpg",
      thumbnail: true,
      productId: piepGiraf.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/piep-giraf/piep-guus_size.jpg",
      thumbnail: false,
      productId: piepGiraf.id,
    });

    const bijtringLewis = await Product.create({
      name: "Bijtring/Rammelaar Leeuwenkop",
      price: "12.50",
      description:
        "Houten bijtring met een leeuwenkop. In het hoofdje zit een rammelkraal. Deze leeuw is gemaakt van een combinatie acryl/katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes. Het garen kan ook van alleen katoen zijn. De manen krijgen dan geen stonewashed effect. ",
      stock: 0,
      categoryId: rammelaar.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-leeuw/bijtring-lewis.jpg",
      thumbnail: true,
      productId: bijtringLewis.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/bijtring-leeuw/bijtring-lewis_size.jpg",
      thumbnail: false,
      productId: bijtringLewis.id,
    });

    const boxGiraf = await Product.create({
      name: "Boxpeeltje Giraf",
      price: "30.00",
      description:
        "Leuk boxspeeltje om mee te spelen in de box, auto, kinderwagen en maxi cosi. Heeft een stevige bevestigingsring die om veel dingen heen kan. Hij heeft allerlei leuke geluidjes en bijtringen aan zijn armen hangen. Deze giraf is gemaakt van zacht knuffelgaren en katoengaren. Er zitten verschillende vrolijke plastic bijtringen, houten kralen, houten ring en een leuk belletje. In het lijfje zit een rammelkraal. Dus een hoop speelplezier. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "25cm",
      optional:
        "Zonder rammelkraal is ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/box-guus/box-guus_size.jpg",
      thumbnail: false,
      productId: boxGiraf.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/box-guus/box-guus.jpg",
      thumbnail: true,
      productId: boxGiraf.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/box-guus/box-guus_size1.jpg",
      thumbnail: false,
      productId: boxGiraf.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/box-guus/box-guus_size2.jpg",
      thumbnail: false,
      productId: boxGiraf.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/box-guus/box-guus_size3.jpg",
      thumbnail: false,
      productId: boxGiraf.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/box-guus/box-guus_size4.jpg",
      thumbnail: false,
      productId: boxGiraf.id,
    });

    const tutKrokodil = await Product.create({
      name: "Knuffeldoekje Krokodil",
      price: "17.50",
      description:
        "Een knuffeldoekje met een stukje stof aan de binnenkant, in het lijfje zit een knispergeluid. Dit knuffeldoekje heeft een houten bijting aan een van de pootjes zitten. De krokodil is gehaakt van katoengaren. Van de kop tot en met de staart gemeten is dit knuffeldoekje ongeveer 25cm lang.",
      size: "25cm",
      optional:
        "Er kan een rammelkraal in het kopje gestopt worden, zonder knisper is ook mogelijk. De houten bijtring kan ook zonder tekst, of helemaal weggelaten worden.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/tut-krokodil/tut-krokodil.jpg",
      thumbnail: true,
      productId: tutKrokodil.id,
    });

    // ProductImage.create({
    //   url:
    //     "https://www.haakdraak.nl/afbeeldingen/tut-krokodil/tut-krokodil1.jpg",
    //   thumbnail: true,
    //   productId: tutKrokodil.id,
    // });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/tut-krokodil/tut-krokodil_size.jpg",
      thumbnail: false,
      productId: tutKrokodil.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/tut-krokodil/tut-krokodil_size1.jpg",
      thumbnail: false,
      productId: tutKrokodil.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/tut-krokodil/tut-krokodil_size2.jpg",
      thumbnail: false,
      productId: tutKrokodil.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/tut-krokodil/tut-krokodil_size3.jpg",
      thumbnail: false,
      productId: tutKrokodil.id,
    });

    const knufSnuf = await Product.create({
      name: "Konijn",
      price: "17.50",
      description:
        "Kleurrijk knuffel konijn, knuffeltje om heerlijk mee te knuffelen. Dit konijn is gemaakt van katoengaren. Zittend is het konijn ongeveer 25cm groot, liggend is hij ongeveer 35cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant. Welke kleuren heeft jouw konijn? Noem de kleuren van de onderdelen even in de opmerkingen bij je bestelling.",
      size: "25cm",
      optional:
        "Verschillende kleuren mogelijk! Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-snuf/knuf-snuf.jpg",
      thumbnail: true,
      productId: knufSnuf.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/knuf-snuf/knuf-snuf_size.jpg",
      thumbnail: false,
      productId: knufSnuf.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuf-snuf/knuf-snuf_size1.jpg",
      thumbnail: false,
      productId: knufSnuf.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuf-snuf/knuf-snuf_size2.jpg",
      thumbnail: false,
      productId: knufSnuf.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuf-snuf/knuf-snuf_size3.jpg",
      thumbnail: false,
      productId: knufSnuf.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuf-snuf/knuf-snuf_size4.jpg",
      thumbnail: false,
      productId: knufSnuf.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuf-snuf/knuf-snuf_size5.jpg",
      thumbnail: false,
      productId: knufSnuf.id,
    });

    const knufDraak = await Product.create({
      name: "Draakje",
      price: "15.00",
      description:
        "Knuffel draakje, zacht knuffeltje om heerlijk mee te knuffelen. Dit draakje is gemaakt van zacht knuffelgaren. Zittend is dit draakje ongeveer 17cm groot, liggend is hij ongeveer 20cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant. Welke kleur heeft een draak eigenlijk?? Je eigen kleur keus is mogelijk, noem de kleur even in de opmerkingen bij je bestelling.",
      size: "17cm",
      optional:
        "Dit draakje is ook leuk in katoengaren. Verschillende kleuren mogelijk! Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-draakje/knuf-draakje.jpg",
      thumbnail: true,
      productId: knufDraak.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/knuf-draakje/draakjes.jpg",
      thumbnail: false,
      productId: knufDraak.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuf-draakje/knuf-draakje_size.jpg",
      thumbnail: false,
      productId: knufDraak.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuf-draakje/knuf-draakje_size1.jpg",
      thumbnail: false,
      productId: knufDraak.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/knuf-draakje/knuf-draakje_size2.jpg",
      thumbnail: false,
      productId: knufDraak.id,
    });

    const sleutelBanaan = await Product.create({
      name: "Sleutelhanger Banaan",
      price: "7.50",
      description: "Sleutelhanger Banaan gehaakt met katoengaren.",
      size: "8cm",
      optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-banaan.jpg",
      thumbnail: true,
      productId: sleutelBanaan.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/fruit_size.jpg",
      thumbnail: false,
      productId: sleutelBanaan.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-banaan_size.jpg",
      thumbnail: false,
      productId: sleutelBanaan.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-banaan_size1.jpg",
      thumbnail: false,
      productId: sleutelBanaan.id,
    });

    const sleutelKers = await Product.create({
      name: "Sleutelhanger Kersen",
      price: "3.50",
      description: "Sleutelhanger Kersen gehaakt met katoengaren.",
      size: "6cm",
      optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/fruit_size.jpg",
      thumbnail: false,
      productId: sleutelKers.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-kers.jpg",
      thumbnail: true,
      productId: sleutelKers.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-kers_size.jpg",
      thumbnail: false,
      productId: sleutelKers.id,
    });

    const sleutelAppel = await Product.create({
      name: "Sleutelhanger Appel",
      price: "2.50",
      description: "Sleutelhanger Appel gehaakt met katoengaren.",
      size: "3cm",
      optional: "Sleutelring kan vervangen worden door een musketonhaakje.",
      stock: 1,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-appel.jpg",
      thumbnail: true,
      productId: sleutelAppel.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/fruit_size.jpg",
      thumbnail: false,
      productId: sleutelAppel.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-appel_size.jpg",
      thumbnail: false,
      productId: sleutelAppel.id,
    });

    const sleutelPeer = await Product.create({
      name: "Sleutelhanger Peer",
      price: "3.50",
      description:
        "Sleutelhanger Peer gehaakt met katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "4cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door geborduurde ^ ^ of | | oogjes. Sleutelring kan vervangen worden door een musketonhaakje.",
      stock: 0,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/fruit_size.jpg",
      thumbnail: false,
      productId: sleutelPeer.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-peer_size.jpg",
      thumbnail: false,
      productId: sleutelPeer.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-peer.jpg",
      thumbnail: true,
      productId: sleutelPeer.id,
    });

    const boxKrokodil = await Product.create({
      name: "Wagenhanger Krokodil",
      price: "17.50",
      description:
        "Leuk speeltje om mee te spelen in de box, auto, kinderwagen en maxi cosi. Heeft een stevige bevestigingsring die om veel dingen heen kan. Deze krokodil bestaat uit verschillende ringen als lijf, er zit een rammelring in het midden. Deze krokodil is gemaakt van katoengaren. In deze krokodil zit een plastic rammelring, houten kralen en houten ring bevestigd. Dus een hoop speelplezier. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "25cm",
      optional:
        "De rammelring kan vervangen worden voor een houten ring of gehaakte ring. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/box-krokodil/box-krokodil.jpg",
      thumbnail: true,
      productId: boxKrokodil.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/box-krokodil/box-krokodil_size.jpg",
      thumbnail: false,
      productId: boxKrokodil.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/box-krokodil/box-krokodil_size1.jpg",
      thumbnail: false,
      productId: boxKrokodil.id,
    });

    const sleutelAnanas3D = await Product.create({
      name: "Sleutelhanger Ananas",
      price: "3.50",
      description: "Sleutelhanger ananas gehaakt met katoengaren.",
      size: "3cm",
      optional: "Sleutelring kan vervangen worden door een musketonhaakje.",
      stock: 0,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-ananas3d.jpg",
      thumbnail: true,
      productId: sleutelAnanas3D.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-ananas3d_size.jpg",
      thumbnail: false,
      productId: sleutelAnanas3D.id,
    });

    const sleutelAnanas = await Product.create({
      name: "Sleutelhanger Ananas met gezichtje",
      price: "5.00",
      description:
        "Sleutelhanger ananas met een gezichtje gehaakt met katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "5cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes. Sleutelring kan vervangen worden door een musketonhaakje.",
      stock: 0,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-ananas.jpg",
      thumbnail: true,
      productId: sleutelAnanas.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-ananas_size.jpg",
      thumbnail: false,
      productId: sleutelAnanas.id,
    });

    const sleutelSpekje = await Product.create({
      name: "Sleutelhanger Spekje met gezichtje",
      price: "5.00",
      description:
        "Sleutelhanger spekje met een gezichtje gehaakt met katoengaren.",
      size: "9cm",
      optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-spekje.jpg",
      thumbnail: true,
      productId: sleutelSpekje.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-spekje_size.jpg",
      thumbnail: false,
      productId: sleutelSpekje.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-spekje_size1.jpg",
      thumbnail: false,
      productId: sleutelSpekje.id,
    });

    const sleutelDonut = await Product.create({
      name: "Sleutelhanger Donut",
      price: "5.00",
      description:
        'Sleutelhanger donut in verschillende "smaken" gehaakt met katoengaren. Deze lekkere donut kan ik in verschillende smaken maken, laat in de opmerkingen van het bestelformulier even weten welke "smaak" (beschrijving hoe die er uit ziet) je wilt.',
      size: "4cm",
      optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-donut2.jpg",
      thumbnail: true,
      productId: sleutelDonut.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-donut_size.jpg",
      thumbnail: false,
      productId: sleutelDonut.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-donut_size1.jpg",
      thumbnail: false,
      productId: sleutelDonut.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-donut_size2.jpg",
      thumbnail: false,
      productId: sleutelDonut.id,
    });

    const sleutelDonutEenhoorn = await Product.create({
      name: "Sleutelhanger Eenhoorn Donut",
      price: "5.00",
      description:
        "Sleutelhanger eenhoorn als donut gehaakt met katoengaren. Deze eenhoorn kan uit vele kleuren bestaan, laat in de opmerkingen van het bestelformulier even weten uit welke kleuren jouw eenhoorn bestaat.",
      size: "4cm",
      optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 0,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-eenhoorn/sleutel-donut-eenhoorn.jpg",
      thumbnail: true,
      productId: sleutelDonutEenhoorn.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-eenhoorn/sleutel-donut-eenhoorn_size.jpg",
      thumbnail: false,
      productId: sleutelDonutEenhoorn.id,
    });

    const sleutelIJsje2bol = await Product.create({
      name: "Sleutelhanger ijsje 2 bollen",
      price: "3.00",
      description:
        'Sleutelhanger ijsje met 2 bollen in verschillende "smaken" gehaakt met katoengaren. Dit lekkere ijs kan ik in verschillende smaken maken, laat in de opmerkingen van het bestelformulier even weten welke 2 "smaken" (kleuren) je wilt.',
      size: "4cm",
      optional: "Sleutelring kan vervangen worden door een musketonhaakje.",
      stock: 0,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-2ijsje.jpg",
      thumbnail: true,
      productId: sleutelIJsje2bol.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-2ijsje_size.jpg",
      thumbnail: false,
      productId: sleutelIJsje2bol.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-2ijsje_size1.jpg",
      thumbnail: false,
      productId: sleutelIJsje2bol.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-2ijsje_size2.jpg",
      thumbnail: false,
      productId: sleutelIJsje2bol.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-2ijsje_size3.jpg",
      thumbnail: false,
      productId: sleutelIJsje2bol.id,
    });

    const sleutelIJsje = await Product.create({
      name: "Sleutelhanger ijsje",
      price: "2.50",
      description:
        'Sleutelhanger ijsje met 1 bol in verschillende "smaken" gehaakt met katoengaren. Dit lekkere ijs kan ik in verschillende smaken maken, laat in de opmerkingen van het bestelformulier even weten welke "smaak" (kleuren) je wilt.',
      size: "4cm",
      optional: "Sleutelring kan vervangen worden door een musketonhaakje.",
      stock: 0,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-ijsje1.jpg",
      thumbnail: true,
      productId: sleutelIJsje.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-ijsje_size.jpg",
      thumbnail: false,
      productId: sleutelIJsje.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-ijsje_size1.jpg",
      thumbnail: false,
      productId: sleutelIJsje.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-ijsje_size2.jpg",
      thumbnail: false,
      productId: sleutelIJsje.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-ijsje_size3.jpg",
      thumbnail: false,
      productId: sleutelIJsje.id,
    });

    const kubusLeeuw = await Product.create({
      name: "Speelkubus Leeuw",
      price: "32.50",
      description:
        "Aan deze speelkubus kunnen de kleintjes heel veel ontdekken. Er zitten verschillende geluiden in, piepertje in zijn voetje en rammeltjes in zijn manen, de houten ringetjes aan zijn staart rammelen als ze tegen elkaar komen. Met de spiegel valt veel te ontdekken, de plastic bijtring is leuk om op te bijten maar je kan hem op zijn bloemenhart doen.  Ik maak gebruik van veiligheidsoogjes en neusje deze bevestig ik ook goed aan de binnenkant. De kubus is 10x10 cm, de leeuw is ongeveer 12cm groot.",
      size: "12cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes, het neus kan vervangen worden door een geborduurd neusje. De plastic bijtring en bloem bijtring kunnen in andere kleuren. De kubus kan in verschillende kleuren gehaakt worden. Als je andere kleuren wilt laat dit dan even weten.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/kubus-leeuw/kubus-leeuw.jpg",
      thumbnail: true,
      productId: kubusLeeuw.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/kubus-leeuw/kubus-leeuw_size.jpg",
      thumbnail: false,
      productId: kubusLeeuw.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/kubus-leeuw/kubus-leeuw_size1.jpg",
      thumbnail: false,
      productId: kubusLeeuw.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/kubus-leeuw/kubus-leeuw_size2.jpg",
      thumbnail: false,
      productId: kubusLeeuw.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/kubus-leeuw/kubus-leeuw_size3.jpg",
      thumbnail: false,
      productId: kubusLeeuw.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/kubus-leeuw/kubus-leeuw_size4.jpg",
      thumbnail: false,
      productId: kubusLeeuw.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/kubus-leeuw/kubus-leeuw_size5.jpg",
      thumbnail: false,
      productId: kubusLeeuw.id,
    });

    ProductImage.create({
      url:
        "https://www.haakdraak.nl/afbeeldingen/kubus-leeuw/kubus-leeuw_size6.jpg",
      thumbnail: false,
      productId: kubusLeeuw.id,
    });

    const handEzel = await Product.create({
      name: "Handpop Ezel",
      price: "15.00",
      description:
        "Handpop ezel is leuk om mee te spelen, zowel voor groot als klein. Ik maak gebruik van veiligheidsoogjes en neusje deze bevestig ik ook goed aan de binnenkant.",
      size: "20cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
      stock: 0,
      categoryId: overige.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/handpop/hand-ezel.jpg",
      thumbnail: true,
      productId: handEzel.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/handpop/hand-ezel_size.jpg",
      thumbnail: false,
      productId: handEzel.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/handpop/handpoppen.jpg",
      thumbnail: false,
      productId: handEzel.id,
    });

    const handKoe = await Product.create({
      name: "Handpop Koe",
      price: "15.00",
      description:
        "Handpop koe is leuk om mee te spelen, zowel voor groot als klein. Ik maak gebruik van veiligheidsoogjes en neusje deze bevestig ik ook goed aan de binnenkant.",
      size: "20cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
      stock: 0,
      categoryId: overige.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/handpop/hand-koe.jpg",
      thumbnail: true,
      productId: handKoe.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/handpop/hand-koe_size.jpg",
      thumbnail: false,
      productId: handKoe.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/handpop/handpoppen.jpg",
      thumbnail: false,
      productId: handKoe.id,
    });

    const tutEend = await Product.create({
      name: "Knuffeldoekje Eend",
      price: "17.50",
      description:
        "Een knuffeldoekje met een stukje stof aan de binnenkant.  De eend is gehaakt van katoengaren.",
      size: "23cm",
      optional:
        "Er kan een rammelkraal in het kopje gestopt worden en/of knisper in het lijf. Er kan een  houten bijtring aan bevestigd worden in plaats van een van de pootjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/tut-eend/tut-eend.jpg",
      thumbnail: true,
      productId: tutEend.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/tut-eend/tut-eend_size.jpg",
      thumbnail: false,
      productId: tutEend.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/tut-eend/tut-eend_size2.jpg",
      thumbnail: false,
      productId: tutEend.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/tut-eend/tut-eend_size1.jpg",
      thumbnail: false,
      productId: tutEend.id,
    });

    const tuimelKikker = await Product.create({
      name: "Tuimel Kikker",
      price: "20.00",
      description:
        "Een tuimelaar kikker, bij elke tuimel maakt de kikker geluid. De kikker is gehaakt van katoengaren, in de kikker zit een tuimelaar. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "13cm",
      optional:
        "De veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
      stock: 1,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/tuimel-kikker/tuimel-kikker.jpg",
      thumbnail: true,
      productId: tuimelKikker.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/tuimel-kikker/tuimel-kikker_size.jpg",
      thumbnail: false,
      productId: tuimelKikker.id,
    });

    const handGiraf = await Product.create({
      name: "Handpop Giraf",
      price: "27.50",
      description:
        "Handpop Giraf is leuk om mee te spelen, zowel voor groot als klein. Je hand past in de mond om die te laten bewegen. Ik maak gebruik van veiligheidsoogjes en neusje deze bevestig ik ook goed aan de binnenkant.",
      size: "30cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
      stock: 0,
      categoryId: overige.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/handpop/hand-giraf.jpg",
      thumbnail: true,
      productId: handGiraf.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/handpop/hand-giraf_size.jpg",
      thumbnail: false,
      productId: handGiraf.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/handpop/hand-giraf_size1.jpg",
      thumbnail: false,
      productId: handGiraf.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/handpop/hand-giraf_size2.jpg",
      thumbnail: false,
      productId: handGiraf.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/handpop/hand-giraf_size3.jpg",
      thumbnail: false,
      productId: handGiraf.id,
    });

    const tutOlifant = await Product.create({
      name: "Tutdoekje Olifant",
      price: "15.00",
      description:
        "Een tutdoekje olifant met een zachte rug en een katoene buik. In zijn buik zit knisper. De olifant is gehaakt van katoengaren en zacht knuffelgaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "20cm",
      optional:
        "Het knisper kan vervangen worden door een rammelkraal in het hoofdje. Zonder geluid is natuurlijk ook mogelijk. De veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
      stock: 0,
      categoryId: babyOverig.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/tut-olifant/tut-olifant.jpg",
      thumbnail: true,
      productId: tutOlifant.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/tut-olifant/tut-olifant_size.jpg",
      thumbnail: false,
      productId: tutOlifant.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/tut-olifant/tut-olifant_size1.jpg",
      thumbnail: false,
      productId: tutOlifant.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/tut-olifant/tut-olifant_size2.jpg",
      thumbnail: false,
      productId: tutOlifant.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/tut-olifant/tut-olifant_size3.jpg",
      thumbnail: false,
      productId: tutOlifant.id,
    });

    const puzLeeuw = await Product.create({
      name: "Puzzelbal Leeuw",
      price: "17.50",
      description:
        "Een puzzelbal leeuw. Deze leeuw kan in 3 delen uit elkaar gehaald worden en ook weer in elkaar gepuzzeld worden. De leeuw is gehaakt van dikker katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "15cm",
      optional: "",
      stock: 1,
      categoryId: overige.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/puz-leeuw/puz-leeuw.jpg",
      thumbnail: true,
      productId: puzLeeuw.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/puz-leeuw/puz-leeuw_size.jpg",
      thumbnail: false,
      productId: puzLeeuw.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/puz-leeuw/puz-leeuw_size1.jpg",
      thumbnail: false,
      productId: puzLeeuw.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/puz-leeuw/puz-leeuw_size2.jpg",
      thumbnail: false,
      productId: puzLeeuw.id,
    });

    const puzDino = await Product.create({
      name: "Puzzelbal Dino",
      price: "17.50",
      description:
        "Een puzzelbal dino. Deze dino kan in 3 delen uit elkaar gehaald worden en ook weer in elkaar gepuzzeld worden. De dino is gehaakt van dikker katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "15cm",
      optional:
        "Deze dino kan met en zonder stekels gemaakt worden. En in vele kleuren mogelijk. Vermeld je in de opmerkingen even welke kleuren (2) je wilt en of je met of zonder stekels wilt.",
      stock: 0,
      categoryId: overige.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/puz-dino/puz-dino.jpg",
      thumbnail: true,
      productId: puzDino.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/puz-dino/puz-dino_size.jpg",
      thumbnail: false,
      productId: puzDino.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/puz-dino/puz-dino_size1.jpg",
      thumbnail: false,
      productId: puzDino.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/puz-dino/puz-dino_size2.jpg",
      thumbnail: false,
      productId: puzDino.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/puz-dino/puz-dino_size3.jpg",
      thumbnail: false,
      productId: puzDino.id,
    });

    const handAap = await Product.create({
      name: "Handpop Aap",
      price: "35.00",
      description:
        "Handpop Aap is leuk om mee te spelen, zowel voor groot als klein. Je hand past in de mond om die te laten bewegen. Ik maak gebruik van veiligheidsoogjes en neusje deze bevestig ik ook goed aan de binnenkant.",
      size: "25cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
      stock: 0,
      categoryId: overige.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/handpop/hand-aap.jpg",
      thumbnail: true,
      productId: handAap.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/handpop/hand-aap_size.jpg",
      thumbnail: false,
      productId: handAap.id,
    });

    const sleutelPako = await Product.create({
      name: "Sleutelhanger Papegaai",
      price: "7.50",
      description:
        "Sleutelhanger papegaai gehaakt met katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "9cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheidsoogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes.",
      stock: 1,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-papegaai/sleutel-pako.jpg",
      thumbnail: true,
      productId: sleutelPako.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-papegaai/sleutel-pako_size.jpg",
      thumbnail: false,
      productId: sleutelPako.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-papegaai/sleutel-pako_size1.jpg",
      thumbnail: false,
      productId: sleutelPako.id,
    });

    const sleutelCactus = await Product.create({
      name: "Sleutelhanger Cactus",
      price: "7.50",
      description:
        "Sleutelhanger cactus gehaakt met katoengaren. De cactus is in 3 vormen mogelijk. Formaat verschilt per cactus de grootste is 7cm.",
      size: "9cm",
      optional:
        "Sleutelring kan vervangen worden door een musketonhaakje. Vermeld je bij de opmerkingen even welke vorm je wilt.",
      stock: 0,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-cactus/sleutel-cooper.jpg",
      thumbnail: true,
      productId: sleutelCactus.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-cactus/sleutel-cactus_size.jpg",
      thumbnail: false,
      productId: sleutelCactus.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-cactus/sleutel-cactus_size1.jpg",
      thumbnail: false,
      productId: sleutelCactus.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-cactus/sleutel-cactus_size2.jpg",
      thumbnail: false,
      productId: sleutelCactus.id,
    });

    const sleutelPotlood = await Product.create({
      name: "Sleutelhanger Potlood",
      price: "5.00",
      description: "Sleutelhanger potlood gehaakt met katoengaren.",
      size: "6cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring. Vermeld je bij de opmerkingen als je een andere kleur wilt (en welke kleuren).",
      stock: 1,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-potlood/sleutel-potlood.jpg",
      thumbnail: true,
      productId: sleutelPotlood.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-potlood/sleutel-potlood_size.jpg",
      thumbnail: false,
      productId: sleutelPotlood.id,
    });

    const knufGuus = await Product.create({
      name: "Zachte Giraf",
      price: "25.00",
      description:
        "Knuffel giraf, zachte knuffel om heerlijk mee te knuffelen. Deze giraf is gemaakt van zacht knuffelgaren. Zittend is deze giraf ongeveer 35cm groot, liggend is hij ongeveer 40cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant. Deze giraf kan ik ook in een kleiner formaat maken, dan is hij zitten ongeveer 15cm. Als je de kleinere variant wilt vermeld dit even in de opmerkingen bij je bestelling.",
      size: "35cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door borduurde slapende oogjes.",
      stock: 0,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-giraf/knuf-giraf.jpg",
      thumbnail: true,
      productId: knufGuus.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-giraf/knuf-giraf_size.jpg",
      thumbnail: false,
      productId: knufGuus.id,
    });

    const sleutelEgel = await Product.create({
      name: "Sleutelhanger Egel",
      price: "7.50",
      description: "Sleutelhanger Egel gehaakt met katoengaren.",
      size: "7cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring. Vermeld je bij de opmerkingen als je een andere kleur wilt (en welke kleuren).",
      stock: 0,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-egel/sleutel-egel.jpg",
      thumbnail: true,
      productId: sleutelEgel.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-egel/sleutel-egel_size.jpg",
      thumbnail: false,
      productId: sleutelEgel.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-egel/sleutel-egel_size1.jpg",
      thumbnail: false,
      productId: sleutelEgel.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-egel/sleutel-egel_size2.jpg",
      thumbnail: false,
      productId: sleutelEgel.id,
    });

    const knufAbel = await Product.create({
      name: "Zachte Aap",
      price: "15.00",
      description:
        "Knuffel aap, zachte knuffel om heerlijk mee te knuffelen. Deze aap is gemaakt van zacht knuffelgaren. Zittend is deze aap ongeveer 15cm groot, liggend is hij ongeveer 22cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant. Deze aap kan ik ook in een groter formaat maken, dan is hij zitten ongeveer 35cm. Als je de grotere variant wilt vermeld dit even in de opmerkingen bij je bestelling, prijs van de grotere aap is €25.00.",
      size: "15cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door borduurde slapende oogjes.",
      stock: 0,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-abel/knuf-abel.jpg",
      thumbnail: true,
      productId: knufAbel.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-abel/knuf-abel_size.jpg",
      thumbnail: false,
      productId: knufAbel.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-abel/knuf-abel_size1.jpg",
      thumbnail: false,
      productId: knufAbel.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-abel/knuf-abel_size2.jpg",
      thumbnail: false,
      productId: knufAbel.id,
    });

    const sleutelOctopus = await Product.create({
      name: "Sleutelhanger Octopus",
      price: "5.00",
      description: "Sleutelhanger octopus gehaakt met katoengaren.",
      size: "6cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring. Vermeld je bij de opmerkingen welke kleur je wilt.",
      stock: 2,
      categoryId: sleutelhangers.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-octopus/sleutel-octopus.jpg",
      thumbnail: true,
      productId: sleutelOctopus.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-octopus/sleutel-octopus_size.jpg",
      thumbnail: false,
      productId: sleutelOctopus.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-octopus/sleutel-octopus_size2.jpg",
      thumbnail: false,
      productId: sleutelOctopus.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-octopus/sleutel-octopus_size1.jpg",
      thumbnail: false,
      productId: sleutelOctopus.id,
    });
  } catch (error) {
    console.log("seeding error:", error);
  }
}

seedDataBase();
