const fs = require('fs');
const sharp = require("sharp");

async function process() {
  try {
    await sharp("input.jpg")
         .tile({
      layout: "iiif",
      id: "data"
  })
      .toFile("data");
  } catch (error) {
    console.log(error);
  }
  
  // react-iiif-viewer chokes if it doesn have a 'sizes' key in the info file
  
  const infoFile = "./data/info.json"
  const info = require(infoFile)
  info.sizes = []
  info["@id"] = "data"
  
  fs.writeFile(infoFile, JSON.stringify(info, null, 2), function err(){})
  
}

process();
