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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../static/styles');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactstrap = require('reactstrap');

var _FormSearch = require('./FormSearch');

var _FormSearch2 = _interopRequireDefault(_FormSearch);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;  \n  background: ', ';\n  // background-image: url(\'../img/bg.jpg\');\n  // background-attachment: fixed;\n  // background-position: center;\n  // background-repeat: no-repeat;\n  // background-size: cover;\n  padding-bottom: 30px;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n  .jumbotron{\n    background-color: none;\n    text-align: right;\n  }\n  .border{\n    border-bottom: 5px solid ', ';\n  }\n  h1{\n    color: white;\n    font-weight: bold;\n  }\n  h2{\n    color: white;\n    font-weight: bold;\n  }\n  h3{\n    font-size: 18px;\n  }\n  p{\n    font-size: 18px;\n    color: #333;\n  }\n\n  .logo {\n    position: relative;\n    z-index: 3;\n    width: 90%;\n    margin: 0 auto;\n    text-align: center;\n    padding-top: 50px;\n    img{\n      width: 100%;\n    }\n  }\n  @media (max-width: 576px) {\n    h1{\n      font-size: 40px;\n      text-align: center;\n    }\n    h2{\n      font-size: 35px;\n      text-align: center;\n    }\n    .jumbotron{\n      text-align: center;\n    }\n  }\n  @media (min-width: 768px) {\n    .jumbotron{\n      padding: 0 50px;\n    }\n    padding: 50px;\n    h1{\n      font-size: 100px;\n      text-align: right;\n    }\n    h2{\n      width: auto;\n      font-size: 60px;\n      text-align: right;\n    }\n    h3{\n      text-align: right;\n    }\n    p{\n      text-align: right;\n    }\n    .logo{\n      width: 100%;\n      padding-top: 0px;\n    }\n    .imageBanner {\n      background-image: url(\'../static/img/imageBanner.png\');\n      position: absolute;\n      z-index: 0;\n      width: 100%;\n      height: 100%;\n      background-repeat: no-repeat;\n      background-position: 100px 0;\n      background-size: 500px auto;\n    }\n  }\n\n\n'], ['\n  width: 100%;  \n  background: ', ';\n  // background-image: url(\'../img/bg.jpg\');\n  // background-attachment: fixed;\n  // background-position: center;\n  // background-repeat: no-repeat;\n  // background-size: cover;\n  padding-bottom: 30px;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n  .jumbotron{\n    background-color: none;\n    text-align: right;\n  }\n  .border{\n    border-bottom: 5px solid ', ';\n  }\n  h1{\n    color: white;\n    font-weight: bold;\n  }\n  h2{\n    color: white;\n    font-weight: bold;\n  }\n  h3{\n    font-size: 18px;\n  }\n  p{\n    font-size: 18px;\n    color: #333;\n  }\n\n  .logo {\n    position: relative;\n    z-index: 3;\n    width: 90%;\n    margin: 0 auto;\n    text-align: center;\n    padding-top: 50px;\n    img{\n      width: 100%;\n    }\n  }\n  @media (max-width: 576px) {\n    h1{\n      font-size: 40px;\n      text-align: center;\n    }\n    h2{\n      font-size: 35px;\n      text-align: center;\n    }\n    .jumbotron{\n      text-align: center;\n    }\n  }\n  @media (min-width: 768px) {\n    .jumbotron{\n      padding: 0 50px;\n    }\n    padding: 50px;\n    h1{\n      font-size: 100px;\n      text-align: right;\n    }\n    h2{\n      width: auto;\n      font-size: 60px;\n      text-align: right;\n    }\n    h3{\n      text-align: right;\n    }\n    p{\n      text-align: right;\n    }\n    .logo{\n      width: 100%;\n      padding-top: 0px;\n    }\n    .imageBanner {\n      background-image: url(\'../static/img/imageBanner.png\');\n      position: absolute;\n      z-index: 0;\n      width: 100%;\n      height: 100%;\n      background-repeat: no-repeat;\n      background-position: 100px 0;\n      background-size: 500px auto;\n    }\n  }\n\n\n']);
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
      var messages = this.props.messages;

      return _react2.default.createElement(ID, { id: '' }, _react2.default.createElement(_reactstrap.Jumbotron, { style: { background: 'none' } }, _react2.default.createElement('h1', { className: 'display-3' }, 'Small World'), _react2.default.createElement('h2', { className: 'display-3' }, _react2.default.createElement('span', { className: 'border' }, 'Service Center')), _react2.default.createElement('br', null), _react2.default.createElement('p', { className: 'lead' }, messages.bannerSub), _react2.default.createElement('p', null, '\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E1E\u0E27\u0E01\u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E17\u0E31\u0E01\u0E29\u0E30\u0E14\u0E49\u0E32\u0E19\u0E20\u0E32\u0E29\u0E32\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E31\u0E07\u0E04\u0E21\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E25\u0E39\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E \u0E14\u0E49\u0E27\u0E22\u0E23\u0E32\u0E04\u0E32\u0E17\u0E35\u0E48\u0E04\u0E38\u0E49\u0E21\u0E04\u0E48\u0E32\u0E01\u0E31\u0E1A\u0E2D\u0E19\u0E32\u0E04\u0E15\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E25\u0E39\u0E01\u0E46\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13'), _react2.default.createElement(_FormSearch2.default, null)));
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


var ID = _styledComponents2.default.div(_templateObject, _styles.color.main, _styles.color.sub);