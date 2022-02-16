function EmployeeDetails(){
    var name = "Sarwat";
    var age = 23;
    var designation = "Developer";

    return {
        employeeName: function(){
            console.log("Employee name : " + name);
        },
        employeeAge:  function(){
            console.log("Employee age : " + age);
        },
        employeeDesignation: function(){
            console.log("Employee Designation : " + designation);
        },
    }
}

var newEmployee = EmployeeDetails()

newEmployee.employeeName();
newEmployee.employeeAge();
newEmployee.employeeDesignation();