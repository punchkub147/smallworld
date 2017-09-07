'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('next\\node_modules\\babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('next\\node_modules\\babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REDUX
var FormSearch = function (_Component) {
  (0, _inherits3.default)(FormSearch, _Component);

  function FormSearch() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FormSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FormSearch.__proto__ || (0, _getPrototypeOf2.default)(FormSearch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      salary: 'All',
      ageRange: 'All',
      nationality: 'All',
      location: 'All',
      position: 'All',
      workTime: 'All Time',
      skill: 'Speak Thai',
      modal: false
    }, _this.handleSearch = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          salary = _this$state.salary,
          ageRange = _this$state.ageRange,
          nationality = _this$state.nationality,
          location = _this$state.location,
          position = _this$state.position,
          workTime = _this$state.workTime,
          skill = _this$state.skill;

      var query = {
        salary: salary ? salary : 'All',
        ageRange: ageRange ? ageRange : 'All',
        nationality: nationality ? nationality : 'All',
        location: location ? location : 'All',
        position: position ? position : 'All',
        workTime: workTime ? workTime : 'All'
        // skill: skill?skill:'All',
      };
      _index2.default.push({
        pathname: '/user',
        query: query
      });
      _this.openModal();
    }, _this.openModal = function () {
      _this.setState({
        modal: !_this.state.modal
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FormSearch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var query = _index2.default.router.query;
      var salary = query.salary,
          ageRange = query.ageRange,
          nationality = query.nationality,
          location = query.location,
          position = query.position,
          workTime = query.workTime,
          skill = query.skill;

      this.setState((0, _extends3.default)({}, this.state, {
        salary: salary,
        ageRange: ageRange,
        nationality: nationality,
        location: location,
        position: position,
        workTime: workTime,
        skill: skill
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var messages = this.props.messages;
      var _state = this.state,
          salary = _state.salary,
          ageRange = _state.ageRange,
          nationality = _state.nationality,
          location = _state.location,
          position = _state.position,
          workTime = _state.workTime,
          skill = _state.skill;

      //const selectSkill = ['Speak Thai','Speak English','Speak Chinese','Cook']

      var fullSelect = [{
        label: messages['Salary'],
        value: ['All', '0 - 10,000', '10,000 - 20,000', '20,000 - 30,000', '30,000+'],
        ref: 'salary'
      }, {
        label: messages['Age range'],
        value: ['All', '20 - 29', '30 - 39', '40 - 49', '50+'],
        ref: 'ageRange'
      }, {
        label: messages['Nationality'],
        value: ['All', 'Myanmar', 'Thai', 'Philippine', 'Laos', 'Cambodia'],
        ref: 'nationality'
      }, {
        label: messages['Location'],
        value: ['All', 'Bangkok', 'Nonthaburi', 'Don Muang', 'Pattaya', 'Chiang Mai', 'Hua Hin', 'Phuket', 'Ko Samui'],
        ref: 'location'
      }, {
        label: messages['Position'],
        value: ['All', 'Maid&Nanny', 'Nursery', 'Teacher@Home'],
        ref: 'position'
      }, {
        label: messages['Work Time'],
        value: ['All', 'Full Time', 'Part Time'],
        ref: 'workTime'
      }];

      var form = _react2.default.createElement(_reactstrap.Form, { onSubmit: this.handleSearch }, _lodash2.default.map(fullSelect, function (select) {
        return _react2.default.createElement(_reactstrap.FormGroup, { row: true }, _react2.default.createElement(_reactstrap.Label, { sm: 3 }, select.label), _react2.default.createElement(_reactstrap.Col, { sm: 9 }, _react2.default.createElement(_reactstrap.Input, { type: 'select', onChange: function onChange(e) {
            return _this2.setState((0, _defineProperty3.default)({}, select.ref, e.target.value));
          } }, _lodash2.default.map(select.value, function (val) {
          return _react2.default.createElement('option', { val: val, selected: _this2.state[select.ref] === val }, val);
        }))));
      }), _react2.default.createElement(_reactstrap.Button, { color: 'primary', size: 'lg', block: true, onSubmit: this.handleSearch }, messages['Search']));

      return _react2.default.createElement('div', { id: 'Search' }, _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: this.openModal }, messages['Search Nanny']), _react2.default.createElement(_reactstrap.Modal, { isOpen: this.state.modal, toggle: this.openModal }, _react2.default.createElement(_reactstrap.ModalHeader, { toggle: this.openModal }, messages['Search Nanny']), _react2.default.createElement(_reactstrap.ModalBody, null, form)));
    }
  }]);

  return FormSearch;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormSearch);