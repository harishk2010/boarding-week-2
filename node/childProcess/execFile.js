const { execFile } = require("child_process");

// execFile("notepad.exe", (err) => {
//   if (err) console.log("Err:", err)
//   else console.log("Opened Nodepad")
// });
execFile("node",['cmds.js'], (err) => {
  if (err) console.log("Err:", err)
  else console.log("Opened Nodepad")
});
