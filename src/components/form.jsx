import React, { Component } from 'react';
import Todo from './todo';

const uuidv1 = require('uuid/v1');

let existingtodos;

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [],
            submitted: false,
        }
    }

    componentDidMount(){
       // Check Local Storage for Data on Page Reload or use empty array.
        existingtodos = JSON.parse(localStorage.getItem('todos')) || [];

        // CHECK IF THERE IS ANYTHING IN LOCAL STORAGE!!! ====
        if(localStorage.getItem('todos') !== null){
            console.log('todos in localstorage');

            // setting state at beginning if there is anything in local storage.
            this.setState({todos: existingtodos});
        }
    }

    // EDIT ITEM =====
    editToDo = (id) => {
        const todo = this.state.todos.filter((todo)=> {
            if(todo.id === id){
                // toggle from false/true
                todo.edit = !todo.edit;
            }
            return todo;
        })
        this.setState({todos: todo}); 
    }

    updateItem = (newdata) => {
        console.log(newdata)
        // update the state with the ammended val.



        // update localstorage again with new state... 



    }

      // DONE ITEM ====
    completeToDo = id => {
        const todo = this.state.todos.filter((todo)=> {
            if(todo.id === id){
                todo.complete = !todo.complete;
            }
            return todo;
        })
        this.setState({todos: todo});

        // updating localStorage
        this.addLocalStorage(todo);
    }

    // DELETE ITEM
    removeToDo = id => {
        //filter through the todos and remove the one passed into the function...
        const updatedtodos = this.state.todos.filter(todo => todo.id !== id)
        
        //set new updated todo with the removed one gone.
        this.setState({todos: updatedtodos});

        // update local storage
        this.addLocalStorage(updatedtodos);
    }
    
    //Add to local storage function
    addLocalStorage(arr){
        localStorage.setItem('todos', JSON.stringify(arr));
    }

    // CREATE ITEM =====
    handleSubmit = (e) => { 
        e.preventDefault()
        this.setState({submitted: true})
        //console.log(this.refs.item.value)

        let data = {
            item: this.refs.item.value,
            complete: false,
            edit: false,
            id: uuidv1()
        }

        this.setState({
            // spread operator adds new object to exsitiing array.
            todos: [
                    ...this.state.todos,
                    data
            ]
        });

        existingtodos.push(data);
        //Add to local storage function
        this.addLocalStorage(existingtodos);
        
        this.refs.item.value = ""
    }


  render() {
    return (
      <div>
          <form className="addtodo" onSubmit={this.handleSubmit}>
            <div className="formgroup">
                <label>Add todo <i className="fas fa-plus"></i></label>
                <input
                    type="text"
                    placeholder="enter task"
                    ref="item"
                    required
                    />
            </div>
            <input type="submit" className="btn" value="Add Todo"/>
            </form>

            
            {/* ===== TODO LIST ====== */}
            <div id="todo-list">
                <h2>Your Todos</h2>
                
                {this.state.todos.length === 0 ? <p>List is empty try adding a todo</p> : 
                <ul>{ this.state.todos.map((todo, i) => (
                    
                    // creating a todo Component for each new item, passing all functions
                    <Todo key={i} completeToDo={this.completeToDo} updateItem={this.updateItem} editToDo={this.editToDo} removeToDo={this.removeToDo} todoObject={todo}/>

                    ))
                
                }
                </ul>}
                
            </div>
      </div>
    )
  }
}
