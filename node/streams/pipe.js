const fs = require("fs");

const readStream = fs.createReadStream("text.txt");
const writeStream = fs.createWriteStream("copy.txt");

readStream.pipe(writeStream);
