// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()
// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'
const Employee = require('../Roles/employee');

class Intern extends Employee{
    constructor (name, id, email, title, school){
        super(Employee)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}
module.exports = Intern;