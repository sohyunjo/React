import React, { Component } from 'react';
import './Person.css'
const person = (props) => {
    return (
    <div className='Person'>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type ="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};

// class Person extends Component{
//     render(){
//         return <p>My name is {this.props}</p>
//     }
// }

export default person;
