import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getTodos = (todos) => {
    switch (todos) {
        default:
          return todos
      }
}

const mapStateToProps = state => ({
    todos: getTodos(state.todos)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps   
)(TodoList)