import uuid from "react-uuid";

export const getEmployees = () => {
    if(!localStorage["@employees"]){
        localStorage["@employees"] = JSON.stringify([]);
    }

    let employees = JSON.parse(localStorage["@employees"]);
    return employees;
}

export const employeeByID = (id) => {
    const employees = getEmployees();
    const employee = employees.find(employee => employee.id === id);
    return employee;
}

export const addEmployee = (employee) => {
    const employees = getEmployees();
    employees.push({id: uuid(),...employee});
    localStorage["@employees"] = JSON.stringify(employees);
}

export const editEmployee = (id, edit) => {
    let employees = getEmployees();
    employees = employees.filter((employee) => employee.id !== id);
    employees.push(edit);
    localStorage["@employees"] = JSON.stringify(employees);
}

export const deleteEmployee = (id) => {
    let employees = getEmployees();
    employees = employees.filter((employee) => employee.id !== id);
    localStorage["@employees"] = JSON.stringify(employees);
}