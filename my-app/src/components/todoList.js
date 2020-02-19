import React from 'react';
import ToDoCard from './todoCard';
import { todoReducer, initialState } from '../reducers/todoReducer';

export const ToDoList = props => {
    console.log("props.todo", props.todo);
    return (
        <div className="todo-list">
            {props.todo.map(item => {
                console.log("item", item);
                return(
                    <ToDoCard todo={item} toggleCompleted={props.toggleCompleted}/>
                
                );
            })}
        </div>
    )

};