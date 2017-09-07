'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactstrap = require('reactstrap');

var _firebase = require('../api/firebase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormLogin = function (_Component) {
  (0, _inherits3.default)(FormLogin, _Component);

  function FormLogin() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FormLogin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FormLogin.__proto__ || (0, _getPrototypeOf2.default)(FormLogin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: '',
      password: ''
    }, _this.handleFackbook = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _firebase.loginWithFacebook)(function (error) {
                console.log(error);
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.handleLogin = function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var _this$state, email, password;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                _this$state = _this.state, email = _this$state.email, password = _this$state.password;

                (0, _firebase.loginWithEmail)(email, password, function (error) {
                  console.log(error);
                });

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.handleLogout = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              (0, _firebase.logout)(function (error) {
                console.log(error);
              });

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FormLogin, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var user = this.props.user;

      return _react2.default.createElement('div', { id: 'FormLogin' }, _lodash2.default.isEmpty(user) ? _react2.default.createElement('div', null, _react2.default.createElement(_reactstrap.Button, { style: { background: '#3b5998', color: 'white' }, size: 'lg', block: true, onClick: this.handleFackbook }, 'Facebook'), _react2.default.createElement('hr', null), _react2.default.createElement(_reactstrap.Form, { onSubmit: this.handleLogin }, _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'email', placeholder: 'E-mail', onChange: function onChange(e) {
          return _this3.setState({ email: e.target.value });
        } })), _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Password', onChange: function onChange(e) {
          return _this3.setState({ password: e.target.value });
        } })), _react2.default.createElement(_reactstrap.Button, { color: 'primary', size: 'lg', block: true, onSubmit: this.handleLogin }, 'Sign In'))) : _react2.default.createElement(_reactstrap.Button, { color: 'primary', size: 'lg', block: true, onClick: this.handleLogout }, 'Sign Out'));
    }
  }]);

  return FormLogin;
}(_react.Component);

exports.default = FormLogin;