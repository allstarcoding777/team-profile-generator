// use Engineer constructor from Engineer.js
const Engineer = require('../lib/Engineer');

// create engineer object, test for name, id, email, and github
test('Engineer object', () => {
    const engineer = new Engineer('Alexandria', 002, 'allstarcoding777@outlook.com', 'allstarcoding777');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// get github from getGithub() function
test('get github value', () => {
    const engineer = new Engineer('Alexandria', 002, 'allstarcoding777@outlook.com', 'allstarcoding777');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// get role from getRole() function
test('get role of employee', () => {
    const engineer = new Engineer('Alexandria', 002, 'allstarcoding777@outlook.com', 'allstarcoding777');

    expect(engineer.getRole()).toEqual("Engineer");
});