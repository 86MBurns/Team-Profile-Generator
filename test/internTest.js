const Intern = require('../Roles/interm');

const testIntern = new Intern(name, email, id, title);

test ('Inter', () =>{
    it('has a name', () => {
        expect(testIntern.name).toEqual.expect.any(String);
    })
    it('has a email', () => {
        expect(testIntern.email).toEqual.expect.any(stringContaining('@','.edu'));
    })
    it('has a id', () => {
        expect(testIntern.id).toEqual.expect.any(Number);
    })
    it('has a title', () => {
        expect(testIntern.title).toBe('Intern');
    })
    it('has a School name', () => {
       expect(testIntern.schoolname).toEqual.expect.any(String);
    })
})