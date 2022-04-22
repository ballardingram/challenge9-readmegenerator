// These are the external packages needed.
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// List of prompts for the read me generator.
const readmequestions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the project description?",
    },
    {
        type: "checkbox",
        name: "builtwith",
        message: "What did you use to build your project?",
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Inquirer', 'Jest', 'React', 'API'],
    },
    {
        type: "input",
        name:"installation",
        message: "How should users install your code?",
    },
    {
        type: "input",
        name: "collaboration",
        message: "What collaboration was done for this project? Who did you work with? How was the contribution delegated?",
    },
    {
        type: "input",
        name: "challenges",
        message: "What opportunities and challenges did you have with this project?",
    },
    {
        type: "confirm",
        name: "future dev",
        message: "Will their be future development and maintenance of this code?",
        choices: true,
    },
    {
        type:"checkbox",
        name: "license type",
        message: "What type of license?",
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause SIMPLIFIED License', 'BSD 3-Clause NEW or REVISED License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0','GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: "input",
        name: "github username",
        message: "What is your GitHub username?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("COMPLETE! Read Me has been generated.")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(readmequestions)
    .then(response => {console.log(response)})
}

// Function call to initialize app
init();
