// require Employee class first
const Employee = require("./Employee");

// Manager class extends Employee class because Employee is the parent class
class Manager extends Employee {
    // properties of the Manager class, officeNumber is unique to Manager
    constructor(name, id, email, officeNumber) {
        // calls the parent constructor by using super()
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // calls the getOfficeNumber() function
    getOfficeNumber() {
        return this.officeNumber;
    }
    // calls the getRole() function, returns "Manager"
    getRole() {
        return "Manager";
    }
}

// exports the Manager class
module.exports = Manager;