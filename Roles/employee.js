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
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email;
        this.role = role;
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
        return this.role;
    }
}
//this will export the employee class to other roles.
module.exports = Employee;