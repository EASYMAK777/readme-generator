// const inquirer = require('inquirer');
// const fs = require("fs");
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);

// console.log(inquirer);
// console.log(fs);
// console.log(util);
// console.log(writeFileAsync);

// const questions = [
// //inquirer.prompt

// //refer to 14_ins_inquirer_demo
//     {
//         type:"input",
//         message: "what is the name of your project",
//         name:"title"
//     }
// ];

// console.log(questions);


// // var inquirer = require("inquirer");

// // inquirer
// //   .prompt([
// //     {
// //       type: "input",
// //       message: "What is your user name?",
// //       name: "username"
// //     },
// //     {
// //       type: "password",
// //       message: "What is your password?",
// //       name: "password"
// //     },
// //     {
// //       type: "password",
// //       message: "Re-enter password to confirm:",
// //       name: "confirm"
// //     }
// //   ])
// //   .then(function(response) {

// //     if (response.confirm === response.password) {
// //       console.log("Success!");
// //     }
// //     else {
// //       console.log("You forgot your password already?!");
// //     }
// //   });




var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project called?",
      name: "name"
    },
    {
      type: "input",
      message: "Please enter a description of your project?",
      name: "description"
    },
    {
      type: "input",
      message: "Enter your table of contents",
      name: "table of contents"
    },

    {
        type: "input",
        message: "Who are the contributers for this project?",
        name: "contributors"
    },

    {
        type: "input",
        message: "Please enter installation instructions",
        name: "installation"
    },

    {
        type: "input",
        message: "Installation",
        name: "confirm"
    },

    {
        type: "input",
        message: "Installation",
        name: "confirm"
    },





  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });
