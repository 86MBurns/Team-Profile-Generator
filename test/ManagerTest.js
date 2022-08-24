const Manager = require('../Roles/Manager');

const testManager = new Manager(name, email, id, title);

test ('Manager', () =>{
    it('has a name', () => {
        expect(testManager.name).toEqual.expect.any(String);
    })
    it('has a email', () => {
        expect(testManager.email).toEqual.expect.any(stringContaining('@','.com'));
    })
    it('has a id', () => {
        expect(testManager.id).toEqual.expect.any(Number);
    })
    it('has a title', () => {
        expect(testManager.title).toBe('Manager');
    })
    it('has a office number', () => {
       expect(testManager.officeNumber).toEqual.expect.any(Number);
    })
})