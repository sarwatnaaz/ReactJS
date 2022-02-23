import EmployeeDetailsComponent from "../components/EmployeeDetailsComponent";
import { useState } from 'react';

export default function FilterEmployeeData(props) {

     const [searchTerm, setSearchTerm] = useState("");

    return(
         <div>
            <label><h2>Filter Data: </h2> </label>
             <input type="text" name="name" onChange={(event) => {setSearchTerm(event.target.value)}}/><br></br>


        {props.empList.filter((employees) => {
            if(searchTerm === "") {
                return employees
            }
            else if(employees.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return <EmployeeDetailsComponent {...employees}></EmployeeDetailsComponent>
            }
        }).map(function(employees) {
            return(
                <EmployeeDetailsComponent {...employees}></EmployeeDetailsComponent>
            )
            })}
        </div> 
    )
    
}
