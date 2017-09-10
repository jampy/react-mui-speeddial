"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FabSpinner = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var FabSpinner = exports.FabSpinner = _react2.default.createClass({
  displayName: "FabSpinner",


  render: function render() {
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

});