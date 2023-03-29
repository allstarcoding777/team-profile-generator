// when generateTeam is called, it will return the html array
const generateTeam = (team) => {
    console.log(team);
// empty array to hold the html
const html = [];
let generateManager = (manager) => {
    console.log(manager);
    let managerHtml = `
    <div class="card employee-card">
    <div class="card-header">
    ${manager.name} <br>
    <i class="fas fa-mug-hot mr-2"></i>Manager</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
    </div>
    `;
    // push the managerHtml to the html array
    html.push(managerHtml);
}

    let generateEngineer = (engineer) => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card employee-card">
        <div class="card-header">
        ${engineer.name} <br>
        <i class="fas fa-glasses"></i> Engineer</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
        </div>
        `;
        html.push(engineerHtml);
    }

    let generateIntern = (intern) => {
        console.log (intern);
        let internHtml = `
        <div class="card employee-card">
        <div class="card-header">
        ${intern.name} <br>
        <i class="fas fa-user-graduate"></i> Intern</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>
        `;
        html.push(internHtml);
    }
    // loop through the team array
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            generateManager(team[i]);
        } else if (team[i].getRole() === 'Engineer') {
            generateEngineer(team[i]);
        } else if (team[i].getRole() === 'Intern') {
            generateIntern(team[i]);
        }
    }
    // join the html array and return it
    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
    </head>
    <body>
    <header>
    <div class="container-fluid">
    <div class="row">
    <div class="col-12 jumbotron mb-3 team-heading">
    <h1 class="text-center">My Team</h1>
    </div>
    </div>
    </div>
    </header>
    <main>
    <div class="container">
    <div class="row">
    <div class="team-area col-12 d-flex justify-content-center">
    ${generateTeam(team)}
    </div>
    </div>
    </div>
    </main>
    </body>
    </html>
    `;
}; 


