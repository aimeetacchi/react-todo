import React, { Component } from 'react';
import './App.scss';
import Form from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>List</h1>
        </header>
        <Form/>
      </div>
    );
  }
}

export default App;
