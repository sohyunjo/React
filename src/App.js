import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 18},
            {name: 'Nana', age:20},
            {name: 'Steph', age:10}
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 18},
                {name: 'Nana', age:20},
                {name: 'Steph', age:10}
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons:[
                {name: 'Max', age: 18},
                {name: event.target.value, age:35},
                {name: 'Steph', age:35}
        ]
        })
    }

  render() {

      const style={
        backgroundColor: 'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
      };
    return (
      <div className="App">
        <h1>hello</h1>
        <button
            style={style}
            onClick={this.switchNameHandler.bind(this, 'Max!!!!')}>Swich name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>hobbies: racing</Person>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}
            />
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'work'))
  }
}

// hello this is
export default App;
