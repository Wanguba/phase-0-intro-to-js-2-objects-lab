// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAdress: "4211 Broadway St",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
  return { ...employee, [key]: value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key){
  const newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}
const updateEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");
console.log(updateEmployee);

const destructiveUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "127 Brooklyn");
console.log(destructiveUpdatedEmployee);

const employeeWithoutStreet = deleteFromEmployeeByKey(employee, "streetAddress");
console.log(employeeWithoutStreet);

const destructiveRemovedStreet = destructivelyDeleteFromEmployeeByKey(employee, "streetAdress");
console.log(destructivelyRemovedStreet);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  if (employee.hasOwnProperty(key)) {
    delete employee[key];
  }
  return employee;
}