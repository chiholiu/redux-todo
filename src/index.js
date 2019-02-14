import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
=======
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import Todo from './components/App';

>>>>>>> 182824a66c8e669674854a8dc74d6dc701777e2f
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import * as serviceWorker from './serviceWorker';
import Todo from './components/App';

const store = createStore(rootReducer);

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
