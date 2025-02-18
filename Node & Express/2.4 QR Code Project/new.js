import fs from "fs";
import inquirer from "inquirer";

const qr = require("qr-image");

console.log("Welcome to the QR Code Generator!");

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log("Generating QR code for:", url);

    const qr_svg = qr.image(url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qr_img2.png"));
    console.log("QR code image saved as 'qr_img2.png'.");

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The URL has been saved in 'URL.txt'!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong:", error);
    }
  });