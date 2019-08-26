import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Sun", age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson();
    this.setState({showPerson: !doesShow})
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React APP</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.togglePersonHandler()}>Turn On</button>
        {this.state.showPerson ?
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max')}
            changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
        : null
          }
      </div>
    );
  }
}
export default App;