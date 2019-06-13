import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import reducer from './redux-flow/reducers'

const store = createStore(reducer)

const renderApp = (NextApp) => {
  render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
    document.querySelector('#root')
  )
}

renderApp(App)