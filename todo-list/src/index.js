import React, { Component } from 'react';
import ReactDom from 'react-dom'
import './index.css';
import Todos from './todos';
import AddTodo from './addform'

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'buy a pair of jeans'},
            {id: 2, content: 'play with my niece'},
        ]
    }

    deleteTodo = (id) => {
        console.log("delete")
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });

        this.setState({
            todos
        });
    }
    addTodo = (todo) => {
        todo.id = Math.random()
        let todos = [...this.state.todos, todo];
        this.setState ({
            todos 
        })
    }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}
  
ReactDom.render(<App/>, document.querySelector("#root"));
