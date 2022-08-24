 const Engineer = require('../Roles/engineer');

 const testEngineer = new Engineer(name, email, id, title);

 test ('Engineer', () =>{
     it('has a name', () => {
         expect(testEngineer.name).toEqual.expect.any(String);
     })
     it('has a email', () => {
         expect(testEngineer.email).toEqual.expect.any(stringContaining('@', '.com'));
     })
     it('has a id', () => {
         expect(testEngineer.id).toEqual.expect.any(Number);
     })
     it('has a title', () => {
         expect(testEngineer.title).toBe('Engineer');
     })
     it('has a github username', () => {
        expect(testEngineer.github).toEqual.expect.any(String);
     })
 })