// improt Employee constructor
const Employee = require('./Employee');

// intern constructor
class Intern extends Employee {
    constructor(name,id,email,school) {
        // get name,id,email from Employee
        super(name,id,email);
        this.school = school;
        this.role = 'Intern';
    }
    
    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern';
    }
}

// export
module.exports = Intern; 