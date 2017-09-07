'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('next\\node_modules\\babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _animate = require('../static/styles/animate');

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .app-content{\n    animation: fadeIn 0.2s ease-in 0s 1 alternate;\n  }\n  ', '\n'], ['\n  .app-content{\n    animation: fadeIn 0.2s ease-in 0s 1 alternate;\n  }\n  ', '\n']);
// REDUX


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      var loading = this.props.loading;

      return _react2.default.createElement(ID, { id: 'App' }, _react2.default.createElement(_Head2.default, null), _react2.default.createElement(_Navbar2.default, { url: this.props.url }), loading ? _react2.default.createElement('div', null, 'Loading') : _react2.default.createElement('div', { className: 'app-content' }, this.props.children, _react2.default.createElement(_Footer2.default, null)));
    }
  }]);

  return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.loading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);


var ID = _styledComponents2.default.div(_templateObject, _animate.animate.fadeIn);