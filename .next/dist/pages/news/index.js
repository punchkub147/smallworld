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

var _layouts = require('../../layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _PageName = require('../../components/PageName');

var _PageName2 = _interopRequireDefault(_PageName);

var _reactstrap = require('reactstrap');

var _BigThumbnail = require('../../components/News/BigThumbnail');

var _BigThumbnail2 = _interopRequireDefault(_BigThumbnail);

var _Add = require('../../components/News/Add');

var _Add2 = _interopRequireDefault(_Add);

var _firebase = require('../../api/firebase');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////// REDUX ///////
var News = function (_Component) {
  (0, _inherits3.default)(News, _Component);

  function News() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, News);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = News.__proto__ || (0, _getPrototypeOf2.default)(News)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      user: {},
      news: {}
    }, _this.componentDidMount = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _firebase.getRealTimeData)('news', function (news) {
                return _this.setState({
                  news: news
                });
              });
              (0, _firebase.getUser)(function (user) {
                _this.setState({
                  user: user
                });
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(News, [{
    key: 'render',
    value: function render() {
      var news = this.state.news;

      var tenNews = _lodash2.default.take(_lodash2.default.reverse(_lodash2.default.map(news, function (data, key) {
        return (0, _extends3.default)({}, data, {
          key: key
        });
      }), 'createAt'), 20);
      return _react2.default.createElement(_layouts2.default, { url: this.props.url }, _react2.default.createElement('div', { id: 'News' }, _react2.default.createElement(_PageName2.default, { text: 'NEWS' }), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement('div', null, _react2.default.createElement(_Add2.default, null), _react2.default.createElement('br', null)), _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '8' }, _lodash2.default.map(tenNews, function (data) {
        return _react2.default.createElement(_BigThumbnail2.default, { data: data, id: data.key });
      })), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4' }, _react2.default.createElement('div', { className: 'hidden-sm-down', style: { width: '100%', padding: '30px', background: '#b6d379', textAlign: 'center', fontSize: '60px', color: 'white' } }, _react2.default.createElement('p', null, 'S'), _react2.default.createElement('p', null, 'M'), _react2.default.createElement('p', null, 'A'), _react2.default.createElement('p', null, 'L'), _react2.default.createElement('p', null, 'L'), _react2.default.createElement('p', null, 'W'), _react2.default.createElement('p', null, 'O'), _react2.default.createElement('p', null, 'R'), _react2.default.createElement('p', null, 'L'), _react2.default.createElement('p', null, 'D')))))));
    }
  }]);

  return News;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(News);