const fs = require("fs");
const write = fs.createWriteStream("text.txt");

write.write("my name is billa!");
