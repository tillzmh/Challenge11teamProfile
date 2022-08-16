const employee = required ("./employee.js")

class manager extends employee {
    constructor(id,name,email,officeNumber) {
        super(id,name,email);
        this.officeNumber = officeNumber;
        this.type = 'manager';
}
getofficeNumber(){
    return this.officeNumber;
}
}

