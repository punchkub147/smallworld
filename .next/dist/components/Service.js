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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REDUX
var Service = function (_Component) {
  (0, _inherits3.default)(Service, _Component);

  function Service() {
    (0, _classCallCheck3.default)(this, Service);

    return (0, _possibleConstructorReturn3.default)(this, (Service.__proto__ || (0, _getPrototypeOf2.default)(Service)).apply(this, arguments));
  }

  (0, _createClass3.default)(Service, [{
    key: 'render',
    value: function render() {
      var messages = this.props.messages;

      var datas = [{
        img: '/static/img/cleaning-lady.svg',
        title: _lodash2.default.get(messages, 'Maid&Nanny'),
        description: 'Maid&Nanny',
        svg: _react2.default.createElement('svg', { width: '100%', height: '100%', viewBox: '0 0 32 32' }, _react2.default.createElement('path', { d: 'M30.448 24.155h-3.554l-3.298-2.409c-0.321-0.233-0.77-0.166-1.003 0.155s-0.166 0.77 0.155 1.003l1.703 1.25h-1.135c-0.243 0-0.432 0.223-0.389 0.463l1.047 6.088c0.034 0.189 0.196 0.328 0.389 0.328h5.068c0.193 0 0.358-0.139 0.389-0.331l1.014-6.088c0.044-0.24-0.142-0.459-0.385-0.459zM26.857 26.283c-0.304 0.047-0.588-0.162-0.635-0.466-0.017-0.118 0.003-0.233 0.054-0.334 0.078-0.155 0.23-0.274 0.416-0.301 0.206-0.030 0.405 0.054 0.524 0.209 0.057 0.074 0.098 0.162 0.111 0.26 0.044 0.301-0.162 0.585-0.47 0.632z' }), _react2.default.createElement('path', { d: 'M12.224 7.514c0.814 0 1.71-0.453 1.71-0.453-0.422-0.247-0.639-0.737-0.743-1.23 0.443 0.733 1.21 1.216 2.078 1.216s1.635-0.483 2.078-1.216c-0.105 0.497-0.321 0.983-0.743 1.23 0 0 0.895 0.453 1.71 0.453 0.527 0 1.024-0.189 1.22-0.821 0.030-0.095-0.010-0.196-0.098-0.24-0.294-0.159-0.939-0.615-0.939-1.554 0-1.216 0.304-4.899-3.227-4.899s-3.227 3.683-3.227 4.899c0 0.939-0.645 1.395-0.939 1.554-0.088 0.047-0.128 0.149-0.098 0.24 0.196 0.628 0.693 0.821 1.22 0.821z' }), _react2.default.createElement('path', { d: 'M23.363 18.38c0.517-0.385 0.625-1.118 0.24-1.635l-5.599-7.528c-1.193-1.588-3.568-1.517-5.051-0.412-0.003 0.003-4.639 3.453-4.639 3.453l-2.801-1.551v2.673l2.328 1.291c0.176 0.098 0.372 0.145 0.568 0.145 0.247 0 0.493-0.078 0.699-0.23l2.642-1.966v2.902l-2.798 7.805c-0.098 0.26 0.098 0.541 0.375 0.541h2.423v6.045c0 0.868 0.703 1.571 1.571 1.571s1.571-0.703 1.571-1.571v-6.051h0.757v6.045c0 0.868 0.703 1.571 1.571 1.571s1.571-0.703 1.571-1.571v-6.045h2.423c0.28 0 0.473-0.277 0.375-0.541l-2.798-7.805v-1.335l2.943 3.956c0.23 0.308 0.581 0.47 0.939 0.47 0.236 0.003 0.48-0.071 0.689-0.226z' }), _react2.default.createElement('path', { d: 'M4.871 23.415v-21.448c0-0.372-0.304-0.676-0.676-0.676s-0.676 0.304-0.676 0.676v21.37c0.169-0.034 0.345-0.051 0.517-0.051 0.284 0 0.568 0.044 0.835 0.128z' }), _react2.default.createElement('path', { d: 'M9.122 31.172c-1.115-0.558-2.024-1.642-2.024-3.098s-0.855-2.088-1.193-2.281c-0.409-0.159-0.885-0.27-1.399-0.314-0.152-0.014-0.311-0.020-0.47-0.020-0.068 0-0.139 0-0.206 0.003-0.737 0.027-1.416 0.193-1.943 0.453-0.797 0.53-0.726 1.669-0.726 1.669 0 3.612 2.713 4.416 5.129 4.416 1.064 0 2.071-0.155 2.76-0.297 0.267-0.051 0.314-0.409 0.071-0.53z' }), _react2.default.createElement('path', { d: 'M3.392 24.783c0.139-0.013 0.28-0.024 0.422-0.027 0.074-0.003 0.149-0.003 0.223-0.003 0.176 0 0.348 0.007 0.517 0.020 0.142 0.010 0.284 0.027 0.422 0.047 0.118 0.017 0.233 0.037 0.348 0.061 0.088 0.020 0.176 0.041 0.264 0.061-0.047-0.101-0.098-0.196-0.155-0.28-0.078-0.115-0.162-0.216-0.25-0.297-0.068-0.061-0.139-0.112-0.213-0.149-0.030-0.017-0.064-0.030-0.095-0.044-0.264-0.115-0.547-0.176-0.835-0.176-0.176 0-0.348 0.024-0.517 0.068-0.108 0.027-0.216 0.064-0.321 0.111-0.030 0.014-0.061 0.027-0.091 0.041-0.074 0.037-0.149 0.091-0.22 0.155-0.155 0.142-0.294 0.341-0.399 0.571 0.176-0.044 0.358-0.084 0.547-0.115 0.115-0.017 0.23-0.034 0.351-0.044z' }))
      }, {
        img: '/static/img/female-professor-reading-a-book.svg',
        title: _lodash2.default.get(messages, 'Nursery'),
        description: 'Nursery',
        svg: _react2.default.createElement('svg', { width: '100%', height: '100%', viewBox: '0 0 32 32' }, _react2.default.createElement('path', { d: 'M28.873 28.918v-0.469h-0.948l-0.173-3.087-0.516 0.201c-0.692 0.271-1.376 0.437-2.077 0.51l-0.964-8.743c0.154-1.136 0.357-2.868 0.435-4.644 0.132-3.040 0.588-12.685-8.163-12.685s-8.511 8.053-8.511 8.053l0.638 10.448-0.789 7.599c-0.876-0.032-1.725-0.204-2.583-0.541l-0.516-0.2-0.171 3.088h-0.988v0.469h-3.441v3.081h31.786v-3.081h-3.019zM24.37 26.915c0.904 0 1.773-0.138 2.643-0.423l0.087 1.554h-10.457c0.051-0.733 0.293-2.257 1.447-2.396 0.575-0.071 1.314 0.175 2.197 0.459 1.111 0.36 2.492 0.807 4.083 0.807zM20.934 25.475c0.135-0.881 0.392-2.486 0.681-4.16l0.624 4.53c-0.459-0.109-0.891-0.237-1.305-0.37zM9.711 7.055c1.9-0.129 8.467-0.726 8.636-2.85 0.626 1.153 3.94 4.059 5.256 4.25-0.297 2.907-2.379 5.282-5.13 6.023v2.433h0.015l0.881 0.42-2.77 4.992-2.716-5.148 0.692-0.173v-2.597c-2.841-0.886-4.902-3.536-4.902-6.666 0.002-0.23 0.014-0.46 0.037-0.685zM12.175 25.271c-0.083 0.027-0.163 0.051-0.247 0.078-0.377 0.121-0.776 0.242-1.187 0.359l0.472-3.654c0.364 1.232 0.717 2.407 0.962 3.216zM5.446 26.492c0.871 0.285 1.741 0.423 2.645 0.423 1.59 0 2.973-0.446 4.084-0.803 0.884-0.285 1.619-0.528 2.196-0.459 1.148 0.135 1.394 1.66 1.447 2.394h-10.457l0.086-1.555z' }))
      }, {
        img: '/static/img/nurse.svg',
        title: _lodash2.default.get(messages, 'Teacher@Home'),
        description: 'Teacher@Home',
        svg: _react2.default.createElement('svg', { width: '100%', height: '100%', viewBox: '0 0 32 32' }, _react2.default.createElement('path', { d: 'M12.687 14.049c-0.822 0-1.489 0.666-1.489 1.487 0 0.82 0.667 1.487 1.489 1.487 0.82 0 1.486-0.665 1.486-1.487s-0.667-1.487-1.486-1.487zM12.992 16.484c-0.421 0-0.762-0.342-0.762-0.764 0-0.42 0.341-0.762 0.762-0.762s0.761 0.342 0.761 0.762c0 0.422-0.34 0.764-0.761 0.764z' }), _react2.default.createElement('path', { d: 'M19.313 14.049c-0.82 0-1.486 0.666-1.486 1.487s0.667 1.487 1.486 1.487c0.822 0 1.489-0.667 1.489-1.487-0-0.821-0.667-1.487-1.489-1.487zM19.008 16.484c-0.421 0-0.761-0.342-0.761-0.764 0-0.42 0.34-0.762 0.761-0.762s0.762 0.342 0.762 0.762c0 0.422-0.341 0.764-0.762 0.764z' }), _react2.default.createElement('path', { d: 'M29.685 19.911c-0.109-0.589-2.427-2.098-3.36-3.164 0.232-0.148 0.438-0.334 0.614-0.556 0.461-0.584 0.696-1.38 0.696-2.368 0-1.638-0.696-2.899-1.843-3.399h0.030c0.285-1.275 0.987-4.292 1.135-4.927 0.063-0.224 0.098-0.459 0.098-0.703 0-1.112-0.705-2.059-1.692-2.421-0.001-0-0.002-0.001-0.004-0.002-3.715-1.558-6.517-2.365-9.358-2.371-2.841 0.007-5.643 0.814-9.358 2.371-0.001 0-0.002 0.001-0.004 0.002-0.987 0.361-1.692 1.308-1.692 2.421 0 0.244 0.035 0.48 0.098 0.703 0.148 0.635 0.85 3.652 1.135 4.927h0.030c-1.148 0.5-1.843 1.761-1.843 3.399 0 0.988 0.234 1.785 0.696 2.368 0.176 0.223 0.382 0.409 0.614 0.556-0.933 1.066-3.251 2.575-3.36 3.164-0.095 0.513 1.455 2.131 4.908 3.252-1.58 0.888-2.851 2.458-2.851 4.254v4.582h23.256v-4.582c0-1.796-1.271-3.366-2.851-4.254 3.452-1.122 5.003-2.74 4.908-3.252zM13.029 5.312c0-0.368 0.298-0.666 0.666-0.666h1.284v-1.284c0-0.368 0.298-0.666 0.666-0.666h0.713c0.368 0 0.666 0.298 0.666 0.666v1.284h1.284c0.368 0 0.666 0.298 0.666 0.666v0.713c0 0.368-0.298 0.666-0.666 0.666h-1.284v1.284c0 0.368-0.298 0.666-0.666 0.666h-0.713c-0.368 0-0.666-0.298-0.666-0.666v-1.284h-1.284c-0.368 0-0.666-0.298-0.666-0.666v-0.713zM26.15 27.418v3.104h-20.3v-3.104c0-1.854 2.236-3.505 4.033-3.547 1.333 2.028 3.615 3.271 6.055 3.271 0.021 0 0.041-0.001 0.062-0.001s0.041 0.001 0.062 0.001c2.44 0 4.722-1.243 6.055-3.271 1.797 0.042 4.033 1.693 4.033 3.547zM16 25.662c-0.005-0-0.010-0-0.014-0v0.002c-0.016 0-0.032 0.001-0.047 0.001-1.546 0-3.012-0.627-4.081-1.697v-2.208c1.31 0.649 2.688 0.988 4.056 0.988 0.029 0 0.058-0.001 0.087-0.001s0.058 0.001 0.087 0.001c1.368 0 2.747-0.339 4.056-0.988v2.208c-1.069 1.070-2.535 1.697-4.081 1.697-0.016 0-0.032-0-0.047-0.001v-0.002c-0.005 0-0.009 0-0.014 0zM24.77 15.837c-0.023 0-0.057-0.003-0.093-0.005l-0.475-0.035-0.202 0.391c-1.298 2.519-4.329 5.229-7.915 5.229-0.024 0-0.048-0.001-0.072-0.001v-0.002c-0.005 0-0.010 0-0.014 0s-0.010-0-0.014-0v0.002c-0.024 0-0.048 0.001-0.072 0.001-3.585 0-6.616-2.711-7.915-5.229l-0.202-0.391-0.475 0.035c-0.036 0.003-0.070 0.005-0.093 0.005-1.018 0-1.534-0.678-1.534-2.014 0-0.183 0.015-0.538 0.11-0.916 1.1 0.091 5.428 0.161 9.229-0.569 0.406-0.078 0.628-0.152 0.948-0.152s0.406 0.021 0.727 0.098c3.743 0.91 8.391 0.712 9.483 0.622 0.095 0.377 0.11 0.732 0.11 0.916-0 1.336-0.516 2.014-1.534 2.014z' }))
      }];

      return _react2.default.createElement('div', { id: 'Service' }, _react2.default.createElement('h1', null, 'OUR SERVICE'), _react2.default.createElement('br', null), _react2.default.createElement('h3', null, 'This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.'), _react2.default.createElement('br', null), _react2.default.createElement('br', null), _react2.default.createElement('div', { className: 'row justify-content-center' }, _react2.default.createElement(_reactstrap.Col, { md: '9' }, _react2.default.createElement(_reactstrap.Row, null, datas.map(function (data) {
        return _react2.default.createElement(_reactstrap.Col, { md: '4', className: 'card' }, _react2.default.createElement('div', { className: 'icon' }, data.svg), _react2.default.createElement('br', null), _react2.default.createElement('div', { className: 'title' }, data.title), _react2.default.createElement('div', { className: 'description' }, data.description));
      })))));
    }
  }]);

  return Service;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Service);