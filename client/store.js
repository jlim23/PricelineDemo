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
const GOT_POINTS_OF_INTERESTS = 'GOT_POINTS_OF_INTERESTS'
const GOT_FLIGHT = 'GOT_FLIGHT'

/**
 * ACTION CREATORS
 */
const gotPointsOfInterests = attractions => ({
  type: GOT_POINTS_OF_INTERESTS,
  attractions
})

const gotFlight = flight => ({
  type: GOT_FLIGHT,
  flight
})

/**
 * THUNK CREATORS
 */
export const getPointsOfInterests = place => async (dispatch) => {
  try {
    const {data} = await axios.post('/api/pointsofinterest', place)
    dispatch(gotPointsOfInterests(data))
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
    case GOT_POINTS_OF_INTERESTS:
      return {...state, pointsOfInterest: action.attractions}
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