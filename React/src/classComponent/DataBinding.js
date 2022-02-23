import React, { Component } from "react";

export default class DataBinding extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }

    nameEnter(event){
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return(
            <div>
            <label>Enter Name: </label>
            <input type="text" name="name" onChange={(event) => this.nameEnter(event)}/>
            <h5>Name Entered is: {this.state.name}</h5>
            <ChildComponent userName={this.state.name}></ChildComponent>
            </div>
        )
    }
}

function ChildComponent(props) {
    return <h5>Value in Child Component: {props.userName}</h5>
}

// class ChildComponent extends React.Component{
//     render() {
//         return <h5>Value in Child Component: {this.props.userName}</h5>
//     }
// }