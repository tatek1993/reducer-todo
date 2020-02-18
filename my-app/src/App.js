import React, { useState, useReducer } from 'react';

import { todoReducer, initialState } from './reducers/todoReducer';

import { ToDoList } from './todoList';

import './App.css';

const ToDo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [newItem, setNewItem] = useState('');

  const handleChanges = e => {
    setNewItem(e.target.value);
  };

  console.log('this is state', state);
  return (
    <div>
      <h1>Your To-Do List</h1>
      <div>
        <input
          className="new-item"
          type="text"
          name="newItem"
          value={newItem}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: 'ADD_TODO', payload: newItem })
          }}
        >
          Add 
        </button>
        <ToDoList todo={state.todos} />
      </div>
    </div>
  )

}

export default ToDo;
