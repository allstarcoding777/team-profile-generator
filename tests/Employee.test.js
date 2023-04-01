// use Employee constructor from Employee.js
const Employee = require('../lib/Employee');

// create employee object, test for name, id, and email
test('employee object', () => {
    const employee = new Employee('Alexandria', 002, 'allstarcoding777@outlook.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get name from getName() function
test('get employee name', () => {
    const employee = new Employee('Alexandria', 002, 'nicole.elisaw@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// get id from getId()  function
test('get employee ID', () => {
    const employee = new Employee('Alexandria', 002, 'allstarcoding777@outlook.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// get email from getEmail() function
test('get employee email', () => {
    const employee = new Employee('Alexandria', 002, 'allstarcoding777@outlook.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// get role from getRole() function
test('get role of employee', () => {
    const employee = new Employee('Alexandria', 002, 'allstarcoding777@outlook.com');

    expect(employee.getRole()).toEqual("Employee");
}); 
