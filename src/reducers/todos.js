<<<<<<< HEAD:src/reducer/index.js
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    todos,
    visibilityFilter
})
=======
const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TODDLE_TODO':
            return state.map(
                todo => 
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default: 
            return state
    }
}

export default todos;
>>>>>>> 182824a66c8e669674854a8dc74d6dc701777e2f:src/reducers/todos.js
