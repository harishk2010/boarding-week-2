const fs = require("fs");

const file = "./filesystems/ranagalam.txt";

function FileExits(file) {
  return fs.existsSync(file);
}

console.log(FileExits(file));
