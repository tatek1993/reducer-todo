import React, { useState } from 'react';


// export const ToDoForm = ({newTodo, clearCompleted}) => {
    
//     const [newItem, setNewItem] = useState('');

export const ToDoForm = (props) => {
  const clearCompleted = props.clearCompleted;
  const addTodo = props.addTodo;
    
  const [newItem, setNewItem] = useState('');

  const handleChanges = e => {
    setNewItem(e.target.value);
  };

  const handleSubmit = e => {
      e.preventDefault()
      addTodo(newItem)
      setNewItem('')
  };

  return (
      <form onSubmit={handleSubmit}>
          <h2>Add a To Do Item</h2>
          <input
          className="new-item"
          type="text"
          name="newItem"
          value={newItem}
          onChange={handleChanges}
            />
          <input type="submit"/>
          <button onClick={clearCompleted}>Clear Finished Items</button>
      </form>
  );
}