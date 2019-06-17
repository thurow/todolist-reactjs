import React from 'react'
import Form from './components/Form'
import TodosList from './components/TodosList';
import Filter from './components/Filter';

const App = () => (
  <div>
    <Form />

    <TodosList />

    <Filter />
  </div>
)

export default App
