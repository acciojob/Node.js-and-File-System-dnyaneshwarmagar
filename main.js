const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    removeWordFromFile(filename, word);
    rl.close();
  });
});

function removeWordFromFile(filePath, wordToRemove) {
  // Read the file contents
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }

    // Remove all occurrences of the specified word
    const regex = new RegExp(wordToRemove, 'g');
    const modifiedContent = data.replace(regex, '');

    // Write the modified content back to the same file
    fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to file: ${err.message}`);
        return;
      }

      console.log(`All occurrences of "${wordToRemove}" have been removed from the file.`);
    });
  });
}
