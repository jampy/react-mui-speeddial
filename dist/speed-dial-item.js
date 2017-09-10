'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpeedDialItem = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {

  itemContainer: {
    position: "absolute",
    right: 48,
    top: 20,

    WebkitTransform: "translateY(-50%)",
    MozTransform: "translateY(-50%)",
    MsTransform: "translateY(-50%)",
    OTransform: "translateY(-50%)",
    transform: "translateY(-50%)"
  }

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

var SpeedDialItem = exports.SpeedDialItem = _react2.default.createClass({
  displayName: 'SpeedDialItem',
  handleTouchTap: function handleTouchTap(ev) {
    this.props.onCloseRequest();
    this.props.onTouchTap(ev);
  },


  render: function render() {
    var _props = this.props,
        index = _props.index,
        visible = _props.visible;


    var style = {
      pointerEvents: visible ? "" : "none",
      position: "absolute",
      whiteSpace: "nowrap",
      right: 8,
      bottom: getYPos(index)
    };

    var fx = effects[this.props.effect];

    if (!fx) fx = effects.none;

    style = (0, _extends3.default)({}, style, fx(visible, index));

    return _react2.default.createElement(
      'div',
      { style: style },
      _react2.default.createElement(
        'div',
        { style: styles.itemContainer },
        this.props.label
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

});