// array of questions for user
const questions = [
    "What is the Title of your project?",
    "Include a Description here",
    "How do you install the system? Please provide a step by step description!",
    "Please provide instructions on how to use the application",
    "What is the lisence name?",
    "Please enter github usernames of any other contributors",
    "Provide examples on how to run tests.",
    "Please enter any questions/ bugs/ next steps?",
    "What is your name?",
    "What is your github URL?",
];




// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    var inquirer = require('inquirer');
    var fs = require('fs');
    var path = require('path');
    const userResponse = inquirer

        .prompt([

            {
                type: "confirm",
                message: "Welcome to the great readme generator, are you ready to begin?",
                name: "confirming"
            },

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
        ])
        .then(userResponse => {
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
            console.log(resTitle);
            console.log("done")
            var readmeOutput = (`
            # ${resTitle} 
            ${resDescription}
            \n* [Installation](#Installation)
            \n* [Usage](#Usage)
            \n* [License](#License)
            \n* [Contributors](#Contributors)
            \n* [Tests](#Tests)
            \n* [Author](#Author)
            ## Installation
            ${resInstallation}
            ## Usage
            ${resUsage}
            \`\`\`
            ## License 
            This project is licensed under the ${resLicense} - see ${"licenseUrl"} for more details
            ## Contributors
            ${resContributing}
            ## Tests
            ${resTests}
            ## Author 
            ${resAuthor}
            \nGitHub: ${resURL}
            `)
            fs.writeFile('readMegen.md', readmeOutput, function (err) {
                if (err) throw err;
                console.log('File is created successfully.');
            });
        })

}

// function call to initialize program
init();
