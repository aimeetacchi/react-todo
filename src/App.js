import React, { Component } from 'react';
import './App.scss';
import Form from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your Todo List</h1>
          <p>Do you have a list of things you need to do, well add them here and then you can go through them and tick them off</p>
        </header>
        <Form/>
      </div>
    );
  }
}

export default App;
