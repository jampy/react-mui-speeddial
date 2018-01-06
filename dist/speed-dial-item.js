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

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

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

var SpeedDialItem = function (_React$Component) {
  (0, _inherits3.default)(SpeedDialItem, _React$Component);

  function SpeedDialItem() {
    (0, _classCallCheck3.default)(this, SpeedDialItem);
    return (0, _possibleConstructorReturn3.default)(this, (SpeedDialItem.__proto__ || (0, _getPrototypeOf2.default)(SpeedDialItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(SpeedDialItem, [{
    key: 'handleTouchTap',
    value: function handleTouchTap(ev) {
      this.props.onCloseRequest();
      this.props.onTouchTap(ev);
    }
  }, {
    key: 'render',
    value: function render() {
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
/* export const SpeedDialItem = React.createClass({

  handleTouchTap(ev) {
    this.props.onCloseRequest();
    this.props.onTouchTap(ev);
  },

  render: function() {

    const { index, visible } = this.props;

    let style = {
      pointerEvents: visible ? "" : "none",
      position: "absolute",
      whiteSpace: "nowrap",
      right: 8,
      bottom: getYPos(index)
    };

    let fx = effects[this.props.effect];

    if (!fx)
      fx = effects.none;

    style = { ...style, ...fx(visible, index) };

    return <div style={style}>

      <div style={styles.itemContainer}>
        <Typography type="body2">{this.props.label}</Typography>
      </div>

      <Button fab
        color="primary"
        onTouchTap={this.handleTouchTap}
      >
        {this.props.fabContent}
      </Button>

    </div>;

  }

}); */

exports.default = SpeedDialItem;