import React from 'react'
import Form from './components/Form'
import TodosList from './components/TodosList';
import Filter from './components/Filter';
import SearchCep from './components/SearchCep';

const App = () => (
  <div>
    <div>
      <Form />
      <TodosList />
      <Filter />
    </div>
    <div>
      <SearchCep />
    </div>
  </div>
)

export default App
