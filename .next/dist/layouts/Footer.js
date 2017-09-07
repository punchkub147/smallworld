'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _FormSearch = require('../components/FormSearch');

var _FormSearch2 = _interopRequireDefault(_FormSearch);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyFooter = function (_Component) {
  (0, _inherits3.default)(MyFooter, _Component);

  function MyFooter() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MyFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyFooter.__proto__ || (0, _getPrototypeOf2.default)(MyFooter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      messages: {}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MyFooter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var messages = this.props.messages;

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
      return _react2.default.createElement('div', { id: 'Footer' }, _react2.default.createElement('div', { className: 'connect' }, _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement('div', { className: 'text' }, 'GET START'), _react2.default.createElement(_FormSearch2.default, null))), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4' }, _react2.default.createElement('h5', null, 'About Total'), _react2.default.createElement('p', null, 'Small World Service Center'), _react2.default.createElement('p', null, 'Maid&Nancy'), _react2.default.createElement('p', null, 'Nursery'), _react2.default.createElement('p', null, 'Nursery'), _react2.default.createElement('p', null, 'Teacher@Home'), _react2.default.createElement(_reactstrap.Button, { color: 'primary' }, 'VIEW'), _react2.default.createElement('br', null), _react2.default.createElement('br', null)), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4' }, _react2.default.createElement('h5', null, 'Quick Links'), _lodash2.default.map(routes, function (route) {
        return _react2.default.createElement(_link2.default, { perfect: true, href: route.path }, _react2.default.createElement('a', null, route.name));
      }), _react2.default.createElement('a', { style: { cursor: 'pointer', float: 'left', 'margin-right': '10px' }, onClick: function onClick() {
          return _this2.props.changeLanguage('th');
        } }, 'TH'), _react2.default.createElement('a', { style: { cursor: 'pointer', float: 'left' }, onClick: function onClick() {
          return _this2.props.changeLanguage('en');
        } }, 'EN'), _react2.default.createElement('br', null)), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4' }, _react2.default.createElement('h5', null, 'Get Social'), _react2.default.createElement('p', null, 'Contact'), _react2.default.createElement('p', null, 'Address: qwewqeqweqeqwe'), _react2.default.createElement('p', null, 'Email: qweqweqweqweq'), _react2.default.createElement('p', null, 'Tel: qweqweqwe'), _react2.default.createElement('br', null))))));
    }
  }]);

  return MyFooter;
}(_react.Component);
// REDUX


var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: (0, _redux.bindActionCreators)(_store.changeLanguage, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MyFooter);