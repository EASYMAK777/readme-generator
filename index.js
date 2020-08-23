const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const { type } = require('os');

const writeFileAsync = util.promisify(fs.writeFile);


fucntion promptUser(){
    return inquirer.prompt([{

        type: "input",
        message: "What is the name of your project?",
        name: "title"
    }
    ])
}




