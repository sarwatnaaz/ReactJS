import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(<HeaderComponent></HeaderComponent>, document.getElementById("root"))

function HeaderComponent(){
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Sarwat : This is Header for the session..."),
    React.createElement("h2", {}, "Sarwat: This is other header"),
    React.createElement("p", {}, "Sarwat: This is sample paragraph..."),
    React.createElement("div", {}, [
      React.createElement("section", {}, [
        React.createElement("h1", {}, "This is React component"),
        React.createElement("div", {}, [
          React.createElement("h2", {}, "This is another component"),
        ])
      ]),
      React.createElement("article", {},[
        React.createElement("h1", {}, "This is react component"),
        React.createElement("div", {},[
          React.createElement("h2",{},"This is another component")
        ])
      ])
    ])
  ]) 
  }
