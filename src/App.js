import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buying milk'},
      {id: 2, content: 'playing wow'}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
 
    this.setState({
      todos
    })
  }

  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
