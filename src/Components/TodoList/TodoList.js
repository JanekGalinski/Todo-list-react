import React from 'react';
import './TodoList.css';

function TodoList({todoList, deleteAndRenderTodos}) {
    return (
        <section>
            <h1>Twoja lista</h1>
            <ul className="list-group"> 
            {todoList.map(todo => {
                return <li className="list-group-item" key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <a target="_blank" rel="noopener noreferrer" href={todo.url}>LINK</a>
                <button className="btn btn-danger" onClick={() => { deleteAndRenderTodos(todo.id) }}>USUŃ</button>
                </li>
            })}
            </ul>
        </section>
    )
  }

export default TodoList;
