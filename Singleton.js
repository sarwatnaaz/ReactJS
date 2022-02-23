var singletonObject = (function Employee(name, age, designation, salary) {
    var userName = name;
    var userAge = age;
    var userDesignation = designation;
    var userSalary = salary;

    function getBonus() {
        return userSalary * .08;
    }

    return {
        empName: userName,
        empAge: userAge,
        empDesignation: userDesignation,
        empBonus: getBonus
    }
}("Sarwat", 22, "Developer", 30000))

debugger;