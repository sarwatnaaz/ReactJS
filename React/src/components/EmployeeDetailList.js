export default function EmployeeDetailList(props) {
    debugger;
    
    return (

        <div className="card" style={{width: "18rem" , margin: "20px", display:"inline-block"}}>
            <img src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg" className="card-img-top" alt={props.ename} />
                <div className="card-body">
                    <h5 className="card-title">{props.ename}</h5>
                    <p className="card-text">Employeeid: <b>{props.eid}</b> Designation: <b>{props.designation}</b> Salary: <b>{props.salary}</b>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <input type="button" id={props.eid} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
                </div>
        </div>


    )
}