import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodo from '../containers/VisibleTodo';

const App = () => (
    <div>
        <AddTodo/>
        {/* <VisibleTodoList/> */}
        <VisibleTodo/>
    </div>
)

export default App;