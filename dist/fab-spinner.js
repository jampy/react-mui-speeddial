"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {

  container: {
    position: "relative",
    width: "100%",
    height: 0,
    transform: "translate(0, 2px)"
  },

  overlap: {
    position: "relative",
    transition: "all 450ms"
  }

};

var FabSpinner = function (_React$Component) {
  (0, _inherits3.default)(FabSpinner, _React$Component);

  function FabSpinner() {
    (0, _classCallCheck3.default)(this, FabSpinner);
    return (0, _possibleConstructorReturn3.default)(this, (FabSpinner.__proto__ || (0, _getPrototypeOf2.default)(FabSpinner)).apply(this, arguments));
  }

  (0, _createClass3.default)(FabSpinner, [{
    key: "render",
    value: function render() {
      var showB = this.props.showB;

      var ac = _react2.default.cloneElement(this.props.aContent, {
        style: (0, _extends3.default)({}, this.props.style, this.props.aContent.style)
      });

      var bc = _react2.default.cloneElement(this.props.bContent, {
        style: (0, _extends3.default)({}, this.props.style, this.props.bContent.style)
      });
      return _react2.default.createElement(
        "div",
        { style: styles.container },
        _react2.default.createElement(
          "div",
          { style: (0, _extends3.default)({}, styles.overlap, {
              transform: "translateY(-50%) rotate(" + (showB ? "90deg" : 0) + ")",
              opacity: showB ? 0 : 1
            }) },
          ac
        ),
        _react2.default.createElement(
          "div",
          { style: (0, _extends3.default)({}, styles.overlap, {
              transform: "translateY(-150%) rotate(" + (showB ? 0 : "-90deg") + ")",
              opacity: showB ? 1 : 0
            }) },
          bc
        )
      );
    }
  }]);
  return FabSpinner;
}(_react2.default.Component);

exports.default = FabSpinner;
/* export const FabSpinner = React.createClass({

  render: function() {

    const { showB } = this.props;

    let ac = React.cloneElement(this.props.aContent, {
      style: {
        ...this.props.style,
        ...this.props.aContent.style
      }
    });

    let bc = React.cloneElement(this.props.bContent, {
      style: {
        ...this.props.style,
        ...this.props.bContent.style
      }
    });

    return <div style={styles.container}>

      <div style={{
        ...styles.overlap,
        transform: "translateY(-50%) rotate(" + (showB ? "90deg" : 0) + ")",
        opacity: showB ? 0 : 1
      }}>
        {ac}
      </div>

      <div style={{
        ...styles.overlap,
        transform: "translateY(-150%) rotate(" + (showB ? 0 : "-90deg") + ")",
        opacity: showB ? 1 : 0
      }}>
        {bc}
      </div>

    </div>;

  }

}); */