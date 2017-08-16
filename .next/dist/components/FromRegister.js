'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _firebase = require('../api/firebase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\punchkub147\\Desktop\\next\\components\\FromRegister.js';


var FromRegister = function (_Component) {
  (0, _inherits3.default)(FromRegister, _Component);

  function FromRegister() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FromRegister);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FromRegister.__proto__ || (0, _getPrototypeOf2.default)(FromRegister)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      user: {},
      email: '',
      password: '',
      password2: '',
      day: '',
      month: '',
      year: '',
      sex: ''
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
        var _this$state, email, password, password2, day, month, year, sex, birthday, user;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                _this$state = _this.state, email = _this$state.email, password = _this$state.password, password2 = _this$state.password2, day = _this$state.day, month = _this$state.month, year = _this$state.year, sex = _this$state.sex;

                if (!(password === password2)) {
                  _context2.next = 9;
                  break;
                }

                birthday = year; /////////////////////

                user = {
                  email: email,
                  detail: {
                    sex: sex,
                    birthday: birthday
                  }
                };
                _context2.next = 7;
                return (0, _firebase.register)(email, password, user, function (error) {
                  console.log(error);
                });

              case 7:
                _context2.next = 10;
                break;

              case 9:
                console.log('PASSWORD ERROR');

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FromRegister, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      (0, _firebase.getUser)(function (user) {
        _this3.setState({
          user: user
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement('div', { id: 'FromRegister', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_reactstrap.Button, { color: 'primary', size: 'lg', block: true, onClick: this.handleFackbook, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Facebook'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement('div', { className: 'title', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, '\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E14\u0E49\u0E27\u0E22 Email \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13'), _react2.default.createElement(_reactstrap.Form, { onSubmit: this.handleRegister, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'email', placeholder: 'E-mail', onChange: function onChange(e) {
          return _this4.setState({ email: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })), _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Password', onChange: function onChange(e) {
          return _this4.setState({ password: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Confirm Password', onChange: function onChange(e) {
          return _this4.setState({ password2: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), _react2.default.createElement(_reactstrap.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, '\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14'), _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('div', { className: 'col-md-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '\u0E27\u0E31\u0E19', onChange: function onChange(e) {
          return _this4.setState({ day: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))), _react2.default.createElement('div', { className: 'col-md-5', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'select', name: 'select', onChange: function onChange(e) {
          return _this4.setState({ month: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, '\u0E40\u0E14\u0E37\u0E2D\u0E19'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, '1'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, '2'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, '3'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, '4'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, '5'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, '6'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, '7'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, '8'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, '9'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, '10'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, '11'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, '12')))), _react2.default.createElement('div', { className: 'col-md-4', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '\u0E1B\u0E35', onChange: function onChange(e) {
          return _this4.setState({ year: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })))), _react2.default.createElement(_reactstrap.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, '\u0E40\u0E1E\u0E28'), _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('label', { className: 'custom-control custom-radio', onClick: function onClick(e) {
          return _this4.setState({ sex: 'male' });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement('input', { id: 'radio1', name: 'radio', type: 'radio', className: 'custom-control-input', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement('span', { className: 'custom-control-indicator', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement('span', { className: 'custom-control-description', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, '\u0E0A\u0E32\u0E22')), _react2.default.createElement('label', { className: 'custom-control custom-radio', onClick: function onClick(e) {
          return _this4.setState({ sex: 'female' });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('input', { id: 'radio2', name: 'radio', type: 'radio', className: 'custom-control-input', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), _react2.default.createElement('span', { className: 'custom-control-indicator', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), _react2.default.createElement('span', { className: 'custom-control-description', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, '\u0E2B\u0E0D\u0E34\u0E07'))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), _react2.default.createElement(_reactstrap.Button, { color: 'primary', size: 'lg', block: true, onSubmit: this.handleRegister, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, '\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19')));
    }
  }]);

  return FromRegister;
}(_react.Component);

exports.default = FromRegister;