'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
  return {
    container: {
      display: 'flex',
      marginBottom: '8px'
    },
    itemText: {
      flex: 1,
      padding: '16px'
    }
  };
};
var effects = {
  "none": function none(visible, index) {
    return {
      display: visible ? "" : "none"
    };
  },
  "fade-staggered": function fadeStaggered(visible, index) {
    return {
      transition: visible ? "450ms" : "300ms",
      transitionDelay: visible ? index * 0.025 + "s" : "",
      transform: "translateY(" + (visible ? 0 : "5px") + ")",
      opacity: visible ? 1 : 0
    };
  },
  "fade": function fade(visible, index) {
    return {
      transition: visible ? "450ms" : "300ms",
      opacity: visible ? 1 : 0
    };
  },
  "slide": function slide(visible, index) {
    return {
      transition: visible ? "250ms" : "300ms",
      transform: "translateY(" + (visible ? 0 : getYPos(index) + "px") + ")",
      opacity: visible ? 1 : 0
    };
  }
};

function getYPos(index) {
  return 81 + index * 56;
}

var SpeedDialItem = function (_React$Component) {
  (0, _inherits3.default)(SpeedDialItem, _React$Component);

  function SpeedDialItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SpeedDialItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SpeedDialItem.__proto__ || (0, _getPrototypeOf2.default)(SpeedDialItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTap = function (ev) {
      _this.props.onCloseRequest();
      _this.props.onTouchTap(ev);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SpeedDialItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          index = _props.index,
          visible = _props.visible,
          effect = _props.effect,
          classes = _props.classes;

      var fx = effects[this.props.effect];
      return _react2.default.createElement(
        'div',
        { className: classes.container, style: (0, _extends3.default)({}, fx(visible, index)) },
        _react2.default.createElement(
          'div',
          { className: classes.itemText },
          _react2.default.createElement(
            _Typography2.default,
            { type: 'body2' },
            this.props.label
          )
        ),
        _react2.default.createElement(
          _Button2.default,
          { fab: true,
            color: 'primary',
            onTouchTap: this.handleTouchTap
          },
          this.props.fabContent
        )
      );
    }
  }]);
  return SpeedDialItem;
}(_react2.default.Component);

SpeedDialItem.propTypes = {
  effect: _propTypes2.default.oneOf(['none', 'fade', 'slide', 'fade-staggered'])
};
SpeedDialItem.defaultProps = {
  effect: 'none'
};
exports.default = (0, _styles.withStyles)(styles)(SpeedDialItem);