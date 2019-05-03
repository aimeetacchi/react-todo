import React, { Component } from 'react';
import './App.scss';
import Form from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your Todo List</h1>
          <p>Do you need a todo list, well here you go fill this in</p>
        </header>
        <Form/>
      </div>
    );
  }
}

export default App;
