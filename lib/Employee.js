// parent class for all employees
class Employee {
    // properties of the Employee class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // calls the getName() function
    getName() {
        return this.name;
    }
    // calls the getId() function
    getId() { 
        return this.id;
    }
    // calls the getEmail() function
    getEmail() {
        return this.email;
    }
    // calls the getRole() function
    // "Employee" is the default role for all employees
    getRole() {
        return "Employee";
    }
}
// exports the Employee class
module.exports = Employee;