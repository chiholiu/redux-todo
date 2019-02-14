import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const Todo = ({ dispatch }) => {
    let input;

    return (
      <form onSubmit={e => {
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
                <button type="submit">Add</button>
        </label>
    </form>
    )
}

export default connect()(Todo);
