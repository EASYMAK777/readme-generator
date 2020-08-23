const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

console.log(inquirer);
console.log(fs);
console.log(util);
console.log(writeFileAsync);

const questions = [
    {
        type:"input",
        message: "what is the name of your project",
        name:"title"
    }
];

console.log(questions);