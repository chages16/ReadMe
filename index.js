// array of questions for user
const questions = [
    "What is the Title of your project?",
    "Include a Description here",
    "How do you install the system? Please provide a step by step description!",
    "Please provide instructions on how to use the application",
    "What is the license name?",
    "Please enter github usernames of any other contributors",
    "Provide examples on how to run tests.",
    "Please enter any questions/ bugs/ next steps?",
    "What is your name?",
    "What is your personal github URL?",
    "Enter the destination to the picture of your screenshot (e.g: 'assets/screenshot.jpg')",
    "Enter the destination to your application (e.g: www.user.chage/application/')",
    "Enter the destination to your repository",
];

function init() {
    const inquirer = require('inquirer');
    const fs = require('fs');
    const path = require('path');
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
                type: "input",
                message: questions[4],
                name: "license"
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
            \n ${resDescription}
            \n<img src="${resIMGURL}" width="500"  alt="Picture"/>
            \n ## Contents
            \n* [Installation](#Installation)
            \n* [Usage](#Usage)
            \n* [License](#License)
            \n* [Contributors](#Contributors)
            \n* [Tests](#Tests)
            \n* [Links](#Links)
            \n* [Author](#Author)
            \n ## Installation
            \n ${resInstallation}
            \n ## Usage
            \n ${resUsage}
            \n ## License 
            \n This project is licensed under the ${resLicense}
            \n ## Contributors
            \n ${resContributing}
            \n ## Tests
            \n ${resTests}
            \n ## Links
            \n [${resTitle} Application](${resAppURL})
            \n [${resTitle} Repository](${resRepoURL})
            \n ## Author 
            \n [${resAuthor}](${resURL})
            `)
            fs.writeFile('generatedreadme/readme.md', readmeOutput, function (err) {
                if (err) throw err;
                console.log('File is created successfully');
            });

        })

}

// function call to initialize program
init();
