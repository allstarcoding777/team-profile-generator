// require the inquirer package to prompt the user for input
const inquirer = require('inquirer');
// require the fs package to write the html file
const fs = require('fs');
// require the path package to get the correct file path for the html
const path = require('path');
// require the Employee classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// require the generate-site.js file to create the html file
const generateSite = require('./src/generate-site.js');
// output directory path for the html file
const OUTPUT_DIR = path.resolve(__dirname, 'output');
// output path for the html file
const outputPath = path.join(OUTPUT_DIR, 'team.html');
// empty array to hold the team members
const teamMembers = [];

// function to prompt the user for Manager information
const promptManager = () => {
    // inquirer.prompt will prompt the user for input in the command line
    return inquirer.prompt([
        // questions to prompt the user for Manager information
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the Manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID of the Manager? (Required)',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the Manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Manager? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the Manager!');
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
    // then the user's answers will be stored in the answers object
    ]).then(answers => {
        console.log(answers);
        // updatedManager object is created using the Manager class, new Manager object is created using the answers object
        const updatedManager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        // push the updatedManager object into the teamMembers array
        teamMembers.push(updatedManager);
        console.log(teamMembers);
        // call the promptMenu function which will prompt the user to choose from a list of options
        promptMenu();
    })
};

// function to prompt the user to choose from a list of options
const promptMenu = () => {
    return inquirer.prompt([
        // list of options to choose from
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Building My Team']
        }])
        // then the user's choice will be stored in the userChoice object
        .then(userChoice => {
            // switch statement to determine which function to call based on the user's choice
            switch (userChoice.menu) {
                case 'Add an Engineer':
                    promptEngineer();
                    break;
                case 'Add an Intern':
                    promptIntern();
                    break;
                case 'Finish Building My Team':
                    buildTeam();
                    break;
                default:
                    buildTeam();
            }
        });
    };

    // function to prompt the user for Engineer information
    const promptEngineer = () => {
        console.log(`
    =================
    Add an Engineer to the Team
    =================
    `);
    // inquirer.prompt will prompt the user for input in the command line
    return inquirer.prompt([
        // questions to prompt the user for Engineer information
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of the Engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID of the Engineer? (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the Engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Engineer? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the email of the Engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username of the Engineer? (Required)',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter the GitHub username of the Engineer!');
                    return false;
                }
            }
        },
    // then the user's answers will be stored in the answers object
    ]).then(answers => {
        console.log(answers);
        // updatedEngineer object is created using the Engineer class, new Engineer object is created using the answers object
        const updatedEngineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        // push the updatedEngineer object into the teamMembers array
        teamMembers.push(updatedEngineer);
        console.log(teamMembers);
        // call the promptMenu function
        promptMenu();
    })
};

// function to prompt the user for Intern information
const promptIntern = () => {
    console.log(`
    =================
    Add an Intern to the Team
    =================
    `);
    // inquirer.prompt will prompt the user for input in the command line
    return inquirer.prompt([
        // questions to prompt the user for Intern information
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the name of the Intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID of the Intern? (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the Intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Intern? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the email of the Intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the Intern? (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter the school of the Intern!');
                    return false;
                }
            }
        },
    // then the user's answers will be stored in the answers object
    ]).then(answers => {
        console.log(answers);
        // updatedIntern object is created using the Intern class, new Intern object is created using the answers object
        const updatedIntern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        // push the updatedIntern object into the teamMembers array
        teamMembers.push(updatedIntern);
        console.log(teamMembers);
        // call the promptMenu function
        promptMenu();
    })
};

// function to build the team
const buildTeam = () => {
    console.log(`
    =================
    Build Team
    =================
    `);
    // if the output directory doesn't exist, create it
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    // write the file to the output directory
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

// calls manager function to start the application, first function to run
promptManager();
