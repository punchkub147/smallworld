'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\punchkub147\\Desktop\\next\\layouts\\Header.js';


var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'Header', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_reactstrap.Navbar, { color: 'faded', light: true, toggleable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_reactstrap.NavbarToggler, { right: true, onClick: this.toggle, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(_reactstrap.NavbarBrand, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Small World'), _react2.default.createElement(_reactstrap.Collapse, { isOpen: this.state.isOpen, navbar: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_reactstrap.Nav, { className: 'ml-auto', navbar: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_reactstrap.NavLink, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Home')), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_reactstrap.NavLink, { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'About')), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_reactstrap.NavLink, { href: '/user', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'User')), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_reactstrap.NavLink, { href: '/pricing', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Pricing')), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_reactstrap.NavLink, { href: '/contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Contact')), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_reactstrap.NavLink, { href: '/services', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Services')), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_reactstrap.NavLink, { className: 'login', href: '/login', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Login'))))));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;