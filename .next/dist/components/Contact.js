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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactstrap = require('reactstrap');

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REDUX
var Banner = function (_Component) {
  (0, _inherits3.default)(Banner, _Component);

  function Banner() {
    (0, _classCallCheck3.default)(this, Banner);

    return (0, _possibleConstructorReturn3.default)(this, (Banner.__proto__ || (0, _getPrototypeOf2.default)(Banner)).apply(this, arguments));
  }

  (0, _createClass3.default)(Banner, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var messages = this.props.messages;

      console.log('messages', messages);
      return _react2.default.createElement('div', { id: 'Contact' }, _react2.default.createElement(_reactstrap.Row, { className: 'head', style: { margin: 0 } }, _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4' }, _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'icon' }, _react2.default.createElement('i', { className: 'fa fa-clock-o fa-5x', 'aria-hidden': 'true' }))), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'text' }, 'Open Time 10:00-18:00')))), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4' }, _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'icon' }, _react2.default.createElement('i', { className: 'fa fa-home fa-5x', 'aria-hidden': 'true' }))), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'text' }, 'Address')))), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4' }, _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'icon' }, _react2.default.createElement('i', { className: 'fa fa-envelope fa-5x', 'aria-hidden': 'true' }))), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'text' }, 'Email'))))), _react2.default.createElement('br', null), _react2.default.createElement('br', null), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement('h1', null, 'Contact Us'), _react2.default.createElement('hr', null), _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: '12', sm: '12', md: '7' }, _react2.default.createElement(_reactstrap.Form, { onSubmit: this.handleContact }, _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: 'Your name', onChange: function onChange(e) {
          return _this2.setState({ displayName: e.target.value });
        } })), _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'email', placeholder: 'Your E-mail', onChange: function onChange(e) {
          return _this2.setState({ email: e.target.value });
        } })), _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: 'Subject', onChange: function onChange(e) {
          return _this2.setState({ subject: e.target.value });
        } })), _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Input, { type: 'textarea', placeholder: 'Message',
        style: { height: '150px' },
        onChange: function onChange(e) {
          return _this2.setState({ message: e.target.value });
        } })), _react2.default.createElement(_reactstrap.Button, { color: 'primary', size: 'lg', block: true, onSubmit: this.handleContact }, 'Contact')), _react2.default.createElement('br', null)), _react2.default.createElement(_reactstrap.Col, { xs: '12', sm: '12', md: '5' }, _react2.default.createElement('h3', null, 'Before Sending a message'), _react2.default.createElement('p', null, 'qweqweqwewqewqewqqwewqe qweqweqweqweqweqweqwe qe qwe qwe qwe qwqeqwe'), _react2.default.createElement('br', null), _react2.default.createElement('br', null), _react2.default.createElement('br', null), _react2.default.createElement('p', null, 'qweqweqwewqewqewqee'))), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, 'Map'), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: '12' }, _react2.default.createElement(_googleMapReact2.default, { style: { 'min-height': '300px' },
        defaultCenter: { lat: 59.938043, lng: 30.337157 },
        defaultZoom: 7 }, _react2.default.createElement('div', { lat: 59.938043, lng: 30.337157 }))))));
    }
  }]);

  return Banner;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Banner);