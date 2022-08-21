// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()
// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'
const employee = require('/employee.js');

class Engineer extends Employee{
    constructor (name, id, email, role, github){
        super(employee)
        this.github = github;
    }
    getGitHub(){
        return this.getGitHub;
    }
}
module.exports = Engineer;