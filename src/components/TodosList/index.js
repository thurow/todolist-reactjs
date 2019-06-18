import React from 'react'
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux-flow/reducers/todos/action-creators';
import * as filterActions from '../../redux-flow/reducers/visibility-filter/actions'

const TodosList = ({ todos, activeFilter, handleToggleTodo }) => (
  <ul>
    {getVisibleTodos(todos, activeFilter).map(todo => (
      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={handleToggleTodo(todo.id)}
      >
        {todo.text}
      </li>
    ))}
  </ul>
)

const getVisibleTodos = (todos, activeFilter) => {
  return {
    [filterActions.SHOW_ALL]: todos,
    [filterActions.SHOW_COMPLETED]: todos.filter(todo => todo.completed),
    [filterActions.SHOW_ACTIVE]: todos.filter(todo => !todo.completed)
  }[activeFilter]
}

const mapStateToProps = state => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
  handleToggleTodo: id => e => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
