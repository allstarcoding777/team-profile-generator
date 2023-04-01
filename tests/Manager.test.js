// use Manager constructor from Manager.js
const Manager = require('../lib/Manager');

// create manager object, test for name, id, email, and office number
test('Manager object', () => {
    const manager = new Manager('Alexandria', 002, 'allstarcoding777@outlook.com', 17);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role from getRole() function
test('get role of employee', () => {
    const manager = new Manager('Alexandria', 002, 'allstarcoding777@outlook.com');

    expect(manager.getRole()).toEqual("Manager");
}); 