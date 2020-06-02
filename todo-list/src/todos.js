import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            console.log(todo);
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="noTodos">go ahead and get some free time!</p>
    )
    return (
        <div className="todoList">
        {todoList}
        </div>
    )
}

export default Todos;