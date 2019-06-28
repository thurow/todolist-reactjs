import React from 'react'
import Form from './components/Form'
import TodosList from './components/TodosList'
import Filter from './components/Filter'
import SearchCep from './components/SearchCep'

import 'milligram'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', padding: 30 }}>
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
