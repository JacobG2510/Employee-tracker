const db = require('./db');
const inquirer = require('inquirer');

function updateEmployeeRole() {
  const query = `
    SELECT 
      employee.id AS employee_id,
      CONCAT(employee.first_name, ' ', employee.last_name) AS employee_name,
      role.id AS role_id,
      role.title AS role_title
    FROM employee
    INNER JOIN role ON employee.role_id = role.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    const choices = results.map((employee) => ({
      name: `${employee.employee_name} (Role: ${employee.role_title})`,
      value: employee.employee_id,
    }));

    inquirer
      .prompt([
        {
          type: 'list',
          name: 'employeeId',
          message: 'Select an employee to update their role:',
          choices: choices,
        },
      ])
      .then((answers) => {
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'newRoleId',
              message: 'Enter the new role ID for the selected employee:',
            },
          ])
          .then((roleAnswers) => {
            const newRoleId = parseInt(roleAnswers.newRoleId);
            const employeeId = parseInt(answers.employeeId);

            const updateQuery = 'UPDATE employee SET role_id = ? WHERE id = ?';

            db.query(updateQuery, [newRoleId, employeeId], (updateErr) => {
              if (updateErr) {
                console.error(updateErr);
                return;
              }

              console.log('Employee role updated successfully!');
            });
          });
      });
  });
}

module.exports = { updateEmployeeRole };