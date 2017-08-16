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

var _nukaCarousel = require('nuka-carousel');

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

var _reactImageGallery = require('react-image-gallery');

var _reactImageGallery2 = _interopRequireDefault(_reactImageGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\punchkub147\\Desktop\\next\\components\\Carousel.js';


var myCarousel = function (_Component) {
  (0, _inherits3.default)(myCarousel, _Component);

  function myCarousel() {
    (0, _classCallCheck3.default)(this, myCarousel);

    return (0, _possibleConstructorReturn3.default)(this, (myCarousel.__proto__ || (0, _getPrototypeOf2.default)(myCarousel)).apply(this, arguments));
  }

  (0, _createClass3.default)(myCarousel, [{
    key: 'handleImageLoad',
    value: function handleImageLoad(event) {
      console.log('Image loaded ', event.target);
    }
  }, {
    key: 'render',
    value: function render() {
      var images = [{
        original: 'http://www.dairylink-uk.com/sites/default/files/images/content/nursery-teacher-with-children.jpg'
      }, {
        original: 'https://piesiecreativity.com/wp-content/uploads/2017/03/How-to-Create-Positive-Learning-Mindset-Among-Students-900x500.jpg'
      }, {
        original: 'http://blogs.edweek.org/teachers/teaching_now/Boy-Studying-in-Classroom-Laptop_900x500-Getty.jpg'
      }];

      return _react2.default.createElement('div', { id: 'Carousel', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_reactImageGallery2.default, {
        items: images,
        slideInterval: 2000,
        onImageLoad: this.handleImageLoad, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }));
    }
  }]);

  return myCarousel;
}(_react.Component);

exports.default = myCarousel;