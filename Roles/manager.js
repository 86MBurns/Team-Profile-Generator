// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()
// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

const Employee = require('../Roles/employee');

class Manager extends Employee{
    constructor (name, id, email, role, officeNumber){
        super(Employee)//?
        this.github = github;
    }
    getOfficeNumber(){
        return this.getOfficeNumber;
    }
}
module.exports = Manager;