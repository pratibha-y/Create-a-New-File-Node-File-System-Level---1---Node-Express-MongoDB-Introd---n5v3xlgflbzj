const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  await fs.writeFile(fileName, fileContent);
  // write code here
  // dont change function name
  

};

module.exports = { writeFile };
