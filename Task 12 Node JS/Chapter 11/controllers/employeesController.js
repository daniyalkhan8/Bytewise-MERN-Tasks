const data = {
    employees: require('../model/employees.json'),
    setEmployees: function (data) { this.employees = data }
};

const getAllEmployees = (req, res) => {
    res.json(data.employees);
}

const createNewEmployee = (req, res) => {
    const newEmployee = {
        id: data.employees[data.employees.length - 1].id + 1 || 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }

    if (!newEmployee.firstname || !newEmployee.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    data.setEmployees([...data.employees, newEmployee]);
    res.status(201).json(data.employees);
}

const updateEmployee = (req, res) => {
    const findEmployee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    if (!findEmployee) {
        return res.status(400).json({ 'message': 'Employee not found' });
    }
    if (req.body.firstname) {
        findEmployee.firstname = req.body.firstname;
    }
    if (req.body.lastname) {
        findEmployee.lastname = req.body.lastname;
    }
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, findEmployee];
    data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.employees);
}

const deleteEmployee = (req, res) => {
    const findEmployee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    if (!findEmployee) {
        return res.status(400).json({ 'message': 'Employee not found' });
    }
    const updatedArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    data.setEmployees([updatedArray]);
    res.json(data.employees);
}

const getEmployee = (req, res) => {
    const empToGet = data.employees.find(emp => emp.id === parseInt(req.params.id));
    if (!empToGet) {
        return res.status(400).json({'message': 'Employee does not exist.'});
    }
    res.json(empToGet);
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}