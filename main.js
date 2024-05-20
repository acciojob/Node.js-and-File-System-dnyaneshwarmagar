const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    // TODO: Implement this function
    rl.close();
  });
});
