import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
    state = {
        persons: [
            {
                id:'11111',
                name: 'Max',
                age: 18
            }, {
                id:'2222',
                name: 'Nana',
                age: 20
            }, {
                id:'3333',
                name: 'Steph',
                age: 10
            }
        ],
        showPersons: false
    }

    // switchNameHandler = (newName) => {
    //     this.setState({
    //         persons: [
    //             {
    //                 name: newName,
    //                 age: 18
    //             }, {
    //                 name: 'Nana',
    //                 age: 20
    //             }, {
    //                 name: 'Steph',
    //                 age: 10
    //             }
    //         ]
    //     })
    // }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const ppl = [...this.state.persons];
        ppl.splice(personIndex, 1);
        this.setState({persons: ppl});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render() {

        const style = {
            backgroundColor: 'green',
            color:'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'

        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                {
                    this.state.persons.map((person, index) => {
                        return <Person
                            click = {() => this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            name={person.name} age={person.age}
                            key={person.id}/>
                    })
                }
            </div>);

            style.backgroundColor = 'red';

        }

        // <Person
        //     name={this.state.persons[0].name}
        //     age={this.state.persons[0].age}>
        //     hobbies: racing
        // </Person>
        // <Person
        //     name={this.state.persons[1].name}
        //     age={this.state.persons[1].age}
        //     click={this.switchNameHandler.bind(this, 'Max!')}
        //     changed={this.nameChangedHandler}/>
        // <Person
        //     name={this.state.persons[2].name}
        //     age={this.state.persons[2].age}/>

        let classes = [];
        if(this.state.persons.length <= 2){
            classes.push('red');
        }
        if(this.state.persons.length<= 1){
            classes.push('bold');
        }

        return (

            <div className="App">
            <h1>hello</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button style={style} onClick={this.togglePersonsHandler}>
                Toggle Persons
            </button>
            {persons}
        </div>);
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'work'))
    }
}

// hello this is
export default App;
