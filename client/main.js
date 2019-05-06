import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import { ThemeProvider } from 'pcln-design-system'
import store from './store'
import Main from './components/Main'

render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider>
          <Main />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('main')
)