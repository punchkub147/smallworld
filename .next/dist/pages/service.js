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

var _layouts = require('../layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _styles = require('../static/styles');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _PageName = require('../components/PageName');

var _PageName2 = _interopRequireDefault(_PageName);

var _Pricing = require('../components/Pricing');

var _Pricing2 = _interopRequireDefault(_Pricing);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\n'], ['\n\n']);

//////// REDUX ///////


var Service = function (_Component) {
  (0, _inherits3.default)(Service, _Component);

  function Service() {
    (0, _classCallCheck3.default)(this, Service);

    return (0, _possibleConstructorReturn3.default)(this, (Service.__proto__ || (0, _getPrototypeOf2.default)(Service)).apply(this, arguments));
  }

  (0, _createClass3.default)(Service, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layouts2.default, { url: this.props.url }, _react2.default.createElement(ID, null, _react2.default.createElement(_PageName2.default, { text: 'OUR SERVICE' }), _react2.default.createElement('br', null), _react2.default.createElement(_Pricing2.default, null)));
    }
  }]);

  return Service;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(Service);


var ID = _styledComponents2.default.div(_templateObject);