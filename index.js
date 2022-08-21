// require (inquirer)
const inquirer = require('inquirer');
const fs = require('fs');

// Employee, Manager, Engineer, and Intern

//global scope  create an empty array list to stor employee objects
let teamProfile = [];

// gather MANAGER DATA
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
    ])
    .then((answer) =>{
        if  (answer.title === manager)
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
        // .then ()
        //this is whet i need to set roles nad prompts for roles.
    })
}



//generate the Html and write to a file
