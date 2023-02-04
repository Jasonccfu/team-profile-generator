// improt Employee constructor
const Employee = require('./Employee');

// manager constructor
class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        // get name,id,email from Employee
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

// export
module.exports = Manager; 