// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// role
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
class Employee {
    constructor (name, id, email,title){
        this.name = name;
        this.id = id;
        this.email;
        this.title = title;
    }
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.title;
    }
}
//this will export the employee class to other roles.
module.exports = Employee;