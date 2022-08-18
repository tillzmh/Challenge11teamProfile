const Employee = require ("./employee.js")

class Engineer extends Employee {
    constructor(name,id,email,gitHub) {
        super(name, id, email)
        this.github=gitHub;
        this.type="engineer";
}

getgithub(){
    return this.github;
}
}

module.exports = Engineer;