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

var _reactstrap = require('reactstrap');

var _Banner = require('../components/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _FormRegister = require('../components/FormRegister');

var _FormRegister2 = _interopRequireDefault(_FormRegister);

var _Carousel = require('../components/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Service = require('../components/Service');

var _Service2 = _interopRequireDefault(_Service);

var _Feed = require('../components/News/Feed');

var _Feed2 = _interopRequireDefault(_Feed);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .content{\n    margin: 0;\n    padding: 30px 10px;\n    box-sizing: border-box;\n    background: ', ';\n\n    .register{\n      padding: 20px;\n      background: white;\n    }\n  }\n'], ['\n  .content{\n    margin: 0;\n    padding: 30px 10px;\n    box-sizing: border-box;\n    background: ', ';\n\n    .register{\n      padding: 20px;\n      background: white;\n    }\n  }\n']);

//////// REDUX ///////


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layouts2.default, { url: this.props.url }, _react2.default.createElement(ID, null, _react2.default.createElement(_Banner2.default, null), _react2.default.createElement(_reactstrap.Row, { className: 'content' }, _react2.default.createElement(_reactstrap.Col, { sm: '12', md: '4' }, _react2.default.createElement('div', { className: 'register' }, _react2.default.createElement(_FormRegister2.default, null))), _react2.default.createElement(_reactstrap.Col, { sm: '12', md: '8' }, _react2.default.createElement(_Carousel2.default, null))), _react2.default.createElement(_Feed2.default, null), _react2.default.createElement(_Service2.default, null)));
    }
  }]);

  return Home;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(Home);


var ID = _styledComponents2.default.div(_templateObject, _styles.color.main);