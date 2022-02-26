import React from 'react';
import Axios from "axios"
import EmployeeDetailList from "../components/EmployeeDetailList"

export default class EmployeeListComponent extends React.Component {
    debugger;
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }


    render() {
        return (
            <div>
                <h1>Employee List is given Below:</h1>
                {this.state.employeeList.map((employee) => {
                    return <EmployeeDetailList key={employee.eid} {...employee} addEmployee={this.addEmployee} updateEmployee={this.updateEmployee} deleteEmployee={this.deleteEmployee}></EmployeeDetailList>
                })}
            </div>
        )
    }

    updateEmployee = (event) => {
        debugger;
        var employeeId = event.target.name;
        this.props.history.push("/update/" + employeeId);
    }

    addEmployee = (event) => {
        this.props.history.push("/add");
    }

    deleteEmployee = (event) => {
        debugger;
        var empid = event.target.id;
        Axios.delete("https://localhost:5001/api/Employee/" + empid).then(() => {
            alert("Employee is Deleted");
            //this.debugger;
            var dataPromise = Axios.get("https://localhost:5001/api/Employee");
            dataPromise.then((response) => {
                this.setState({
                    employeeList: response.data
                })
            })
        })
    }


    componentDidMount() {
        debugger;
        var dataPromise = Axios.get("https://localhost:5001/api/Employee");
    
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }
}