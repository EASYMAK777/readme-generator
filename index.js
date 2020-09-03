const questions = [
    {
        type: "input",
        message: "What is your project called?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "Enter your table of contents",
        name: "contents"
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

];


var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");
var generateMarkdown = require("./generatemarkdown");


function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

inquirer.prompt(questions).then(answer =>{
    console.log(answer);
    writeToFile("newREADME.md", generateMarkdown({...answer}))
}) 



















