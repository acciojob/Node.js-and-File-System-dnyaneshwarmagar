const fs = require("fs");
const path = require("path");

if (process.argv.length < 4) {
  console.log("Usage: node app.js <filename> <wordToRemove>");
  process.exit(1);
}

const [fname, remove] = process.argv.slice(2);

const filePath = path.join(__dirname, fname);

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
    return;
  }

  const regex = new RegExp(`\\b${remove}\\b`, "g");
  const modifiedData = data.replace(regex, "");

  fs.writeFile(filePath, modifiedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing to the file: ${err}`);
      return;
    }

    console.log(`Removed ${remove} from ${fname}`);
  });
});