import React, { useState, useReducer } from 'react';

import { todoReducer, initialState } from './reducers/todoReducer';

import { ToDoList } from './components/todoList';
import { ToDoForm } from './components/todoForm';
import './App.css';

const ToDo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = newItem => {
    dispatch({ type: 'ADD_TODO', payload: newItem })
  }

  const toggleCompleted = () => {
    dispatch({ type: 'TOGGLE_COMPLETED'})
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED'})
  }

  console.log('this is state', state);
  return (
    <div>
      <h1>Your To-Do List</h1>
      <div>
        <ToDoForm addTodo={addTodo} toggleCompleted={toggleCompleted} clearCompleted={clearCompleted} />
        <ToDoList todo={state.todoArray} />
      </div>
    </div>
  )

};

export default ToDo;
