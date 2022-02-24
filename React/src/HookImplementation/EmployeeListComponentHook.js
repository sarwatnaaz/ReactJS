import React from 'react';
import Axios from "axios";
import EmployeeDetailList from "../components/EmployeeDetailList";
import { useEffect, useState } from "react";
import './Style.css';

export default function EmployeeListComponentHook(){


    
    const url = "https://localhost:5001/api/Employee"

    var [element,setElement] = useState([]);
    const[eid,setEid] = useState("");
    const[ename,setEname]=useState("");
    const[designation,setDesignation]=useState("");
    const[salary,setSalary]=useState("");



    function ShowEmployee(){
        useEffect(() => {
        var dataPromise = Axios.get(url);
        dataPromise.then((response) => {
            setElement(response.data)
        })
    })
    }

    const saveEmployee = (e) => {
        e.preventDefault(); //its prevent to reload the page
        Axios.post(url, {
            eid,
            ename,
            designation,
            salary
        }).then(response => 
            console.log('Posting Data', response)).catch(err => console.log(err))
        }

        function updateEmployee(event){
            event.preventDefault();
            Axios.put("https://localhost:5001/api/Employee/" + event.target.id, {
                eid,
                ename,
                designation,
                salary
            }).then(response => 
                console.log('Updating Data', response)).catch(err => console.log(err))
            .then(() => {
                alert("Employee will Update");
                    var dataPromise = Axios.get(url);
                    dataPromise.then((response) => {
                        setElement(response.data);
                    })
                })
            }
        

        function deleteEmployee(event) {
            debugger;
            Axios.delete("https://localhost:5001/api/Employee/" + event.target.id).then(() => {
                alert("Employee is Deleted");
                var dataPromise = Axios.get(url);
                dataPromise.then((response) => {
                    setElement(response.data);
                })
            })
        }
    


    return(
    <div>
        <div className="App">
            
            <div className="information" >
                <h3>Add New Employee Here: </h3><br></br>
                <input type="text" name="eid" placeholder='EmployeeId' value={eid} onChange={(e)=>{setEid(e.target.value)}}/><br></br>
                <input type="text" name="ename" placeholder='Employee Name' value={ename} onChange={(e)=>{setEname(e.target.value)}}/><br></br>
                <input type="text" name="designation" placeholder='Designation' value={designation} onChange={(e)=>{setDesignation(e.target.value)}}/><br></br>
                <input type="text" name="salary" placeholder='Salary' value={salary} onChange={(e)=>{setSalary(e.target.value)}}/><br></br>
                <button type="button" onClick={saveEmployee}>Save Employee</button>
            </div>
            <div className="information2">
                <h3>Update Employee Here: </h3><br></br>
                <input type="text" name="eid" placeholder='EmployeeId' value={eid} onChange={(e)=>{setEid(e.target.value)}}/><br></br>
                <input type="text" name="ename" placeholder='Employee Name' value={ename} onChange={(e)=>{setEname(e.target.value)}}/><br></br>
                <input type="text" name="designation" placeholder='Designation' value={designation} onChange={(e)=>{setDesignation(e.target.value)}}/><br></br>
                <input type="text" name="salary" placeholder='Salary' value={salary} onChange={(e)=>{setSalary(e.target.value)}}/><br></br>
                <button type="button" id={eid} onClick={updateEmployee}>Update</button>
            </div><br></br>
            </div>
            <div className="info">
            <button type="button" onClick={ShowEmployee}>Show Employee</button><br></br>
            
            {element.map((employee) => {
                    return <EmployeeDetailList key={employee.eid} {...employee} deleteEmployee={deleteEmployee} updateEmployee={updateEmployee}></EmployeeDetailList>
            })}
        
        </div>
        </div>
    )
}