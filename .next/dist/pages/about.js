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

var _PageName = require('../components/PageName');

var _PageName2 = _interopRequireDefault(_PageName);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = require('../static/styles');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animate = require('../static/styles/animate');

var _reactstrap = require('reactstrap');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .what{\n    margin-top: 50px;\n    margin-bottom: 50px;\n    \n    .image{\n      transform: rotate(-6deg);\n      animation: fadeIn 0.5s ease-in 0s 1 alternate;\n      \n      img{\n        border-radius: 10px;\n        width: 100%;\n      }\n    }\n    .content{\n      margin-top: 50px;\n      animation: fadeInUp 0.8s ease-in 0s 1 alternate;\n\n      .title{\n        font-size: 32px;\n        font-weight: bold;\n      }\n      .border{\n        border-bottom: 5px solid ', ';\n      }\n      .detail{\n        font-size: 16px;\n      }\n    }\n  }\n\n  .why{\n    .content{\n      animation: fadeInUp 1.5s ease-in 0s 1 alternate;\n\n      .title{\n        font-weight: bold;\n        font-size: 32px;\n      }\n      .border{\n        border-bottom: 5px solid ', ';\n      }\n      .detail{\n        font-size: 16px;\n      }\n    }\n  }\n  ', '\n  ', '\n'], ['\n  .what{\n    margin-top: 50px;\n    margin-bottom: 50px;\n    \n    .image{\n      transform: rotate(-6deg);\n      animation: fadeIn 0.5s ease-in 0s 1 alternate;\n      \n      img{\n        border-radius: 10px;\n        width: 100%;\n      }\n    }\n    .content{\n      margin-top: 50px;\n      animation: fadeInUp 0.8s ease-in 0s 1 alternate;\n\n      .title{\n        font-size: 32px;\n        font-weight: bold;\n      }\n      .border{\n        border-bottom: 5px solid ', ';\n      }\n      .detail{\n        font-size: 16px;\n      }\n    }\n  }\n\n  .why{\n    .content{\n      animation: fadeInUp 1.5s ease-in 0s 1 alternate;\n\n      .title{\n        font-weight: bold;\n        font-size: 32px;\n      }\n      .border{\n        border-bottom: 5px solid ', ';\n      }\n      .detail{\n        font-size: 16px;\n      }\n    }\n  }\n  ', '\n  ', '\n']);

//////// REDUX ///////


var About = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About() {
    (0, _classCallCheck3.default)(this, About);

    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
  }

  (0, _createClass3.default)(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layouts2.default, { url: this.props.url }, _react2.default.createElement(ID, null, _react2.default.createElement(_PageName2.default, { text: 'ABOUT US' }), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement(_reactstrap.Row, { className: 'what' }, _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'image' }, _react2.default.createElement('img', { src: 'http://ugc-01.cafemomstatic.com/gen/constrain/500/500/80/2016/08/30/22/cg/4z/ponvjwwm8g.jpg' }))), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('div', { className: 'title' }, _react2.default.createElement('span', { className: 'border' }, 'What is Small World ?')), _react2.default.createElement('br', null), _react2.default.createElement('div', { className: 'detail' }, '\u0E1E\u0E27\u0E01\u0E40\u0E23\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E2B\u0E32\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07 , \u0E04\u0E38\u0E13\u0E04\u0E23\u0E39\u0E17\u0E35\u0E48\u0E1A\u0E49\u0E32\u0E19 \u0E41\u0E25\u0E30 \u0E40\u0E19\u0E34\u0E2A\u0E40\u0E0B\u0E2D\u0E23\u0E35\u0E48 \u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E32\u0E27\u0E1F\u0E34\u0E25\u0E34\u0E1B\u0E34\u0E19\u0E2A\u0E4C \u0E42\u0E14\u0E22\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32\u0E44\u0E14\u0E49\u0E14\u0E49\u0E27\u0E22\u0E15\u0E31\u0E27\u0E04\u0E38\u0E13\u0E40\u0E2D\u0E07')))), _react2.default.createElement(_reactstrap.Row, { className: 'why' }, _react2.default.createElement(_reactstrap.Col, { xs: '12' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('div', { className: 'title' }, _react2.default.createElement('span', { className: 'border' }, 'Why Small World ?')), _react2.default.createElement('br', null), _react2.default.createElement('div', { className: 'detail' }, '\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E1E\u0E27\u0E01\u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E17\u0E31\u0E01\u0E29\u0E30\u0E14\u0E49\u0E32\u0E19\u0E20\u0E32\u0E29\u0E32\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E31\u0E07\u0E04\u0E21\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E25\u0E39\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E \u0E14\u0E49\u0E27\u0E22\u0E23\u0E32\u0E04\u0E32\u0E17\u0E35\u0E48\u0E04\u0E38\u0E49\u0E21\u0E04\u0E48\u0E32\u0E01\u0E31\u0E1A\u0E2D\u0E19\u0E32\u0E04\u0E15\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E25\u0E39\u0E01\u0E46\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13')))))));
    }
  }]);

  return About;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(About);


var ID = _styledComponents2.default.div(_templateObject, _styles.color.main, _styles.color.main, _animate.animate.fadeInUp, _animate.animate.fadeIn);