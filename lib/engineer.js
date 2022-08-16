const employee = required("./employee.js")

class engineer extends employee {
    constructor(name,id, email) {
        super(name, id, email)
        this.github=github;
        this.type="engineer";
}

getgithub(){
    return this.github
}
}
