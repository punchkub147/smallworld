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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'Pricing' }, _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement('h1', null, 'SERVICE & PRICING'), _react2.default.createElement('br', null), _react2.default.createElement('h3', null, 'Service & Pricing'), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4' }, _react2.default.createElement(_reactstrap.Card, { className: 'PricingCard' }, _react2.default.createElement('div', { className: 'title' }, 'Maid'), _react2.default.createElement(_reactstrap.CardBlock, null, _react2.default.createElement('div', { className: 'detail' }, _react2.default.createElement('p', null, '- Cleaning'), _react2.default.createElement('p', null, '- Cooking'), _react2.default.createElement('p', null, '- sadasdad'), _react2.default.createElement('p', null, '- asdasdad')), _react2.default.createElement('hr', null), _react2.default.createElement('div', { className: 'price' }, 'Start 16,000\u0E3F per month'), _react2.default.createElement('hr', null), _react2.default.createElement(_reactstrap.Button, { color: 'primary' }, 'Button')))), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4' }, _react2.default.createElement(_reactstrap.Card, { className: 'PricingCard' }, _react2.default.createElement('div', { className: 'title' }, 'Nursery'), _react2.default.createElement(_reactstrap.CardBlock, null, _react2.default.createElement('div', { className: 'detail' }, _react2.default.createElement('p', null, '- Baby Care'), _react2.default.createElement('p', null, '- Cooking'), _react2.default.createElement('p', null, '- sadasdad'), _react2.default.createElement('p', null, '- asdasdad')), _react2.default.createElement('hr', null), _react2.default.createElement('div', { className: 'price' }, 'Start 16,000\u0E3F per month'), _react2.default.createElement('hr', null), _react2.default.createElement(_reactstrap.Button, { color: 'primary' }, 'Button')))), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4' }, _react2.default.createElement(_reactstrap.Card, { className: 'PricingCard' }, _react2.default.createElement('div', { className: 'title' }, 'Teacher@Home'), _react2.default.createElement(_reactstrap.CardBlock, null, _react2.default.createElement('div', { className: 'detail' }, _react2.default.createElement('p', null, '- Teach Enlish'), _react2.default.createElement('p', null, '- Cooking'), _react2.default.createElement('p', null, '- sadasdad'), _react2.default.createElement('p', null, '- asdasdad')), _react2.default.createElement('hr', null), _react2.default.createElement('div', { className: 'price' }, 'Start 16,000\u0E3F per month'), _react2.default.createElement('hr', null), _react2.default.createElement(_reactstrap.Button, { color: 'primary' }, 'Button')))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;