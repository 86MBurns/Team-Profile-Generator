const Employee = require('../Roles/employee');

const testEmployee = new Employee (name, email, id, title);

test ('Employee', () =>{
    it('has a name', () => {
        expect(testEmployee.name).toEqual.expect.any(String);
    })
    it('has a email', () => {
        expect(testEmployee.email).toEqual.expect.any(stringContaining('@','.com'));
    })
    it('has a id', () => {
        expect(testEmployee.id).toEqual.expect.any(Number);
    })
    it('has a title', () => {
        expect(testEmployee.title).toBe('Employee');
    })
})