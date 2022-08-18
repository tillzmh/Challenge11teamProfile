
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.type = 'employee';
        }


getid(){
return this.id;}


getname(){
    return this.name;}


getemail(){
    return this.email;}


gettype(){
    return this.type;}
}

module.exports = Employee;