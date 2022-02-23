export default function EmployeeDetailsComponent(props) {
    debugger;
    
    // var details = {
    //     name: "Sarwat Naaz",
    //     avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
    //     createdAt: "Today",
    //     id: 1
    // }
    return (
        // <div>
        //     <h2>Employee Details</h2>
        //     <h1>
        //     {details.name}<br></br>
        //     <img src={details.avatar} /><br></br>
        //     {details.createdAt}<br></br>
        //     {details.id}
        //     </h1>
        // </div>

        <div className="card" style={{width: "18rem" , margin: "20px", display:"inline-block"}}>
            <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Employeeid: <b>{props.id}</b> Created at: <b>{props.createdAt}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                    <input type="button" className="btn btn-primary" value="Go somewhere" />
                </div>
        </div>


    )
}