const Employee = require ("./employee.js")

class Engineer extends Employee {
    constructor(id,name,email,gitHub) {
        super(id, name, email)
        this.github=gitHub;
        this.type="engineer";
}

getgithub(){
    return this.github;
}
}

module.exports = Engineer;