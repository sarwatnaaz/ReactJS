import React from 'react';
import Axios from "axios"
import EmployeeDetailList from "../components/EmployeeDetailList"

export default class EmployeeListComponent extends React.Component {
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
                    return <EmployeeDetailList key={employee.eid} {...employee} deleteEmployee={this.deleteEmployee}></EmployeeDetailList>
                })}
            </div>
        )
    }

    deleteEmployee = (event) => {
        Axios.delete("https://localhost:5001/api/Employee" + event.target.eid).then(() => {
            alert("Employee is Deleted");
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
