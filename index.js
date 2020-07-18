// array of questions for user
const questions = [
    "What is the Title of your project?",
    "Include a Description here",
    "How do you install the system? Please provide a step by step description!",
    "Please provide instructions on how to use the application",
    "What is the license name?",
    "Please enter github usernames of any other contributors",
    "Provide examples on how to run tests.",
    "What's your email address",
    "What is your name?",
    "What is your github username?",
    "Enter the destination to the picture of your screenshot (e.g: 'assets/screenshot.jpg')",
    "Enter the destination to your application (e.g: www.user.chage/application/')",
    "Enter the destination to your repository",
];
const badges =
    [
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
    ]

const listOfChoices = ["Apache 2.0", "Boost", "CCO", "GNU V3", "MIT", "Mozilla", "Zlib"]

function init() {
    const inquirer = require('inquirer');
    const fs = require('fs');
    const path = require('path');
    console.log("Hi, welcome to the excellent ReadMe Generator! Helpful hint, you can use <br> to create line breaks! More hints to come in future versions")
    const userResponse = inquirer

        .prompt([

            {
                type: "input",
                message: questions[0],
                name: "title"
            },
            {
                type: "input",
                message: questions[1],
                name: "description"
            },
            {
                type: "input",
                message: questions[2],
                name: "installation"
            },
            {
                type: "input",
                message: questions[3],
                name: "usage"
            },
            {
                type: "list",
                message: questions[4],
                name: "license",
                choices: listOfChoices
            },
            {
                type: "input",
                message: questions[5],
                name: "contributing"
            },
            {
                type: "input",
                message: questions[6],
                name: "tests"
            },
            {
                type: "input",
                message: questions[7],
                name: "questions"
            },
            {
                type: "input",
                message: questions[8],
                name: "author"
            },
            {
                type: "input",
                message: questions[9],
                name: "url"
            },
            {
                type: "input",
                message: questions[10],
                name: "imageurl"
            },
            {
                type: "input",
                message: questions[11],
                name: "appurl"
            },
            {
                type: "input",
                message: questions[12],
                name: "repourl"
            },
            {
                type: "confirm",
                message: "Are you happy with your answers?",
                name: "confirming"
            },

        ])
        .then(userResponse => {
            const resConfirming = userResponse.confirming
            if (resConfirming == false) {
                console.log("Please start again if you want")
                return;
            }
            const resTitle = userResponse.title;
            const resDescription = userResponse.description;
            const resInstallation = userResponse.installation;
            const resUsage = userResponse.usage;
            const resLicense = userResponse.license;
            const indexPick = listOfChoices.indexOf(resLicense)
            const resLicense2 = badges[indexPick]
            const resContributing = userResponse.contributing;
            const resTests = userResponse.tests;
            const resQuestions = userResponse.questions;
            const resAuthor = userResponse.author;
            const resURL = userResponse.url;
            const resIMGURL = userResponse.imageurl;
            const resAppURL = userResponse.appurl;
            const resRepoURL = userResponse.repourl;
            console.log("Generating Readme")
            var readmeOutput = (`# ${resTitle} 
            \n${resLicense2}
            \n ${resDescription}
            \n<img src="${resIMGURL}" width="500"  alt="Picture"/>
            \n ## Contents
            \n* [Installation](#Installation)
            \n* [Usage](#Usage)
            \n* [Contributors](#Contributors)
            \n* [Tests](#Tests)
            \n* [Links](#Links)
            \n* [Questions](#Questions)
            \n ## Installation
            \n ${resInstallation}
            \n ## Usage
            \n ${resUsage}
            \n ## Contributors
            \n ${resContributing}
            \n ## Tests
            \n ${resTests}
            \n ## Links
            \n* [${resTitle} Application](${resAppURL})
            \n* [${resTitle} Repository](${resRepoURL})
            \n ## Questions 
            \n [${resAuthor}](https://github.com/${resURL})
            \n If you have any problems or questions about the application please contact me via email on ${resQuestions}
            `)
            fs.writeFile('generatedreadme/readme.md', readmeOutput, function (err) {
                if (err) throw err;
                console.log('File is created successfully. It will appear in the "generatedreadme" folder! Edits can be made there.');
                console.log('Functionality will be added to open automatically in future version');

            });

        })

}

// function call to initialize program
init();
