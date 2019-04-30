import React, { Component } from 'react';
import Todos from '../components/todos';
const uuidv1 = require('uuid/v1');

let existingtodos;

export default class form extends Component {
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
    // editToDo = (id) => {
    //     const todo = this.state.todos.filter((todo)=> {
    //         if(todo.id === id){
    //             todo.edit = !todo.edit;
    //         }
    //         return todo;
    //     })
    //     this.setState({todos: todo}); 
    // }

    // // UPDATE ITEM =====
    // handleUpdate = (e) => { 
    //     e.preventDefault()
    //     console.log(this.refs.item.value)
    // }

      // DONE ITEM ====
    completeToDo = (id) => {
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
    removeToDo = (index) => {
        //filter through the todos and remove the one passed into the function...
        const updatedtodos = this.state.todos.filter((todo,i)=> {
            return (i !== index);
        })
        //log the newly filtered array without the removed item
        console.log(updatedtodos)
        this.setState({todos: updatedtodos});

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
          <form onSubmit={this.handleSubmit}>
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
            <Todos completeToDo={this.completeToDo} editToDo={this.editToDo} handleUpdate={this.editToDo} removeToDo={this.removeToDo} data={this.state}/>
      </div>
    )
  }
}
