import React, {Component} from "react";

export default class Classes extends Component{
    render() {//render(), returns html 
        return (
            <h1>A class component</h1>
        )
    }

}

// The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.



// In functional component, there is no this keyword
//Have a private state
//Mainly used for creating UI
//Also reffered to as dumb , representational or stateless components

//Class
//Create more complex UI logic
//Manage their own state
//Also referre to as stateful or smart components
