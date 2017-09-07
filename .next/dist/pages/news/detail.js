'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _layouts = require('../../layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _PageName = require('../../components/PageName');

var _PageName2 = _interopRequireDefault(_PageName);

var _reactstrap = require('reactstrap');

var _firebase = require('../../api/firebase');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////// REDUX ///////
var NewsDetail = function (_Component) {
  (0, _inherits3.default)(NewsDetail, _Component);

  function NewsDetail() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewsDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewsDetail.__proto__ || (0, _getPrototypeOf2.default)(NewsDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      newData: {}
    }, _this.componentDidMount = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var id, newsData;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _index2.default.query.id;
              _context.next = 3;
              return (0, _firebase.getAt)('news', id);

            case 3:
              newsData = _context.sent;

              _this.setState({
                newsData: newsData
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewsDetail, [{
    key: 'render',
    value: function render() {
      var newsData = this.state.newsData;

      return _react2.default.createElement(_layouts2.default, { url: this.props.url }, _react2.default.createElement('div', { id: 'NewsDetail' }, _react2.default.createElement(_PageName2.default, { text: 'NEWS' }), _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement('br', null), _react2.default.createElement('div', { className: 'row justify-content-md-center' }, _react2.default.createElement(_reactstrap.Col, { xs: '12', sm: '12', md: '12' }, _react2.default.createElement(_reactstrap.Card, null, _react2.default.createElement(_reactstrap.CardImg, { className: 'image', style: { height: 300, 'object-fit': 'contain' }, top: true, width: '100%', src: _lodash2.default.get(newsData, 'image'), alt: 'Card image cap' }), _react2.default.createElement(_reactstrap.CardBlock, null, _react2.default.createElement(_reactstrap.CardSubtitle, { className: 'title' }, _lodash2.default.get(newsData, 'title')), _react2.default.createElement(_reactstrap.CardText, { className: 'detail' }, _lodash2.default.get(newsData, 'detail')), _react2.default.createElement(_reactstrap.CardText, null, (0, _moment2.default)(_lodash2.default.get(newsData, 'createAt')).format("MMM Do YY")))))))));
    }
  }]);

  return NewsDetail;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(NewsDetail);