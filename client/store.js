import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

const initialState = {
  flightDetails: {
    departure: '',
    arrival: '',
    leaving: '',
    returning: '',
    travelers: 1,
    seat: 'Economy'
  }
}

// Action types

// Action creators

// Thunk creators

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  ))
)