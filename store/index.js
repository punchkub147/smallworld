import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import language from '../config/language'
import _ from 'lodash'

const exampleInitialState = {
  messages: {},
  user: {},
  loading: true,
}

export const actionTypes = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  USER_LOGIN: 'USER_LOGIN',

  LOADING: 'LOADING',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {

    case actionTypes.CHANGE_LANGUAGE:
      return Object.assign({}, state, { 
        language: action.local,
        messages: _.get(language[action.local], 'messages')
      })

    case actionTypes.USER_LOGIN:
      return Object.assign({}, state, { 
        user: action.user,
      })

    case actionTypes.LOADING:
      return Object.assign({}, state, {
        loading: action.loading,
      })

    default: return state
  }
}

// ACTIONS
export const changeLanguage = (local) => dispatch => {
  return dispatch({ 
    type: actionTypes.CHANGE_LANGUAGE,
    local,
  })
}
export const userLogin = (user) => dispatch => {
  return dispatch({ 
    type: actionTypes.USER_LOGIN,
    user,
  })
}
export const didLoading = (loading) => dispatch => {
  return dispatch({ 
    type: actionTypes.LOADING,
    loading,
  })
}

/////
export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}