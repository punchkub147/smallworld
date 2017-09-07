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

var _layouts = require('../layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _PageName = require('../components/PageName');

var _PageName2 = _interopRequireDefault(_PageName);

var _Contact = require('../components/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _sendEmail = require('../api/sendEmail');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////// REDUX ///////
var Contact = function (_Component) {
  (0, _inherits3.default)(Contact, _Component);

  function Contact() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Contact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      displayName: '',
      email: '',
      subject: '',
      message: ''
    }, _this.handleContact = function (e) {
      e.preventDefault();
      (0, _sendEmail.contact)();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Contact, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layouts2.default, { url: this.props.url }, _react2.default.createElement(_PageName2.default, { text: 'CONTACT US' }), _react2.default.createElement(_Contact2.default, null));
    }
  }]);

  return Contact;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(Contact);