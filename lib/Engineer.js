class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calls the parent constructor by using super()
        super(name, id, email);
        this.github = github;
    }
    // calls the getGithub() function, returns github username
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