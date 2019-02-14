import { VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
        return todos
    default: 
        throw new Error('Unknown filter: ' + filter);
    }
}

export default getVisibleTodos;