// EXTERNAL PACKAGES > INQUIRER AND UTIL INSTALLED, FS DOES NOT REQUIRE INSTALL
// DOCUMENTATION > INQUIRER (https://www.npmjs.com/package/inquirer)
// DOCUMENTATION > UTIL (https://www.npmjs.com/package/util)
// DOCUMENTATION > FS (https://nodejs.dev/learn/the-nodejs-fs-module)
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./util/generateMarkdown');

// CONST > QUESTIONS FOR README - This was pulled from the module example. I used inquirer documentation (https://www.npmjs.com/package/inquirer) to test 'types' for the questions so they were not all just text inputs.
// DOCUMENTATION > PROFESSIONAL README GUIDE (https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
// NOTE: I read over the documentation for the Professional ReadMe Guide and some of the questions I changed based on my experience reading other readmes and what I think would be helpful to see in a README. I want to work on adding MEDIA QUESTIONS to the readme, but I am not there yet.
const readmeQuestions = [{
        
        type: "input",
        name: "title",
        message: "What is the project title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Lets start with a Project Title! This will make your readme PROFESSIONAL.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "What is the project description?",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Dont leave us guessing. Tell us what the project is about.')
                return false;
            }
        }
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
        message: "How should users install and test your code?",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('This helps everyone build a Professional ReadMe, tell us how you did it and how to test the code.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "collaboration",
        message: "What collaboration was done for this project? Who did you work with? How was the contribution delegated?",
        validate: collaborationInput => {
            if (collaborationInput) {
                return true;
            } else {
                console.log('If you didnt work with anyone, thats cool. Tell us this was a solo project. Youre a rockstar.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "challenges",
        message: "What opportunities and challenges did you have with this project?",
        validate: challengesInput => {
            if (challengesInput) {
                return true;
            } else {
                console.log('None? Whatsoever? I think you can do better than that. What did you learn?')
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "future_dev",
        message: "Will their be future development and maintenance of this code?",
        choices: true,
    },
    {
        type:"checkbox",
        name: "license_type",
        message: "What type of license?",
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause SIMPLIFIED License', 'BSD 3-Clause NEW or REVISED License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0','GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: "input",
        name: "github_username",
        message: "What is your GitHub username?",
        validate: github_usernameInput => {
            if (github_usernameInput) {
                return true;
            } else {
                console.log('Dont be shy! Where can we find your project?')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    }
];

// TODO: Create a function to write README file
// TODO STATUS > COMPLETED - MIGRATED IT FROM ITS OWN SECTION TO THE PROMPTS SECTION    
function writeFile(fileName,data) {
fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("COMPLETE! Read Me has been generated. View the FILE EXPLORER to find your file with the name of your PROJECT!")
        }
    })
}

// FUNCTION > INITIALIZE PROGRAM
function init() {
    inquirer.prompt(readmeQuestions)
    .then(function(data) {
        writeFile("NEW-PROFESSIONAL-README.md", generateMarkdown(data));
        console.log(data)
    })
}

// function call to initialize program
init();