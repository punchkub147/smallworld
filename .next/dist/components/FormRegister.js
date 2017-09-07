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

var _reactstrap = require('reactstrap');

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _firebase = require('../api/firebase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormRegister = function (_Component) {
  (0, _inherits3.default)(FormRegister, _Component);

  function FormRegister() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FormRegister);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FormRegister.__proto__ || (0, _getPrototypeOf2.default)(FormRegister)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      user: {},
      displayName: '',
      email: '',
      password: '',
      password2: '',
      day: '',
      month: '',
      year: '',
      gender: ''
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
    })), _this.handleRegister = function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var _this$state, password, password2;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                _this$state = _this.state, password = _this$state.password, password2 = _this$state.password2;

                if (password === password2) {
                  _this.doRegister();
                } else {
                  console.log('PASSWORD ERROR');
                }

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
    }(), _this.doRegister = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var _this$state2, displayName, email, password, password2, day, month, year, gender, birthday, user;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$state2 = _this.state, displayName = _this$state2.displayName, email = _this$state2.email, password = _this$state2.password, password2 = _this$state2.password2, day = _this$state2.day, month = _this$state2.month, year = _this$state2.year, gender = _this$state2.gender;
              birthday = year; /////////////////////

              user = {
                displayName: displayName,
                email: email,
                detail: {
                  gender: gender,
                  birthday: birthday
                }
              };
              _context3.next = 5;
              return (0, _firebase.register)(email, password, user, function (error) {
                console.log(error);
              });

            case 5:
              _index2.default.push({
                pathname: '/about'
              });

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FormRegister, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { id: 'FormRegister' }, _react2.default.createElement('h1', null, 'Join To Small World'), _react2.default.createElement(_reactstrap.Form, { onSubmit: this.handleRegister }, _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'email', placeholder: 'E-mail', state: 'danger', onChange: function onChange(e) {
          return _this3.setState({ email: e.target.value });
        } })), _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Password', onChange: function onChange(e) {
          return _this3.setState({ password: e.target.value });
        } })), _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Confirm Password', onChange: function onChange(e) {
          return _this3.setState({ password2: e.target.value });
        } })), _react2.default.createElement('hr', null), _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: 'Display Name', onChange: function onChange(e) {
          return _this3.setState({ displayName: e.target.value });
        } })), _react2.default.createElement(_reactstrap.Label, null, 'Birthday'), _react2.default.createElement('div', { className: 'row no-gutters' }, _react2.default.createElement('div', { className: 'col-md-3' }, _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '\u0E27\u0E31\u0E19', onChange: function onChange(e) {
          return _this3.setState({ day: e.target.value });
        } }))), _react2.default.createElement('div', { className: 'col-md-5' }, _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'select', name: 'select', onChange: function onChange(e) {
          return _this3.setState({ month: e.target.value });
        } }, _react2.default.createElement('option', null, 'Month'), _react2.default.createElement('option', null, '1'), _react2.default.createElement('option', null, '2'), _react2.default.createElement('option', null, '3'), _react2.default.createElement('option', null, '4'), _react2.default.createElement('option', null, '5'), _react2.default.createElement('option', null, '6'), _react2.default.createElement('option', null, '7'), _react2.default.createElement('option', null, '8'), _react2.default.createElement('option', null, '9'), _react2.default.createElement('option', null, '10'), _react2.default.createElement('option', null, '11'), _react2.default.createElement('option', null, '12')))), _react2.default.createElement('div', { className: 'col-md-4' }, _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '\u0E1B\u0E35', onChange: function onChange(e) {
          return _this3.setState({ year: e.target.value });
        } })))), _react2.default.createElement(_reactstrap.Label, null, 'Gender'), _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement('label', { className: 'custom-control custom-radio', onClick: function onClick(e) {
          return _this3.setState({ gender: 'male' });
        } }, _react2.default.createElement('input', { id: 'radio1', name: 'radio', type: 'radio', className: 'custom-control-input' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'Male')), _react2.default.createElement('label', { className: 'custom-control custom-radio', onClick: function onClick(e) {
          return _this3.setState({ gender: 'female' });
        } }, _react2.default.createElement('input', { id: 'radio2', name: 'radio', type: 'radio', className: 'custom-control-input' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'Female'))), _react2.default.createElement(_reactstrap.Button, { color: 'primary', size: 'lg', block: true, onSubmit: this.handleRegister }, 'Sign Up')));
    }
  }]);

  return FormRegister;
}(_react.Component);

exports.default = FormRegister;