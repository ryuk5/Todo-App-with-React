import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    //todoList hiya variable dans la quelle on stocke féha le résultat du map ou a p tag
    const todoList = todos.length > 0 ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <div className="row">
                        <div className="col s6">
                            <span>{todo.content}</span>
                        </div>

                        <div className="col s6">
                            <button style={{marginLeft:'20px'}} onClick={() => {deleteTodo(todo.id)}} className="waves-effect waves-light btn">Delete Todo</button>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (
        <p className="center">You don't have todo's</p>
    )

    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;