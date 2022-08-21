const fs = require('fs');

const fileNames = [];

process.argv.forEach((fileName, idx) => {
  if (idx <= 1) return;
  if (idx >= 4) throw new Error("Usage:: 'node package-switcher [SourceFile] [DestinationFile]'");
  fileNames.push(fileName);
});

fs.copyFile(fileNames[0], fileNames[1], err => {
  if (err) throw err;
  console.log(`${fileNames[0]} was copied to ${fileNames[1]}`);
});
