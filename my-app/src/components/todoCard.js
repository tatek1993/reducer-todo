import React, {useState, useEffect} from 'react';

const ToDoCard = ({todo, toggleCompleted}) => {
    const { item, completed, id } = todo
    
    const switchToggle = event => {
        
        toggleCompleted(id)
    }


    return (  
        <div onClick={switchToggle} className={completed ? 'completed' : ''}>
            {item}
        </div>
    );
}
 
export default ToDoCard;