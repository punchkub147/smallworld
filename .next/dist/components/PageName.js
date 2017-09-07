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

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 20px 0;\n  border-bottom: 10px solid ', ';\n  background-color: ', ';\n  color:white;\n  p{\n    font-size: 40px;\n    font-weight: bold;\n    .border{\n      border-bottom: 5px solid ', ';\n    }\n  }\n'], ['\n  padding: 20px 0;\n  border-bottom: 10px solid ', ';\n  background-color: ', ';\n  color:white;\n  p{\n    font-size: 40px;\n    font-weight: bold;\n    .border{\n      border-bottom: 5px solid ', ';\n    }\n  }\n']);

var PageName = function (_Component) {
  (0, _inherits3.default)(PageName, _Component);

  function PageName() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PageName);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PageName.__proto__ || (0, _getPrototypeOf2.default)(PageName)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PageName, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(ID, null, _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement('p', null, _react2.default.createElement('span', { className: 'border' }, this.props.text))));
    }
  }]);

  return PageName;
}(_react.Component);

exports.default = PageName;


var ID = _styledComponents2.default.div(_templateObject, _styles.color.main2, _styles.color.main, _styles.color.sub);