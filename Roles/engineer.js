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
const Employee = require('../Roles/employee');

class Engineer extends Employee{
    constructor (name, id, email, title, github){
        super(Employee)
        this.github = github;
    }
    getGitHub(){
        return this.getGitHub;
    }
}
module.exports = Engineer;