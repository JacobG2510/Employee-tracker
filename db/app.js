const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees } = require('./view');
const { addDepartment } = require('./add');
const { updateEmployeeRole } = require('./update');

function mainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Select an action:',
        choices: [
          'View Departments',
          'View Roles',
          'View Employees',
          'Add Department',
          'Add Employee',
          'Update Employee Role',
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.choice) {
        case 'View Departments':
          viewDepartments();
          break;
        case 'View Roles':
          viewRoles();
          break;
        case 'View Employees':
          viewEmployees();
          break;
        case 'Add Department':
          addDepartment();
          break;
        case 'Add Employee':
          break;
        case 'Update Employee Role':
          updateEmployeeRole();
          break;
        case 'Exit':
          console.log('Goodbye!');
          process.exit();
          break;
      }
    });
}

mainMenu();