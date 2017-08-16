'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\punchkub147\\Desktop\\next\\components\\Banner.js';


var Banner = function (_Component) {
  (0, _inherits3.default)(Banner, _Component);

  function Banner() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Banner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Banner.__proto__ || (0, _getPrototypeOf2.default)(Banner)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Banner, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'Banner', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_reactstrap.Jumbotron, { style: { background: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('h1', { className: 'display-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'Small World Service Center'), _react2.default.createElement('p', { className: 'lead', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.'), _react2.default.createElement('hr', { className: 'my-2', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'It uses utility classes for typgraphy and spacing to space content out within the larger container.'), _react2.default.createElement('p', { className: 'lead', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_reactstrap.Button, { color: 'primary', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'Learn More'))));
    }
  }]);

  return Banner;
}(_react.Component);

exports.default = Banner;