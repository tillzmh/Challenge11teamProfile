const Employee = require ("./employee.js")

class Manager extends Employee {
    constructor(id,name,email,officeNumber) {
        super(id,name,email);
        this.officeNumber = officeNumber;
        this.type = 'manager';
}
getofficeNumber(){
    return this.officeNumber;
}
}

module.exports = Manager;