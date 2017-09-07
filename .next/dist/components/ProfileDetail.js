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

var _form = require('../config/form');

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REDUX
var ProfileDetail = function (_Component) {
  (0, _inherits3.default)(ProfileDetail, _Component);

  function ProfileDetail() {
    (0, _classCallCheck3.default)(this, ProfileDetail);

    return (0, _possibleConstructorReturn3.default)(this, (ProfileDetail.__proto__ || (0, _getPrototypeOf2.default)(ProfileDetail)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProfileDetail, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          userData = _props.userData,
          language = _props.language;

      //////////////// Profile //////////////////////////////////

      var Profile = _react2.default.createElement(_reactstrap.Row, null, _lodash2.default.map((0, _form.inputProfile)(language), function (_ref) {
        var label = _ref.label,
            ref = _ref.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 12 }, label), _react2.default.createElement(_reactstrap.Col, { sm: 12 }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '', value: _lodash2.default.get(userData, ref[0] + '.' + ref[1]), readOnly: true }))));
      }), _lodash2.default.map((0, _form.dropdownProfile)(language), function (_ref2) {
        var label = _ref2.label,
            ref = _ref2.ref,
            value = _ref2.value;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 12 }, label), _react2.default.createElement(_reactstrap.Col, { sm: 12 }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '', value: _lodash2.default.get(userData, ref[0] + '.' + ref[1]), readOnly: true }))));
      }), _lodash2.default.map((0, _form.radioProfile)(language), function (_ref3) {
        var label = _ref3.label,
            ref = _ref3.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'custom-controls-stacked' }, _react2.default.createElement('p', null, label), _react2.default.createElement('label', { className: 'custom-control custom-radio' }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input',
          checked: _lodash2.default.get(userData, ref[0] + '.' + ref[1]) ? 'checked' : '' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'Yes')), _react2.default.createElement('label', { className: 'custom-control custom-radio', style: { top: '-28px', left: '80px' } }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input',
          checked: _lodash2.default.get(userData, ref[0] + '.' + ref[1]) ? '' : 'checked' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'No'))));
      }));
      //////////////// NANNY //////////////////////////////////
      var Nanny = _react2.default.createElement(_reactstrap.Row, null, _lodash2.default.map((0, _form.radioNanny)(language), function (_ref4) {
        var label = _ref4.label,
            ref = _ref4.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'custom-controls-stacked' }, _react2.default.createElement('p', null, label), _react2.default.createElement('label', { className: 'custom-control custom-radio' }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input',
          checked: _lodash2.default.get(userData, ref[0] + '.' + ref[1]) ? 'checked' : '' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'Yes')), _react2.default.createElement('label', { className: 'custom-control custom-radio', style: { top: '-28px', left: '80px' } }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input',
          checked: _lodash2.default.get(userData, ref[0] + '.' + ref[1]) ? '' : 'checked' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'No'))));
      }), _lodash2.default.map((0, _form.inputNanny)(language), function (_ref5) {
        var label = _ref5.label,
            ref = _ref5.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 12 }, label), _react2.default.createElement(_reactstrap.Col, { sm: 12 }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '', value: _lodash2.default.get(userData, ref[0] + '.' + ref[1]), readOnly: true }))));
      }));
      //////////////// TEACHER //////////////////////////////////
      var Teacher = _react2.default.createElement(_reactstrap.Row, null, _lodash2.default.map((0, _form.radioTeacher)(language), function (_ref6) {
        var label = _ref6.label,
            ref = _ref6.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement('div', { className: 'custom-controls-stacked' }, _react2.default.createElement('p', null, label), _react2.default.createElement('label', { className: 'custom-control custom-radio' }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input',
          checked: _lodash2.default.get(userData, ref[0] + '.' + ref[1]) ? 'checked' : '' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'Yes')), _react2.default.createElement('label', { className: 'custom-control custom-radio', style: { top: '-28px', left: '80px' } }, _react2.default.createElement('input', { name: ref[1], type: 'radio', className: 'custom-control-input',
          checked: _lodash2.default.get(userData, ref[0] + '.' + ref[1]) ? '' : 'checked' }), _react2.default.createElement('span', { className: 'custom-control-indicator' }), _react2.default.createElement('span', { className: 'custom-control-description' }, 'No'))));
      }), _lodash2.default.map((0, _form.inputTeacher)(language), function (_ref7) {
        var label = _ref7.label,
            ref = _ref7.ref;
        return _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '6' }, _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 12 }, label), _react2.default.createElement(_reactstrap.Col, { sm: 12 }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '', value: _lodash2.default.get(userData, ref[0] + '.' + ref[1]), readOnly: true }))));
      }));
      //////////////////////////////////////////////

      return _react2.default.createElement('div', { id: 'FormEdit' }, this.props.at === 'Profile' && Profile, this.props.at === 'Nanny' && Nanny, this.props.at === 'Teacher' && Teacher);
    }
  }]);

  return ProfileDetail;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProfileDetail);