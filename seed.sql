INSERT INTO department (name) VALUES
    ('HR'),
    ('Engineering'),
    ('Sales');

INSERT INTO role (title, salary, department_id) VALUES
    ('HR Manager', 60000, 1),
    ('Software Engineer', 80000, 2),
    ('Sales Associate', 50000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL), -- HR Manager
    ('Alice', 'Smith', 2, 1),  -- Software Engineer, managed by John
    ('Bob', 'Johnson', 3, NULL);  -- Sales Associate