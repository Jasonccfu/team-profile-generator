// improt Employee constructor
const Employee = require('./Employee');

// engineer constructor
class Engineer extends Employee {
    constructor(name,id,email,github) {
        // get name,id,email from Employee
        super(name,id,email);
        this.github = github;
        this.role = 'Engineer';
    }
    
    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer';
    }
}

// export
module.exports = Engineer; 