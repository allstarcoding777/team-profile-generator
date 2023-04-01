// require Employee class from Employee.js
const Employee = require("./Employee");
// Engineer class extends Employee class because Employee is the parent class
class Engineer extends Employee {
    // properties of the Engineer class, github is unique to Engineer
    constructor(name, id, email, github) {
        // calls the parent constructor by using super()
        super(name, id, email);
        this.github = github;
    }
    // calls the getGithub() function
    getGithub() {
        return this.github;
    }
    // calls the getRole() function, returns "Engineer"
    getRole() {
        return "Engineer";
    }
}

// exports the Engineer class
module.exports = Engineer;