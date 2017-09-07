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

var _regenerator = require('next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layouts = require('../layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _styles = require('../static/styles');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactstrap = require('reactstrap');

var _FormSearch = require('../components/FormSearch');

var _FormSearch2 = _interopRequireDefault(_FormSearch);

var _PageName = require('../components/PageName');

var _PageName2 = _interopRequireDefault(_PageName);

var _UserCard = require('../components/UserCard');

var _UserCard2 = _interopRequireDefault(_UserCard);

var _firebase = require('../api/firebase');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  box-sizing: border-box;\n\n  h1{\n    font-size: 60px;\n    color: white;\n    font-weight: bold;\n  }\n  .head{\n    background: ', ';\n  }\n'], ['\n  box-sizing: border-box;\n\n  h1{\n    font-size: 60px;\n    color: white;\n    font-weight: bold;\n  }\n  .head{\n    background: ', ';\n  }\n']);

//////// REDUX ///////


var queryUsers = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(users, query) {
    var q, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            q = {
              salary: query.salary ? query.salary : 'All',
              ageRange: query.ageRange ? query.ageRange : 'All',
              nationality: query.nationality ? query.nationality : 'All',
              location: query.location ? query.location : 'All',
              position: query.position ? query.position : 'All',
              workTime: query.workTime ? query.workTime : 'All'
            };
            _context.next = 3;
            return _lodash2.default.filter(users, function (user) {
              //salary
              var passSalary = false;
              if (q.salary === 'All') passSalary = true;
              if (q.salary === '0 - 10,000') if (_lodash2.default.get(user, 'salary.price') >= 0 && _lodash2.default.get(user, 'salary.price') <= 10000) passSalary = true;
              if (q.salary === '10,000 - 20,000') if (_lodash2.default.get(user, 'salary.price') >= 10000 && _lodash2.default.get(user, 'salary.price') <= 20000) passSalary = true;
              if (q.salary === '20,000 - 30,000') if (_lodash2.default.get(user, 'salary.price') >= 20000 && _lodash2.default.get(user, 'salary.price') <= 30000) passSalary = true;
              if (q.salary === '30,000+') if (_lodash2.default.get(user, 'salary.price') >= 30000) passSalary = true;

              // ageRange 'All','20 - 29','30 - 39','40 - 49','50+'
              var passAge = false;
              if (q.ageRange === 'All') passAge = true;
              if (q.ageRange === '20 - 29') if (_lodash2.default.get(user, 'detail.age') >= 20 && _lodash2.default.get(user, 'detail.age') <= 29) passAge = true;
              if (q.ageRange === '30 - 39') if (_lodash2.default.get(user, 'detail.age') >= 30 && _lodash2.default.get(user, 'detail.age') <= 39) passAge = true;
              if (q.ageRange === '40 - 49') if (_lodash2.default.get(user, 'detail.age') >= 40 && _lodash2.default.get(user, 'detail.age') <= 49) passAge = true;
              if (q.ageRange === '50+') if (_lodash2.default.get(user, 'detail.age') >= 50) passAge = true;

              // nationality 'All','Myanmar','Thai','Philippine','Laos','Cambodia'
              var passNationality = false;
              if (q.nationality === 'All') passNationality = true;
              if (q.nationality === _lodash2.default.get(user, 'detail.nationality')) passNationality = true;

              // location 'All','Bangkok','Nonthaburi','Don Muang','Pattaya','Chiang Mai','Hua Hin','Phuket','Ko Samui'
              var passLocation = false;
              if (q.location === 'All') passLocation = true;
              if (q.location === _lodash2.default.get(user, 'detail.location')) passLocation = true;

              // position 'All','Maid&Nanny','Nursery','Teacher@Home'
              var passPosition = false;
              if (q.position === 'All') passPosition = true;
              if (q.position === 'Maid&Nanny') if (_lodash2.default.get(user, 'job.nanny') === true) passPosition = true;
              if (q.position === 'Nursery') if (_lodash2.default.get(user, 'job.nanny') === true) passPosition = true;
              if (q.position === 'Teacher@Home') if (_lodash2.default.get(user, 'job.teacher') === true) passPosition = true;

              // workTime 'All Time','Full Time','Part Time'
              var passWorkTime = false;
              if (q.workTime === 'All') passWorkTime = true;
              if (q.workTime === _lodash2.default.get(user, 'job.workTime')) passWorkTime = true;

              if (passSalary === true && passAge === true && passNationality === true && passLocation === true && passPosition === true && passWorkTime === true) return user;
            });

          case 3:
            result = _context.sent;
            return _context.abrupt('return', result);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function queryUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var User = function (_Component) {
  (0, _inherits3.default)(User, _Component);

  function User() {
    var _ref2,
        _this3 = this;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = User.__proto__ || (0, _getPrototypeOf2.default)(User)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
      user: {},
      query: {},
      resultUser: {}
    }, _this2.componentDidMount = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var query, users;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = _this2.props.url.query;

              _this2.setState({
                query: query
              });
              _context2.next = 4;
              return (0, _firebase.getData)('users');

            case 4:
              users = _context2.sent;

              _this2.setState({
                users: users
              });

              _context2.t0 = _this2;
              _context2.next = 9;
              return queryUsers(users, query);

            case 9:
              _context2.t1 = _context2.sent;
              _context2.t2 = {
                resultUser: _context2.t1
              };

              _context2.t0.setState.call(_context2.t0, _context2.t2);

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this3);
    })), _this2.componentWillReceiveProps = function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(nextProps) {
        var _nextProps$url, pathname, query, users;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _nextProps$url = nextProps.url, pathname = _nextProps$url.pathname, query = _nextProps$url.query;
                users = _this2.state.users;
                _context3.t0 = _this2;
                _context3.t1 = query;
                _context3.next = 6;
                return queryUsers(users, query);

              case 6:
                _context3.t2 = _context3.sent;
                _context3.t3 = {
                  query: _context3.t1,
                  resultUser: _context3.t2
                };

                _context3.t0.setState.call(_context3.t0, _context3.t3);

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(User, [{
    key: 'render',
    value: function render() {
      var resultUser = this.state.resultUser;

      return _react2.default.createElement(_layouts2.default, { url: this.props.url }, _react2.default.createElement(ID, null, _react2.default.createElement(_PageName2.default, { text: 'SEARCH' }), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement(_FormSearch2.default, null), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Row, null, _lodash2.default.map(resultUser, function (data) {
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', sm: '6', md: '4', lg: '3' }, _react2.default.createElement(_UserCard2.default, { user: data }));
      })))));
    }
  }]);

  return User;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(User);


var ID = _styledComponents2.default.div(_templateObject, _styles.color.main);