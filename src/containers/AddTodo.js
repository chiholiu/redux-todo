import React from 'react';
<<<<<<< HEAD
// import { connect } from 'react-redux';
import { addTodo } from '../actions';

const Todo = ({ dispatch }) => {
  
=======
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const Todo = ({ dispatch }) => {
>>>>>>> 182824a66c8e669674854a8dc74d6dc701777e2f
    let input;

    return (
      <form onSubmit={e => {
<<<<<<< HEAD
        e.preventDefault();
        if(!input.value.trim()) return
        
        dispatch(addTodo(input.value))
        input.value = "";
      }}>
        <label>
            Name:
                <input ref={node => {
                    input = node // assign the node reference to the input variable
                }}/>  
=======
        e.preventDefault()
        if(!input.value.trim()) {
            return
        }
        dispatch(addTodo(input.value))
        input.value = ''
    }}>
        <label>
                Name:
                <input ref={node => (input = node)}/>
>>>>>>> 182824a66c8e669674854a8dc74d6dc701777e2f
                <button type="submit">Add</button>
        </label>
    </form>
    )
}

<<<<<<< HEAD
export default Todo;
=======
export default connect()(Todo);
>>>>>>> 182824a66c8e669674854a8dc74d6dc701777e2f
