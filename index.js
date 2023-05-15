// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

const questions = [
    {
    type: 'input',
    message:  'What is your name?',
    name: 'name'
    },
    {
    type: 'input',
    message:  'Is your project name?',
    name: 'project'
    },
    {
    type: 'input',
    message: 'What is a description of your project?',
    name: 'description'
    },
    {
    type: 'list',
    message: 'What license are you using in your project?',
    choices: ['MIT',  new inquirer.Separator(),'Academic Free License v3.0',
    new inquirer.Separator(),'Mozilla Public License 2.0',
    new inquirer.Separator(),'Microsoft Public License',
    new inquirer.Separator(),'Boost Software License 1.0',
    new inquirer.Separator(),'Eclipse Public License 2.0', 
    new inquirer.Separator()],
    name: 'license'
    },
    {
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'install'
    },
    {
    type: 'input',
    message: 'What is the purpose of this project?',
    name: 'purpose'
    },
    {
    type: 'input',
    message: 'What tests have been performed?',
    name: 'tests'
    },
    {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contribution'
    },
    {
    type: 'input',
    message: 'What is your Github username',
    name: 'githubName'
    },
    
    {
    type: 'input',
    message: 'What is your repository URL',
    name: 'URL'
    },
  ]
  function ask() {
    inquirer.prompt(questions).then(answers => {
      console.log(answers.name), 
      console.log(answers.license)
    fs.appendFile('README.md', `# ${answers.name}'s project: ${answers.project}

## Table of contents:

>* ### [Description.](#description)
>* ### [Installation.](#installation)
>* ### [Usage.](#project-usage)
>* ### [Tests.](#tests)
>* ### [Contribution Guidelines](#contribution-guidelines)
>* ### [license](#license)
>* ### [GitHub links.](#github-links)
   
## Project Description

${answers.description},

## Installation.

${answers.install}.

## Project Usage

${answers.purpose}

## Tests

${answers.tests}

## Contribution Guidelines

${answers.contribution}

## License

this project is licensed under ${answers.license}

## GitHub

Github username: ${answers.githubName}

Github repository URL: ${answers.URL}

`,


     (err) =>
    err ? console.error(err) : console.log('Commit logged!'),
//     fs.appendFile('style.css', 
//  (err) =>
//     err ? console.error(err) : console.log('Commit logged!'))
    
    
    )
  })
  }
  
  ask()

