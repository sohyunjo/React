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

    switchNameHandler = () => {
        console.log('wasclicked')
    }

  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <button onClick={this.switchNameHandler}>Swich name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>hobbies: racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'work'))
  }
}

// hello this is
export default App;
