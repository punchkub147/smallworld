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

var _reactstrap = require('reactstrap');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserCard = function (_Component) {
  (0, _inherits3.default)(UserCard, _Component);

  function UserCard() {
    (0, _classCallCheck3.default)(this, UserCard);

    return (0, _possibleConstructorReturn3.default)(this, (UserCard.__proto__ || (0, _getPrototypeOf2.default)(UserCard)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserCard, [{
    key: 'render',
    value: function render() {
      var user = this.props.user;

      return _react2.default.createElement('div', { id: 'UserCard' }, _react2.default.createElement(_reactstrap.Card, null, _react2.default.createElement(_link2.default, { href: '/profile/view?uid=' + user.uid }, _react2.default.createElement(_reactstrap.CardImg, { className: 'image', top: true, width: '100%', src: !_lodash2.default.isEmpty(user.imageUrl) ? user.imageUrl : 'https://cdn1.iconfinder.com/data/icons/IconsLandVistaPeopleIconsDemo/256/Person_Undefined_Female_Dark.png', alt: 'Card image cap' })), _react2.default.createElement(_reactstrap.CardBlock, null, _react2.default.createElement(_reactstrap.CardTitle, null), _react2.default.createElement(_reactstrap.CardSubtitle, null, _lodash2.default.get(user, 'detail.firstName'), ' ', _lodash2.default.get(user, 'detail.lastName')), _react2.default.createElement(_reactstrap.CardText, { className: 'description' }))));
    }
  }]);

  return UserCard;
}(_react.Component);

exports.default = UserCard;