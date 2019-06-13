import React from 'react';
import './App.scss';
import Form from './components/form';

const App = () => {
  
    return (
      <div className="App">
        <div className="wrapper"> 
          <header className="App-header">
            <h1>Your To-Do List</h1>
            <p>Do you need a to-do list to add your shopping or tasks to, well here you go fill this in</p>
          </header>
          <Form/>
          
        </div>
        <footer>
            <p>To-Do List built with ReactJS, you can vist the code over on my <a style={{color: 'white', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer" href="https://github.com/aimeetacchi/react-todo"> <i className="fab fa-github"></i> GitHub repo</a></p>

            <p>Developed &amp; designed by <a style={{color: 'white', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer" href="https://www.aimeetacchi.dev">Aimee Tacchi</a> 2019</p>
          
        </footer>
      </div>
    )
}

export default App;
