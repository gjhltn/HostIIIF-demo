var sharp = require("sharp");

async function process() {
  try {
    await sharp("input.jpg")
         .tile({
      layout: "iiif",
      id: "."
  })
      .toFile("data");
  } catch (error) {
    console.log(error);
  }
}

process();
