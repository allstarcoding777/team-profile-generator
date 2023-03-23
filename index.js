// require the inquirer package to prompt the user for input
const inquirer = require('inquirer');
// require the fs package to write the html file
const fs = require('fs');
// require the path package to get the correct file path for the html
const path = require('path');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// require the generate-site.js file to create the html file
const generateSite = require('./src/generate-site.js');
// output directory path for the html file
const OUTPUT_DIR = path.resolve(__dirname, "output");
// output path for the html file
const outputPath = path.join(OUTPUT_DIR, "team.html");
// empty array to hold the team members
const teamMembers = [];

// function to prompt the user for input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team member? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the team member!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID of the team member? (Required)',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the team member!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the team member? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the team member!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the Manager?',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter the office number of the Manager!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        console.log(teamMembers);
        promptMenu();
    })
};

// function to prompt the user for input
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case 'Add an Engineer':
                    promptEngineer();
                    break;
                case 'Add an Intern':
                    promptIntern();
                    break;
                case 'Finish building my team':
                    buildTeam();
                    break;
                default:
                    buildTeam();
            }
        });
    };