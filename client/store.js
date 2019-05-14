import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

/**
 * INITIAL STATE
 */
const initialState = {
  pointsOfInterest: [],
  flightDetails: {
    departure: 'New York City, NY (JFK)',
    arrival: 'Seattle, WA (SEA)',
    leaving: '05/09/2019',
    returning: '05/13/2019',
    passengers: 1,
    seat: 'First'
  },
  loading: false
}

/**
 * ACTION TYPES
 */
const GOT_POINTS_OF_INTEREST = 'GOT_POINTS_OF_INTEREST'
const GOT_FLIGHT = 'GOT_FLIGHT'

/**
 * ACTION CREATORS
 */
const gotPointsOfInterest = attractions => ({
  type: GOT_POINTS_OF_INTEREST,
  attractions
})

const gotFlight = flight => ({
  type: GOT_FLIGHT,
  flight
})

/**
 * THUNK CREATORS
 */
export const getPointsOfInterest = place => async (dispatch) => {
  try {
    const {data} = await axios.post('/api/pointsofinterest', {place})
    dispatch(gotPointsOfInterest(data))
  } catch (err) {
    console.error(err)
  }
}

export const getFlight = details => async (dispatch) => {
  try {
    dispatch(gotFlight(details))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_POINTS_OF_INTEREST:
      return {...state, pointsOfInterest: action.attractions, loading: true}
    case GOT_FLIGHT:
      return {...state, flightDetails: action.flight, loading: true}
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