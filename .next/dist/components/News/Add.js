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

var _reactstrap = require('reactstrap');

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _firebase = require('../../api/firebase');

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REDUX
var NewsAdd = function (_Component) {
  (0, _inherits3.default)(NewsAdd, _Component);

  function NewsAdd() {
    var _ref,
        _this3 = this;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, NewsAdd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = NewsAdd.__proto__ || (0, _getPrototypeOf2.default)(NewsAdd)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
      image: '',
      title: '',
      detail: '',
      file: '',
      modal: false,
      disableBtn: false
    }, _this2.handleAdd = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
        var _this2$state, file, title, detail, id, image, news;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _this2.setState({ disableBtn: true });
                _this2$state = _this2.state, file = _this2$state.file, title = _this2$state.title, detail = _this2$state.detail;
                id = (0, _cuid2.default)();
                _context.next = 6;
                return (0, _firebase.uploadNewsImage)(file, id);

              case 6:
                image = _context.sent;
                news = {
                  id: id,
                  image: image,
                  title: title,
                  detail: detail
                };

                (0, _firebase.createNews)(news);
                _this2.openModal();
                _this2.setState({
                  image: '',
                  title: '',
                  detail: '',
                  file: '',
                  disableBtn: false
                });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this2.handleChangeImage = function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var _this, file, reader;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = _this2;
                file = e.target.files[0];
                reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onload = function () {
                  _this.setState({
                    image: reader.result,
                    file: file
                  });
                };

                reader.onerror = function (error) {
                  console.log('Error: ', error);
                };

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _this2.openModal = function () {
      _this2.setState({
        modal: !_this2.state.modal
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(NewsAdd, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          messages = _props.messages,
          user = _props.user;
      var image = this.state.image;

      var form = _react2.default.createElement(_reactstrap.Form, { onSubmit: this.handleAdd }, _react2.default.createElement('img', { src: !_lodash2.default.isEmpty(image) ? image : 'https://res.weloveshopping.com/915592/w_228,h_228,c_thumb/w_228,h_228,c_crop/5ef0001c44a797976cdb56ffa161aaf6/5ef0001c44a797976cdb56ffa161aaf6.jpg',
        style: { height: '200px', width: '100%', 'object-fit': 'contain' } }), _react2.default.createElement('label', { style: { textAlign: 'center', width: '100%' } }, _react2.default.createElement('input', { accept: 'jpg,jpeg,JPG,JPEG', multiple: true, type: 'file', style: { display: 'none' },
        onChange: this.handleChangeImage }), _react2.default.createElement('span', { className: 'btn btn-primary', style: { position: 'relative', cursor: 'pointer', width: '100%' } }, 'Upload Image')), _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 12 }, 'Subject'), _react2.default.createElement(_reactstrap.Col, { sm: 12 }, _react2.default.createElement(_reactstrap.Input, { type: 'text', onChange: function onChange(e) {
          return _this4.setState({ title: e.target.value });
        } }))), _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 12 }, 'Detail'), _react2.default.createElement(_reactstrap.Col, { sm: 12 }, _react2.default.createElement(_reactstrap.Input, { type: 'textarea', style: { height: '150px' }, onChange: function onChange(e) {
          return _this4.setState({ detail: e.target.value });
        } }))), _react2.default.createElement(_reactstrap.Button, { color: 'primary', size: 'lg', disabled: this.state.disableBtn, block: true, onSubmit: this.handleAdd }, _lodash2.default.get(messages, 'Add')));

      if (_lodash2.default.get(user, 'admin') !== true) return _react2.default.createElement('div', null);
      return _react2.default.createElement('div', { id: 'NewsAdd' }, _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: this.openModal }, _lodash2.default.get(messages, 'Add News')), _react2.default.createElement(_reactstrap.Modal, { isOpen: this.state.modal, toggle: this.openModal }, _react2.default.createElement(_reactstrap.ModalHeader, { toggle: this.openModal }, _lodash2.default.get(messages, 'Add News')), _react2.default.createElement(_reactstrap.ModalBody, null, form)));
    }
  }]);

  return NewsAdd;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages,
    user: state.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewsAdd);