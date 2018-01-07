'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpeedDial = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _styles = require('material-ui/styles');

var _fabSpinner = require('./fab-spinner');

var _fabSpinner2 = _interopRequireDefault(_fabSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
  return {
    container: {
      display: "flex",
      flexDirection: "column-reverse"
    },
    fabButton: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  };
};

var SpeedDial = exports.SpeedDial = function (_React$Component) {
  (0, _inherits3.default)(SpeedDial, _React$Component);

  function SpeedDial(props) {
    (0, _classCallCheck3.default)(this, SpeedDial);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SpeedDial.__proto__ || (0, _getPrototypeOf2.default)(SpeedDial)).call(this, props));

    _this.handleFabTouchTap = function () {
      _this.setState({
        internalOpen: !_this.state.internalOpen
      });
      var cb = _this.props.onOpenCloseRequest;
      cb && cb();
    };

    _this.handleCloseRequest = function () {
      _this.handleFabTouchTap();
    };

    _this.state = {
      internalOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(SpeedDial, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var internalOpen = this.state.internalOpen;
      var _props = this.props,
          _props$open = _props.open,
          open = _props$open === undefined ? internalOpen : _props$open,
          classes = _props.classes,
          fabButtonColor = _props.fabButtonColor,
          itemButtonColor = _props.itemButtonColor,
          effect = _props.effect,
          style = _props.style,
          children = _props.children,
          fabProps = _props.fabProps,
          fabContentOpen = _props.fabContentOpen,
          fabContentClose = _props.fabContentClose;

      var enhancedChildren = _react2.default.Children.map(children, function (child, index) {
        return _react2.default.cloneElement(child, {
          effect: effect,
          index: index,
          visible: open,
          onCloseRequest: _this2.handleCloseRequest,
          itemButtonColor: itemButtonColor
        });
      });
      return _react2.default.createElement(
        'div',
        { className: classes.container },
        _react2.default.createElement(
          'div',
          { className: classes.fabButton },
          _react2.default.createElement(
            _Button2.default,
            (0, _extends3.default)({ fab: true,
              color: fabButtonColor
            }, fabProps, {
              onTouchTap: this.handleFabTouchTap
            }),
            _react2.default.createElement(_fabSpinner2.default, {
              aContent: fabContentOpen,
              bContent: fabContentClose || fabContentOpen,
              showB: open
            })
          )
        ),
        enhancedChildren
      );
    }
  }]);
  return SpeedDial;
}(_react2.default.Component);

SpeedDial.propTypes = {
  open: _propTypes2.default.bool,
  effect: _propTypes2.default.oneOf(['none', 'fade', 'slide', 'fade-staggered']),
  fabButtonColor: _propTypes2.default.oneOf(['primary', 'secondary', 'accent']),
  itemButtonColor: _propTypes2.default.oneOf(['primary', 'secondary', 'accent']),
  fabContentClose: _propTypes2.default.node,
  fabContentOpen: _propTypes2.default.node.isRequired
};
SpeedDial.defaultProps = {
  effect: 'fade-staggered',
  fabButtonColor: 'primary',
  itemButtonColor: 'primary'
};
exports.default = (0, _styles.withStyles)(styles)(SpeedDial);