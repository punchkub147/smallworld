'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('next\\node_modules\\babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('next\\node_modules\\babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactstrap = require('reactstrap');

var _firebase = require('../../api/firebase');

var _form = require('../../config/form');

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REDUX
var FormEditDetail = function (_Component) {
  (0, _inherits3.default)(FormEditDetail, _Component);

  function FormEditDetail() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FormEditDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FormEditDetail.__proto__ || (0, _getPrototypeOf2.default)(FormEditDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      userEdit: {},
      modalEdited: false
    }, _this.handleEditProfile = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
        var userEdit, userData, user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                userEdit = _this.state.userEdit;
                userData = _this.props.userData;
                user = (0, _extends3.default)({}, userData, userEdit, {
                  detail: (0, _extends3.default)({}, userData.detail, userEdit.detail),
                  ability: (0, _extends3.default)({}, userData.ability, userEdit.ability),
                  question: (0, _extends3.default)({}, userData.question, userEdit.question),
                  job: (0, _extends3.default)({}, userData.job, userEdit.job),
                  salary: (0, _extends3.default)({}, userData.salary, userEdit.salary)
                });

                console.log('useruseruseru');
                _context.next = 7;
                return (0, _firebase.updateAt)('users', userData.uid, userEdit);

              case 7:
                _this.setState({
                  modalEdited: true
                });
                setTimeout(function () {
                  _this.setState({
                    modalEdited: false
                  });
                }, 2000);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FormEditDetail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var userData = this.props.userData;

      this.setState({
        userEdit: userData
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var userEdit = this.state.userEdit;
      var language = this.props.language;

      //////////////// Profile //////////////////////////////////

      var Profile = _react2.default.createElement(_reactstrap.Row, null, _lodash2.default.map((0, _form.inputProfile)(language), function (_ref3) {
        var label = _ref3.label,
            ref = _ref3.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 12 }, label), _react2.default.createElement(_reactstrap.Col, { sm: 12 }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '', value: _lodash2.default.get(userEdit, ref[0] + '.' + ref[1]),
          onChange: function onChange(e) {
            return _this3.setState({ userEdit: (0, _extends3.default)({}, userEdit, (0, _defineProperty3.default)({}, ref[0], (0, _extends3.default)({}, userEdit[ref[0]], (0, _defineProperty3.default)({}, ref[1], e.target.value)))) });
          } }))));
      }), _lodash2.default.map((0, _form.dropdownProfile)(language), function (_ref4) {
        var label = _ref4.label,
            ref = _ref4.ref,
            value = _ref4.value;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 12 }, label), _react2.default.createElement(_reactstrap.Col, { sm: 12 }, _react2.default.createElement(_reactstrap.Input, { type: 'select', onChange: function onChange(e) {
            return _this3.setState({ userEdit: (0, _extends3.default)({}, userEdit, (0, _defineProperty3.default)({}, ref[0], (0, _extends3.default)({}, userEdit[ref[0]], (0, _defineProperty3.default)({}, ref[1], e.target.value)))) });
          } }, _lodash2.default.map(value, function (val) {
          return _react2.default.createElement('option', { val: val, selected: _lodash2.default.get(userEdit, ref[0] + '.' + ref[1]) === val }, val);
        })))));
      }), _lodash2.default.map((0, _form.radioProfile)(language), function (_ref5) {
        var label = _ref5.label,
            ref = _ref5.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'custom-controls-stacked' }, _react2.default.createElement('p', null, label), _react2.default.createElement('label', { className: 'custom-control custom-radio',
          onClick: function onClick(e) {
            return _this3.setState({ userEdit: (0, _extends3.default)({}, userEdit, (0, _defineProperty3.default)({}, ref[0], (0, _extends3.default)({}, userEdit[ref[0]], (0, _defineProperty3.default)({}, ref[1], true)))) });
          } }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input', checked: _lodash2.default.get(userEdit, ref[0] + '.' + ref[1]) ? 'checked' : '' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'Yes')), _react2.default.createElement('label', { className: 'custom-control custom-radio', style: { top: '-28px', left: '80px' },
          onClick: function onClick(e) {
            return _this3.setState({ userEdit: (0, _extends3.default)({}, userEdit, (0, _defineProperty3.default)({}, ref[0], (0, _extends3.default)({}, userEdit[ref[0]], (0, _defineProperty3.default)({}, ref[1], false)))) });
          } }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input', checked: _lodash2.default.get(userEdit, ref[0] + '.' + ref[1]) ? '' : 'checked' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'No'))));
      }));
      //////////////// NANNY //////////////////////////////////
      var Nanny = _react2.default.createElement(_reactstrap.Row, null, _lodash2.default.map((0, _form.radioNanny)(language), function (_ref6) {
        var label = _ref6.label,
            ref = _ref6.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'custom-controls-stacked' }, _react2.default.createElement('p', null, label), _react2.default.createElement('label', { className: 'custom-control custom-radio',
          onClick: function onClick(e) {
            return _this3.setState({ userEdit: (0, _extends3.default)({}, userEdit, (0, _defineProperty3.default)({}, ref[0], (0, _extends3.default)({}, userEdit[ref[0]], (0, _defineProperty3.default)({}, ref[1], true)))) });
          } }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input', checked: _lodash2.default.get(userEdit, ref[0] + '.' + ref[1]) ? 'checked' : '' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'Yes')), _react2.default.createElement('label', { className: 'custom-control custom-radio', style: { top: '-28px', left: '80px' },
          onClick: function onClick(e) {
            return _this3.setState({ userEdit: (0, _extends3.default)({}, userEdit, (0, _defineProperty3.default)({}, ref[0], (0, _extends3.default)({}, userEdit[ref[0]], (0, _defineProperty3.default)({}, ref[1], false)))) });
          } }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input', checked: _lodash2.default.get(userEdit, ref[0] + '.' + ref[1]) ? '' : 'checked' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'No'))));
      }), _lodash2.default.map((0, _form.inputNanny)(language), function (_ref7) {
        var label = _ref7.label,
            ref = _ref7.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 12 }, label), _react2.default.createElement(_reactstrap.Col, { sm: 12 }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '', value: _lodash2.default.get(userEdit, ref[0] + '.' + ref[1]),
          onChange: function onChange(e) {
            return _this3.setState({ userEdit: (0, _extends3.default)({}, userEdit, (0, _defineProperty3.default)({}, ref[0], (0, _extends3.default)({}, userEdit[ref[0]], (0, _defineProperty3.default)({}, ref[1], e.target.value)))) });
          } }))));
      }));
      //////////////// TEACHER //////////////////////////////////
      var Teacher = _react2.default.createElement(_reactstrap.Row, null, _lodash2.default.map((0, _form.radioTeacher)(language), function (_ref8) {
        var label = _ref8.label,
            ref = _ref8.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'custom-controls-stacked' }, _react2.default.createElement('p', null, label), _react2.default.createElement('label', { className: 'custom-control custom-radio',
          onClick: function onClick(e) {
            return _this3.setState({ userEdit: (0, _extends3.default)({}, userEdit, (0, _defineProperty3.default)({}, ref[0], (0, _extends3.default)({}, userEdit[ref[0]], (0, _defineProperty3.default)({}, ref[1], true)))) });
          } }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input', checked: _lodash2.default.get(userEdit, ref[0] + '.' + ref[1]) ? 'checked' : '' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'Yes')), _react2.default.createElement('label', { className: 'custom-control custom-radio', style: { top: '-28px', left: '80px' },
          onClick: function onClick(e) {
            return _this3.setState({ userEdit: (0, _extends3.default)({}, userEdit, (0, _defineProperty3.default)({}, ref[0], (0, _extends3.default)({}, userEdit[ref[0]], (0, _defineProperty3.default)({}, ref[1], false)))) });
          } }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input', checked: _lodash2.default.get(userEdit, ref[0] + '.' + ref[1]) ? '' : 'checked' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'No'))));
      }), _lodash2.default.map((0, _form.inputTeacher)(language), function (_ref9) {
        var label = _ref9.label,
            ref = _ref9.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 12 }, label), _react2.default.createElement(_reactstrap.Col, { sm: 12 }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '', value: _lodash2.default.get(userEdit, ref[0] + '.' + ref[1]),
          onChange: function onChange(e) {
            return _this3.setState({ userEdit: (0, _extends3.default)({}, userEdit, (0, _defineProperty3.default)({}, ref[0], (0, _extends3.default)({}, userEdit[ref[0]], (0, _defineProperty3.default)({}, ref[1], e.target.value)))) });
          } }))));
      }));
      //////////////////////////////////////////////

      var modalEdited = _react2.default.createElement(_reactstrap.Modal, { isOpen: this.state.modalEdited, toggle: function toggle() {
          return _this3.setState({ modalEdited: !_this3.state.modalEdited });
        } }, _react2.default.createElement(_reactstrap.ModalHeader, { toggle: function toggle() {
          return _this3.setState({ modalEdited: !_this3.state.modalEdited });
        } }, 'Edited'), _react2.default.createElement(_reactstrap.ModalBody, null, 'Edited Success'));

      return _react2.default.createElement('div', { id: 'FormEdit' }, _react2.default.createElement(_reactstrap.Form, { onSubmit: this.handleEditProfile }, this.props.at === 'Profile' && Profile, this.props.at === 'Nanny' && Nanny, this.props.at === 'Teacher' && Teacher, _react2.default.createElement(_reactstrap.Button, { color: 'primary', size: 'lg', block: true, onSubmit: this.handleEditProfile }, 'Confirm Edit')), modalEdited);
    }
  }]);

  return FormEditDetail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages,
    language: state.language
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormEditDetail);