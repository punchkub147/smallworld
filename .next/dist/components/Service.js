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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\punchkub147\\Desktop\\next\\components\\Service.js';


var Service = function (_Component) {
  (0, _inherits3.default)(Service, _Component);

  function Service() {
    (0, _classCallCheck3.default)(this, Service);

    return (0, _possibleConstructorReturn3.default)(this, (Service.__proto__ || (0, _getPrototypeOf2.default)(Service)).apply(this, arguments));
  }

  (0, _createClass3.default)(Service, [{
    key: 'render',
    value: function render() {
      var datas = [{
        img: '/static/img/cleaning-lady.svg',
        title: 'Maid&Nanny',
        description: 'qweqwewqewqewqewqeqweqweqwew'
      }, {
        img: '/static/img/nurse.svg',
        title: 'Nursery',
        description: 'qweqwewqewqewqewqeqweqweqwew'
      }, {
        img: '/static/img/female-professor-reading-a-book.svg',
        title: 'Teacher@Home',
        description: 'qweqwewqewqewqewqeqweqweqwew'
      }];

      return _react2.default.createElement('div', { id: 'Service', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'OUR SERVICE'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'descriptiondescriptiondescriptio ndescriptiondescri ptiondescriptiond escriptiondescr iptiondescriptionde scriptiondescriptiondescriptiondescriptiondescription'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('div', { className: 'row justify-content-center', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('div', { className: 'col-md-9', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, datas.map(function (data) {
        return _react2.default.createElement('div', { className: 'card col-md-4', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react2.default.createElement('div', { className: 'icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, _react2.default.createElement('img', { src: data.img, alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        })), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }), _react2.default.createElement('div', { className: 'title', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, data.title), _react2.default.createElement('div', { className: 'description', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, data.description));
      })))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }));
    }
  }]);

  return Service;
}(_react.Component);

exports.default = Service;