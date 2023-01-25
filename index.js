//Required packages for this README file generator application
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome to the README generator. Please provide your fullname first:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter a short description of your project here",
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to include with this project?',
        choices: ['MIT', 'Apache', 'GPL', 'CC--0'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install depencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for user about using the application',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How others can contribute to this README creator project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What is the command to run tests?',
        default: 'npm test',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerAnswers) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerAnswers}));
    });

}


init();
