import React from 'react';

import { todoReducer, initialState } from '../reducers/todoReducer';

export const ToDoList = props => {
    console.log("props.todo", props.todo);
    return (
        <div className="todo-list">
            {props.todo.map(item => (
            <h4>{item.item}</h4>
                
            ))}
        </div>
    )

};