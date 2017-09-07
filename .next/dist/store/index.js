'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.didLoading = exports.userLogin = exports.changeLanguage = exports.reducer = exports.actionTypes = undefined;

var _assign = require('next\\node_modules\\babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _language = require('../config/language');

var _language2 = _interopRequireDefault(_language);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleInitialState = {
  messages: {},
  user: {},
  loading: true
};

var actionTypes = exports.actionTypes = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  USER_LOGIN: 'USER_LOGIN',

  LOADING: 'LOADING'

  // REDUCERS
};var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments[1];

  switch (action.type) {

    case actionTypes.CHANGE_LANGUAGE:
      return (0, _assign2.default)({}, state, {
        language: action.local,
        messages: _lodash2.default.get(_language2.default[action.local], 'messages')
      });

    case actionTypes.USER_LOGIN:
      return (0, _assign2.default)({}, state, {
        user: action.user
      });

    case actionTypes.LOADING:
      return (0, _assign2.default)({}, state, {
        loading: action.loading
      });

    default:
      return state;
  }
};

// ACTIONS
var changeLanguage = exports.changeLanguage = function changeLanguage(local) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.CHANGE_LANGUAGE,
      local: local
    });
  };
};
var userLogin = exports.userLogin = function userLogin(user) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.USER_LOGIN,
      user: user
    });
  };
};
var didLoading = exports.didLoading = function didLoading(loading) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.LOADING,
      loading: loading
    });
  };
};

/////
var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};