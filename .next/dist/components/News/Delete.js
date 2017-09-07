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

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _firebase = require('../../api/firebase');

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REDUX
var NewsDelete = function (_Component) {
  (0, _inherits3.default)(NewsDelete, _Component);

  function NewsDelete() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewsDelete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewsDelete.__proto__ || (0, _getPrototypeOf2.default)(NewsDelete)).call.apply(_ref, [this].concat(args))), _this), _this.handleDelete = function () {
      (0, _firebase.deleteAt)('news', _this.props.id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewsDelete, [{
    key: 'render',
    value: function render() {
      var user = this.props.user;

      if (_lodash2.default.get(user, 'admin') !== true) return _react2.default.createElement('div', null);
      return _react2.default.createElement('div', { id: 'NewsDelete' }, _react2.default.createElement(_reactstrap.Button, { color: 'danger', onClick: this.handleDelete }, 'Delete'));
    }
  }]);

  return NewsDelete;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewsDelete);