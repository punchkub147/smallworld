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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactstrap = require('reactstrap');

var _Delete = require('./Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REDUX
var NewsBigThumbnail = function (_Component) {
  (0, _inherits3.default)(NewsBigThumbnail, _Component);

  function NewsBigThumbnail() {
    (0, _classCallCheck3.default)(this, NewsBigThumbnail);

    return (0, _possibleConstructorReturn3.default)(this, (NewsBigThumbnail.__proto__ || (0, _getPrototypeOf2.default)(NewsBigThumbnail)).apply(this, arguments));
  }

  (0, _createClass3.default)(NewsBigThumbnail, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          id = _props.id;

      return _react2.default.createElement('div', { id: 'NewsBigThumbnail' }, _react2.default.createElement(_reactstrap.Card, null, _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { sm: '6' }, _react2.default.createElement(_link2.default, { perfect: true, href: '/news/detail?id=' + id }, _react2.default.createElement(_reactstrap.CardImg, { className: 'image', top: true, width: '100%', src: data.image, alt: 'Card image cap' }))), _react2.default.createElement(_reactstrap.Col, { sm: '6' }, _react2.default.createElement(_reactstrap.CardBlock, null, _react2.default.createElement(_reactstrap.CardTitle, { className: 'title' }, data.title), _react2.default.createElement(_reactstrap.CardSubtitle, { className: 'detail' }, data.detail), _react2.default.createElement(_reactstrap.CardText, null, (0, _moment2.default)(data.createAt).format("MMM Do YY")), _react2.default.createElement(_Delete2.default, { id: id }))))), _react2.default.createElement('br', null));
    }
  }]);

  return NewsBigThumbnail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    //messages: state.messages
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewsBigThumbnail);