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

var _layouts = require('../../layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactstrap = require('reactstrap');

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _firebase = require('../../api/firebase');

var _ProfileDetail = require('../../components/ProfileDetail');

var _ProfileDetail2 = _interopRequireDefault(_ProfileDetail);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////// REDUX ///////
var ProfileView = function (_Component) {
  (0, _inherits3.default)(ProfileView, _Component);

  function ProfileView() {
    var _ref,
        _this3 = this;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, ProfileView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = ProfileView.__proto__ || (0, _getPrototypeOf2.default)(ProfileView)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
      user: {},
      userData: {},
      modalEdited: false,
      editOn: 'Profile',
      imageProfile: ''
    }, _this2.componentDidMount = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.fetchGetUser();

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this3);
    })), _this2.fetchGetUser = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var uid, userData;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              uid = _this2.props.url.query.uid;
              _context2.next = 3;
              return (0, _firebase.getUserData)(uid);

            case 3:
              userData = _context2.sent;

              _this2.setState({
                userData: userData,
                imageProfile: userData.imageUrl
              });

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this3);
    })), _this2.handleLogout = function () {
      (0, _firebase.logout)(function (error) {
        console.log(error);
      });
      _index2.default.push({
        pathname: '/'
      });
    }, _this2.handleChangeProfileImage = function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(e) {
        var _this, user, file, reader;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this = _this2;
                user = _this2.state.user;
                file = e.target.files[0];
                reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onload = function () {
                  _this.setState({
                    imageProfile: reader.result
                  });
                };

                reader.onerror = function (error) {
                  console.log('Error: ', error);
                };
                _context3.next = 9;
                return (0, _firebase.changeProfileImage)(file, user.uid);

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(ProfileView, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state,
          user = _state.user,
          userData = _state.userData,
          userEdit = _state.userEdit,
          editOn = _state.editOn,
          imageProfile = _state.imageProfile;
      // const selectAge = ['All','20-29','30-39','40-49','50+']
      // const selectNation = ['Myanmar','Thai','Philippine','Laos','Cambodia']
      // const selectLocation = ['Bangkok','Nonthaburi','Don Muang','Pattaya','Chiang Mai','Hua Hin','Phuket','Ko Samui']
      // const selectPosition = ['Maid&Nanny','Nursery','Teacher@Home']
      // const selectworkTime = ['Full Time','Part Time']

      console.log(this.state.imageFile);

      return _react2.default.createElement(_layouts2.default, { url: this.props.url }, _react2.default.createElement('div', { id: 'Profile' }, _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: '12', sm: '6', md: '4', lg: '3' }, _react2.default.createElement(_reactstrap.Card, { className: 'card-user' }, _react2.default.createElement(_reactstrap.CardImg, { className: 'image', top: true, width: '100%',
        src: !_lodash2.default.isEmpty(imageProfile) ? imageProfile : 'https://cdn1.iconfinder.com/data/icons/IconsLandVistaPeopleIconsDemo/256/Person_Undefined_Female_Dark.png', alt: 'Card image cap' })), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.ListGroup, null, _react2.default.createElement(_reactstrap.ListGroupItem, { id: editOn === 'Profile' ? 'active' : '', onClick: function onClick() {
          return _this4.setState({ editOn: 'Profile' });
        }, tag: 'button', action: true }, 'Profile'), _react2.default.createElement(_reactstrap.ListGroupItem, { id: editOn === 'Nanny' ? 'active' : '', onClick: function onClick() {
          return _this4.setState({ editOn: 'Nanny' });
        }, tag: 'button', action: true }, 'Nanny'), _react2.default.createElement(_reactstrap.ListGroupItem, { id: editOn === 'Teacher' ? 'active' : '', onClick: function onClick() {
          return _this4.setState({ editOn: 'Teacher' });
        }, tag: 'button', action: true }, 'Teacher'))), _react2.default.createElement(_reactstrap.Col, { xs: '12', sm: '12', md: '8', lg: '9' }, _react2.default.createElement(_reactstrap.Card, { className: 'head' }, _react2.default.createElement('h1', null, editOn)), _react2.default.createElement('br', null), _react2.default.createElement(_reactstrap.Card, { className: 'detail' }, !_lodash2.default.isEmpty(userData) && _react2.default.createElement(_ProfileDetail2.default, { at: editOn, userData: userData })))))));
    }
  }]);

  return ProfileView;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(ProfileView);