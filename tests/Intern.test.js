// use Intern constructor from Intern.js
const Intern = require('../lib/Intern');

// create intern object  
test('Intern object', () => {
    const intern = new Intern('Alexandria', 002, 'allstarcoding777@outlook.com', 'University of Minnesota');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// get school from getSchool() function
test('get employee school', () => {
    const intern = new Intern('Alexandria', 002, 'allstarcoding777@outlook.com', 'University of Minnesota');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// get role from getRole() function
test('get role of employee', () => {
    const intern = new Intern('Alexandria', 002, 'allstarcoding777@outlook.com', 'University of Minnesota');

    expect(intern.getRole()).toEqual("Intern");
}); 