// require Employee class from Employee.js
const Employee = require('./Employee');
// Intern class extends Employee class because Employee is the parent class
class Intern extends Employee {
    // properties of the Intern class, school is unique to Intern
    constructor(name, id, email, school) {
        // calls the parent constructor by using super()
        super(name, id, email);
        this.school = school;
    }
    // calls the getSchool() function
    getSchool() {
        return this.school;
    }
    // calls the getRole() function, returns "Intern"
    getRole() {
        return 'Intern';
    }
}

// exports the Intern class
module.exports = Intern;