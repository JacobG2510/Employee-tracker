const db = require('./db');

function viewDepartments() {
  const query = 'SELECT * FROM department';

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    console.table(results);

  });
}

function viewRoles() {
  const query = 'SELECT * FROM role';

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    console.table(results);

  });
}

function viewEmployees() {
  const query = 'SELECT * FROM employee';

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    console.table(results);

  });
}

module.exports = { viewDepartments, viewRoles, viewEmployees };