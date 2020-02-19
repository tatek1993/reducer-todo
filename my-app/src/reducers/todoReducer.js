export const initialState = {
   todoArray: [
       {
            item: 'Learn React',
            completed: false,
            id: 1
        }
    ]
};



export const todoReducer = (state, action) => {
   
    switch (action.type) {
        case 'ADD_TODO' :
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                todoArray: [...state.todoArray, newTodo]      
            };

        case 'TOGGLE_COMPLETED' :
            console.log("wah", action.payload);
            return {
                ...state,
                todoArray: state.todoArray.map(todo => {                    
                    if(todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    } else {
                       return todo;
                    } 
                }
                   
      )
            };    
           
        case 'CLEAR_COMPLETED' :
            
            return {
               todoArray: state.todoArray.filter(item => !item.completed)
            }    
    }
}