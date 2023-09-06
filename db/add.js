const db = require('./db');
const inquirer = require('inquirer');

function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:',
      },
    ])
    .then((answers) => {
      const { name } = answers;
      const query = 'INSERT INTO department (name) VALUES (?)';

      db.query(query, [name], (err, results) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log('Department added successfully!');
      });
    });
}

module.exports = { addDepartment };