import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    name: 'Strange',
    greet: 'What\'s your...'
  }

  changeNameHandler = (event) => {
    this.setState({
      name: event.target.value,
      greet: 'Nice to meet you'
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hello, {this.state.name}! </h1>
        <UserInput change={this.changeNameHandler} greet={this.state.greet} change={this.changeNameHandler}/>
        <UserOutput name={this.state.name} change={this.changeNameHandler}/>
      </div>
    );
  }
}

export default App;
