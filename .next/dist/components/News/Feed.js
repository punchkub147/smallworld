'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next\\node_modules\\babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _Thumbnail = require('./Thumbnail');

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _reactstrap = require('reactstrap');

var _firebase = require('../../api/firebase');

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REDUX
var NewsFeed = function (_Component) {
  (0, _inherits3.default)(NewsFeed, _Component);

  function NewsFeed() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewsFeed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewsFeed.__proto__ || (0, _getPrototypeOf2.default)(NewsFeed)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      news: {}
    }, _this.componentDidMount = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var news;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _firebase.getData)('news');

            case 2:
              news = _context.sent;

              _this.setState({
                news: news
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewsFeed, [{
    key: 'render',
    value: function render() {
      var news = this.state.news;

      var threeNews = _lodash2.default.take(_lodash2.default.reverse(_lodash2.default.map(news, function (data, key) {
        return (0, _extends3.default)({}, data, {
          key: key
        });
      }), 'createAt'), 3);
      return _react2.default.createElement('div', { id: 'NewsFeed' }, _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement('br', null), _react2.default.createElement('br', null), _react2.default.createElement('h4', null, 'FEATURE POST'), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Row, null, _lodash2.default.map(threeNews, function (data) {
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4', lg: '4' }, _react2.default.createElement(_Thumbnail2.default, { data: data, id: data.key }));
      })), _react2.default.createElement('br', null), _react2.default.createElement(_link2.default, { href: '/news' }, _react2.default.createElement('p', { style: { cursor: 'pointer', textAlign: 'center' } }, 'View More'))));
    }
  }]);

  return NewsFeed;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewsFeed);