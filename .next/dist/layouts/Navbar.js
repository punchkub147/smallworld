'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('next\\node_modules\\babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../static/styles');

var _reactstrap = require('reactstrap');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _Modal = require('../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _FormLogin = require('../components/FormLogin');

var _FormLogin2 = _interopRequireDefault(_FormLogin);

var _FormRegister = require('../components/FormRegister');

var _FormRegister2 = _interopRequireDefault(_FormRegister);

var _FormSearch = require('../components/FormSearch');

var _FormSearch2 = _interopRequireDefault(_FormSearch);

var _firebase = require('../api/firebase');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border-bottom: 10px solid ', ';\n  .login{\n    color: red;\n  }\n  .nav-group{\n    margin-right: 10px;\n  }\n  ul{\n    li{\n      a{\n        text-decoration: none;\n        color: ', ';\n        text-align: center;\n        box-sizing: border-box;\n        transition: 0.15s ease-in;\n      }\n      a:hover{\n        color: ', ';\n        text-shadow: -0.2px 0 ', ', 0 0.2px ', ', 0.2px 0 ', ', 0 -0.2px ', ';\n      }\n    }\n  }\n\n  #active{\n    a{\n      color: ', ';\n      text-shadow: -0.2px 0 ', ', 0 0.2px ', ', 0.2px 0 ', ', 0 -0.2px ', ';\n    }\n  }\n\n  .dropdown-menu{\n    right: 0;\n  }\n'], ['\n  border-bottom: 10px solid ', ';\n  .login{\n    color: red;\n  }\n  .nav-group{\n    margin-right: 10px;\n  }\n  ul{\n    li{\n      a{\n        text-decoration: none;\n        color: ', ';\n        text-align: center;\n        box-sizing: border-box;\n        transition: 0.15s ease-in;\n      }\n      a:hover{\n        color: ', ';\n        text-shadow: -0.2px 0 ', ', 0 0.2px ', ', 0.2px 0 ', ', 0 -0.2px ', ';\n      }\n    }\n  }\n\n  #active{\n    a{\n      color: ', ';\n      text-shadow: -0.2px 0 ', ', 0 0.2px ', ', 0.2px 0 ', ', 0 -0.2px ', ';\n    }\n  }\n\n  .dropdown-menu{\n    right: 0;\n  }\n']);

// REDUX


var MyNavbar = function (_Component) {
  (0, _inherits3.default)(MyNavbar, _Component);

  function MyNavbar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MyNavbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyNavbar.__proto__ || (0, _getPrototypeOf2.default)(MyNavbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false,
      dropdownOpen: false
    }, _this.handleLogout = function () {
      (0, _firebase.logout)(function (error) {
        console.log(error);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MyNavbar, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var _this2 = this;

        var _props, messages, changeLanguage, userLogin, didLoading, user;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props = this.props, messages = _props.messages, changeLanguage = _props.changeLanguage, userLogin = _props.userLogin, didLoading = _props.didLoading, user = _props.user;

                if (!_lodash2.default.isEmpty(messages)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 4;
                return didLoading(true);

              case 4:
                _context2.next = 6;
                return changeLanguage('th');

              case 6:
                _context2.next = 8;
                return didLoading(false);

              case 8:
                if (!_lodash2.default.isEmpty(user)) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 11;
                return didLoading(true);

              case 11:
                (0, _firebase.getUser)(function () {
                  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(user) {
                    var userData;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!user) {
                              _context.next = 7;
                              break;
                            }

                            _context.next = 3;
                            return (0, _firebase.getUserData)(user.uid);

                          case 3:
                            userData = _context.sent;

                            userLogin(userData);
                            _context.next = 8;
                            break;

                          case 7:
                            userLogin({});

                          case 8:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this2);
                  }));

                  return function (_x) {
                    return _ref3.apply(this, arguments);
                  };
                }());
                _context2.next = 14;
                return didLoading(false);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          url = _props2.url,
          messages = _props2.messages,
          user = _props2.user;

      var routes = [{
        path: '/',
        name: messages['Home']
      }, {
        path: '/about',
        name: messages['About']
      }, {
        path: '/news',
        name: messages['News']
      }, {
        path: '/user',
        name: messages['Teacher&Nanny']
      }, {
        path: '/service',
        name: messages['Services&Pricing']
      }, {
        path: '/contact',
        name: messages['Contact']
      }];
      return _react2.default.createElement(ID, { id: 'Navbar' }, _react2.default.createElement(_reactstrap.Navbar, { color: 'faded', light: true, toggleable: true }, _react2.default.createElement(_reactstrap.NavbarToggler, { right: true, onClick: function onClick() {
          return _this3.setState({ isOpen: !_this3.state.isOpen });
        } }), _react2.default.createElement(_reactstrap.NavbarBrand, { href: '/' }, 'Small World'), _react2.default.createElement(_reactstrap.Collapse, { isOpen: this.state.isOpen, navbar: true }, _react2.default.createElement(_reactstrap.Nav, { className: 'ml-auto', navbar: true }, _lodash2.default.map(routes, function (route) {
        return _react2.default.createElement(_reactstrap.NavItem, null, _react2.default.createElement('div', { className: 'nav-link', id: route.path === url.pathname && 'active' }, _react2.default.createElement(_link2.default, { prefetch: true, href: route.path }, _react2.default.createElement('a', null, route.name))));
      }), _lodash2.default.isEmpty(user) ? _react2.default.createElement(_reactstrap.NavItem, null, _react2.default.createElement(_Modal2.default, { btnText: 'SignIn&SignUp', title: 'Sign In' }, _react2.default.createElement(_FormLogin2.default, null), _react2.default.createElement('hr', null), _react2.default.createElement(_FormRegister2.default, null))) : _react2.default.createElement(_reactstrap.NavDropdown, { isOpen: this.state.dropdownOpen, toggle: function toggle() {
          return _this3.setState({ dropdownOpen: !_this3.state.dropdownOpen });
        } }, _react2.default.createElement(_reactstrap.DropdownToggle, { nav: true, caret: true }, 'Account'), _react2.default.createElement(_reactstrap.DropdownMenu, { className: 'dropdown-menu' }, _react2.default.createElement(_reactstrap.DropdownItem, { header: true }), _react2.default.createElement(_reactstrap.DropdownItem, null, _react2.default.createElement(_link2.default, { prefetch: true, href: '/profile/edit' }, 'Edit Profile')), _react2.default.createElement(_reactstrap.DropdownItem, { divider: true }), _react2.default.createElement(_reactstrap.DropdownItem, { onClick: this.handleLogout }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, 'Logout')))), _react2.default.createElement(_reactstrap.NavItem, null, _react2.default.createElement('div', { className: 'nav-link' }, _react2.default.createElement('a', { style: { cursor: 'pointer' }, onClick: function onClick() {
          return _this3.props.changeLanguage('th');
        } }, 'TH'))), _react2.default.createElement(_reactstrap.NavItem, null, _react2.default.createElement('div', { className: 'nav-link' }, _react2.default.createElement('a', { style: { cursor: 'pointer' }, onClick: function onClick() {
          return _this3.props.changeLanguage('en');
        } }, 'EN')))))));
    }
  }]);

  return MyNavbar;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages,
    user: state.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: (0, _redux.bindActionCreators)(_store.changeLanguage, dispatch),
    userLogin: (0, _redux.bindActionCreators)(_store.userLogin, dispatch),
    didLoading: (0, _redux.bindActionCreators)(_store.didLoading, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MyNavbar);


var ID = _styledComponents2.default.div(_templateObject, _styles.color.sub, _styles.color.textgray, _styles.color.sub, _styles.color.sub, _styles.color.sub, _styles.color.sub, _styles.color.sub, _styles.color.sub, _styles.color.sub, _styles.color.sub, _styles.color.sub, _styles.color.sub);