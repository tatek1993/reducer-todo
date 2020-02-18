import React, {useState, useEffect} from 'react';

const ToDoCard = ({todo, toggleCompleted}) => {
    const { item, completed, id } = todo
    const [toggle, setToggle] = useState('')
    
    const switchToggle = event => {
        
        toggleCompleted(id)
    }
    useEffect(() => {
        completed ? setToggle('completed') : setToggle('')
    }, [completed])

    return (  
        <div onClick={switchToggle} className={toggle}>
            {item}
        </div>
    );
}
 
export default ToDoCard;