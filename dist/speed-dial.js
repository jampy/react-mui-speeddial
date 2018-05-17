'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpeedDial = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _fabSpinner = require('./fab-spinner');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {

  container: {
    position: "relative",
    display: "inline-block"
  }

};

var SpeedDial = exports.SpeedDial = _react2.default.createClass({
  displayName: 'SpeedDial',
  getInitialState: function getInitialState() {
    return {
      internalOpen: false
    };
  },
  handleFabTouchTap: function handleFabTouchTap() {
    this.setState({
      internalOpen: !this.state.internalOpen
    });

    var cb = this.props.onOpenCloseRequest;
    cb && cb();
  },
  handleCloseRequest: function handleCloseRequest() {
    this.handleFabTouchTap();
  },


  render: function render() {
    var _this = this;

    var _props = this.props,
        open = _props.open,
        effect = _props.effect,
        style = _props.style;


    if (open === undefined) open = this.state.internalOpen;

    if (effect === undefined) effect = "fade-staggered";

    var enhancedChildren = _react2.default.Children.map(this.props.children, function (child, index) {
      return _react2.default.cloneElement(child, {
        effect: effect,
        index: index,
        visible: open,
        onCloseRequest: _this.handleCloseRequest
      });
    });

    return _react2.default.createElement(
      'div',
      { style: (0, _extends3.default)({}, styles.container, style) },
      _react2.default.createElement(
        _FloatingActionButton2.default,
        (0, _extends3.default)({}, this.props.fabProps, {
          onTouchTap: this.handleFabTouchTap
        }),
        _react2.default.createElement(_fabSpinner.FabSpinner, {
          aContent: this.props.fabContentOpen,
          bContent: this.props.fabContentClose || this.props.fabContentOpen,
          showB: open
        })
      ),
      enhancedChildren
    );
  }

});