export const initialState = {
   todos: [
       {
            item: 'Learn React',
            completed: false,
            id: 1
        }
    ]
};



export const todoReducer = (state, action) => {
    console.log('this is state.id', state.todos.id);
    switch (action.type) {
        case 'ADD_TODO' :
            return {
                todos: [
                    ...state.todos, 
                    {
                        item: action.payload, 
                        completed: false, 
                        id: Date.now()
                    }
                ]
                
                
            };
        case 'TOGGLE_COMPLETED' :
            return {
                ...state,
                completed: !state.completed
            };    
    }
}