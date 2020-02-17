import React, { useState, useReducer } from 'react';

import { todoReducer, initialState } from './reducers/todoReducer';

import './App.css';

const ToDo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [todoItem, setTodoItem] = useState('');

  const handleChanges = e => {
    setTodoItem(e.target.value);
  };
  return (
    <div>
      <h1>Your To-Do List</h1>
      
    </div>
  )

}

export default App;
