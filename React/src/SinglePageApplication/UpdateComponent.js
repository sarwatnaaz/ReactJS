import Axios from "axios";
import React from "react";
import './style.css';

export default class UpdateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eid: "",
            ename: "",
            designation: "",
            salary: ""
        }
    }

    idChange = (event) => {
        this.setState({ eid: event.target.value });
    };

    nameChange = (event) => {
          this.setState({ ename: event.target.value });
      };

      desiChange = (event) => {
        this.setState({ designation: event.target.value });
    };
    salChange = (event) => {
      this.setState({ salary: event.target.value });
  };

    render() {
        const {eid, ename, designation, salary} = this.state;
        debugger;
        return (

            <div >
                <form className="form">
                Eid: <input type="text" value={eid} onChange={this.idChange}/><br/><br/>
                Ename: <input type="text" value={ename} onChange={this.nameChange}/><br/><br/>
                Designation: <input type="text" value={designation} onChange={this.desiChange} /><br/><br/>
                Salary: <input type="text" value={salary} onChange={this.salChange}/><br></br>
                <input type="button" value="Submit" onClick={this.updateEmployee} />
                </form>
            </div>
        )
    }

    updateEmployee = (e) => {
        e.preventDefault();

        Axios.put("https://localhost:5001/api/Employee/"+ this.props.match.params.userId,{
            eid: this.state.eid,
            ename: this.state.ename,
            designation: this.state.designation,
            salary: this.state.salary
        }).then(response =>
            console.log('Posting Data', response)).catch(err => console.log(err))
            .then(() => {
              alert("Employee will Update");
                  var dataPromise = Axios.get("https://localhost:5001/api/Employee");
                  dataPromise.then((response) => {
                      this.setState(response.data);
                  })
              })
    }

    componentDidMount() {
        alert(this.props.match.params.userId);
        Axios.get("https://localhost:5001/api/Employee/" + this.props.match.params.userId).then((response) => {
            this.setState({
                eid: response.data.eid,
                ename: response.data.ename,
                designation: response.data.designation,
                salary: response.data.salary
            })
        })
    }
 }
