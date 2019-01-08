import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducers = (state = [], action) => {
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


const store = createStore(reducers);

const App = () => (
    <Provider store={store}>
        <Todo/>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
