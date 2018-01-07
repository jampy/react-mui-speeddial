import React from 'react'
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const newStyles = {
  container: {
    display: 'flex',
    marginBottom: '8px'
  },
  itemText: {
    flex: 1,
    padding: '16px',
  }
}
const effects = {
  "none": (visible, index) => ({
    display: visible ? "" : "none"
  }),
  "fade-staggered": (visible, index) => ({
    transition: visible ? "450ms" : "300ms",
    transitionDelay: visible ? (index * 0.025) + "s" : "",
    transform: "translateY(" + (visible ? 0 : "5px") + ")",
    opacity: visible ? 1 : 0
  }),
  "fade":  (visible, index) => ({
    transition: visible ? "450ms" : "300ms",
    opacity: visible ? 1 : 0
  }),
  "slide": (visible, index) => ({
    transition: visible ? "250ms" : "300ms",
    transform: "translateY(" + (visible ? 0 : getYPos(index) + "px") + ")",
    opacity: visible ? 1 : 0
  })
};


function getYPos(index) {
  return 81 + index * 56;
}

class SpeedDialItem extends React.Component {
  handleTouchTap = (ev) => {
    this.props.onCloseRequest();
    this.props.onTouchTap(ev);
  }
  render() {
    const { index, visible, effect } = this.props;
    const fx = effects[this.props.effect];
    return (<div style={{...newStyles.container, ...fx(visible, index)}}>
      <div style={newStyles.itemText}>
        <Typography type="body2">{this.props.label}</Typography>
      </div>
      <Button fab
        color="primary"
        onTouchTap={this.handleTouchTap}
      >
        {this.props.fabContent}
      </Button>
    </div>);
  }
}
SpeedDialItem.propTypes = {
  effect: PropTypes.oneOf(['none', 'fade', 'slide', 'fade-staggered']),
}
SpeedDialItem.defaultProps = {
  effect: 'none',
}
export default SpeedDialItem
