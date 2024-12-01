const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 , speciaization: "Java"},
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 , speciaization: "C++"},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 , speciaization: "Python"},
      //... More employee records can be added here
    ];

 // Function to display all employees
 //use map method in array
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}. ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.speciaization}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;


// use reduce method in array
function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }


//use filter method in array
function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}. ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.speciaization}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}


//use find method in array
function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}. ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.speciaization}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

      }
}


//Self
function findEmployeeBySpecialization(employeeSp) {
      const foundEmployee = employees.find(employee => employee.speciaization === employeeSp);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}. ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.speciaization}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

      }
}
