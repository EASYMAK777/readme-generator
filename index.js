



var inquirer = require("inquirer");
const { fstat } = require("fs");



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


        }

    ]).then(function(data) {

        var filename = data.name.toLowerCase().split(' ').join('') + ".json";
      
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      
          if (err) {
            return console.log(err);
          }
      
          console.log("Success!");
      
        });
      });



    