const intern  = require("./employee.js");

class intern extends  employee {
    constructor(id, name, email,school){
        super(id,name,email);
        this.school=school;
        this.type="intern";
    }
    getschool(){
        return this.school;
    }
}