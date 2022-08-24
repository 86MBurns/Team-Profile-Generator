// require (inquirer)
// const inquirer = require('inquirer');
const inquirer = require('inquirer');
const fs = require('fs');

// Employee, m, Engineer, and Intern
const employee = require('./Roles/employee');
const manager = require('./Roles/manager');
const engineer = require('./Roles/engineer');
const intern = require('./Roles/intern');

//global scope  create an empty array list to stor employee objects
let teamMember = [];

// gather m DATA
    //inquirer.prompt()
    // build manger object

// gather ENGINEER DATA
    //inquirer.prompt()
    // build engineer object
    
// gather INTERN DATA
    //inquirer.prompt()
    //THEN build a response

//ask for "what team member you would like to add" or "are you done"
    //inquirer.prompt()
    //then deciding wat function to call
function userInfo(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'input name',
            name: 'name',
            validate: function(userName){
                if (userName){
                    return true;
                } else{
                    return 'Name required';
                }
            }
        },
        {
            type: 'input',
            message: 'input varified email',
            name: 'email',
            validate: function(userEmail){
                if (userEmail){
                    return true;
                } else{
                    return 'Email required';
                }
            }
        },
        {
            type: 'input',
            message: 'input user id',
            name: 'id',
            validate: function(userId){
                if (userId){
                    return true;
                } else{
                    return 'Id required';
                }
            }
        },
        {
            type: 'list',
            message: 'Pick a title',
            name:'title',
            choices: ["Manager", "Engineer", "Intern"]
        },
    ])
    //this is whet i need to set roles nad prompts for roles.
    // m
    .then(answer =>{
        if  (answer.title === 'Manager'){
        inquirer.prompt([
            {
                type: 'input',
                message: 'input office location',
                name: 'office',
                validate: (mngrLocal) => {
                    if (mngrLocal){
                        return true;
                    } else{
                        return 'Location required';
                    }
                }
            }
        ])
        .then (response =>{
            const teamManager = new manager (answer.name, answer.email, answer.title, response.office)
            teamMember.push(teamManager); 
        })
        
    }
    //engineer
    else if (answer.title === 'Engineer'){
        inquirer.prompt([
            {
                type: 'input',
                message: 'input github',
                name: 'github',
                validate: (engineerGithub) => {
                    if (engineerGithub){
                        return true;
                    } else{
                        return 'Github required';
                    }
                }
            }
        ])
        .then (response =>{
            const teamEngineer = new engineer (answer.name, answer.email, answer.title, response.github)
            teamMember.push(teamEngineer); 
        })
        
    }
    //intern
    else if (answer.title === 'Intern'){
        inquirer.prompt([
            {
                type: 'input',
                message: 'Input school',
                name: 'school',
                validate: (internSchool) => {
                    if (internSchool){
                        return true;
                    } else{
                        return 'School required';
                    }
                }
            }
        ])
        .then (response =>{
            const teamIntern = new intern (answer.name, answer.email, answer.title, response.school)
            teamMember.push(teamIntern); 
        })
        
    }
    else {
        const employeeTeam = new employee (answer.name, answer.email, answer.title);
        teamMember.push(employeeTeam);
    }
})
}



//generate the Html and write to a file
userInfo();