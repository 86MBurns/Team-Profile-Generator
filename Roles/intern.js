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
const employee = require('/employee.js');

class Intern extends Employee{
    constructor (name, id, email, role, school){
        super(employee)//?
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}
module.exports = Intern;