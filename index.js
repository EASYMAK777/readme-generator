// const inquirer = require('inquirer');
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




const fs = require("fs");
const inquirer = require("inquirer");

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
            message: "How do you want your application to be used?",
            name: "usage"
        },

        {
            type: "checkbox",
            message: "Please select a license.",
            choices: ["ISC",
                "MIT",
                "GNU GPLv3"
            ],
            name: "license"
        },

        {
            type: "input",
            message: "Enter the test instructions for this app",
            name: "tests"
        },

        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {

            type: "input",
            message: "What is the github pages link for this project?",
            name: "link"


        },







    ])
