import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import EmployeeListComponent from "../classComponent/EmployeeListComponent";
import UpdateComponent from "./UpdateComponent";
import AddComponent from './AddComponent'
import './style.css';

export default class EmployeeDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Sarwat"
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>
                    <ContentComponent></ContentComponent>
                    <FooterComponent></FooterComponent>
                </div>
            </BrowserRouter>
        )
    }
}

function ContentComponent() {
    return (
        <div className='content' style={{border: "1px solid black", padding: "10px", margin: "10px", height: "600px", overflow: "auto"}}>
            <Route exact path="/" component={EmployeeListComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/help" component={HelpComponent}></Route> 
            <Route exact path="/update/:userId" component={UpdateComponent}></Route>
            <Route exact path="/add" component={AddComponent}></Route>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className='header'>
            <h1 id='title' style={{color: "white"}}>Employee Details</h1>
            <nav>
                <Link style={{margin: "10px"}} to="/"><button type='button'>Home</button></Link>
                <Link style={{margin: "10px"}} to="help"><button type='button'>Help</button></Link>
                <Link style={{margin: "10px"}} to="about"><button type='button'>About</button></Link>
                <Link style={{margin: "10px"}} to="add"><button type='button'>AddEmployee</button></Link>
            </nav>
        </div>
    )
}



function FooterComponent() {
    return <h5>Privacy Policy</h5>
}

function AboutComponent() {
    return <h3>This is About Component</h3>
}

function HelpComponent() {
    return <h3>This is Help Component</h3>
}

