import React, { Component } from 'react';
import './App.scss';
import Form from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your To-Do List</h1>
          <p>Do you need a to-do list to add your shopping or tasks to, well here you go fill this in</p>
        </header>
        <Form/>

        <footer style={{textAlign: 'center', color: 'white'}}>
          <p>To-Do List built with ReactJS, you can vist the code over on my <a style={{color: 'white', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer" href="https://github.com/aimeetacchi/react-todo"> <i className="fab fa-github"></i> GitHub repo</a></p>

          <small>Developed &amp; designed by <a style={{color: 'white', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer" href="https://www.aimeetacchi.dev">Aimee Tacchi</a> 2019</small>
        
        </footer>
      </div>
    );
  }
}

export default App;
