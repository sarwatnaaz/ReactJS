var empList = [{
    name: "Sarwat",
    createdAt: "Yesterday",
    id: 1
}, {
    name: "Naaz",
    createdAt: "Today",
    id: 2
}, {
    name: "Anshu",
    createdAt: "Today",
    id: 3
}]

// empList.forEach(element => {
//     console.log(element.name);
//     console.log(element.id);
//     console.log(element.createdAt);
// });

var newArray = empList.map(function(employee) {
    console.log(employee.id + 100);
    console.log(employee.name);
    return {
        name: employee.name,
        id: employee.id
    }
})
