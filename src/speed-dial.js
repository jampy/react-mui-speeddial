import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import FabSpinner from './fab-spinner';

const styles = () =>({
  container: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  fabButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

export class SpeedDial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      internalOpen: false,
    }
  }
  handleFabTouchTap = () => {
    this.setState({
      internalOpen: !this.state.internalOpen
    });
    let cb = this.props.onOpenCloseRequest;
    cb && cb();
  }
  handleCloseRequest = () => {
    this.handleFabTouchTap();
  }
  render() {
    const { internalOpen } = this.state;
    const { open=internalOpen, classes,
      fabButtonColor, itemButtonColor, effect, style, children, fabProps, fabContentOpen, fabContentClose } = this.props;
    const enhancedChildren = React.Children.map(children,
      (child, index) => React.cloneElement(child, {
        effect,
        index,
        visible: open,
        onCloseRequest: this.handleCloseRequest,
        itemButtonColor,
      })
    );
    return (<div className={classes.container}>
      <div className={classes.fabButton}>
      <Button fab
        color={fabButtonColor}
        {...fabProps}
        onTouchTap={this.handleFabTouchTap}
      >
        <FabSpinner
          aContent={fabContentOpen}
          bContent={fabContentClose || fabContentOpen}
          showB={open}
        />
      </Button>
    </div>
      {enhancedChildren}
    </div>);
  }
}
SpeedDial.propTypes = {
  open: PropTypes.bool,
  effect: PropTypes.oneOf(['none', 'fade', 'slide', 'fade-staggered']),
  fabButtonColor: PropTypes.oneOf(['primary', 'secondary', 'accent']),
  itemButtonColor: PropTypes.oneOf(['primary', 'secondary', 'accent']),
  fabContentClose: PropTypes.node,
  fabContentOpen: PropTypes.node.isRequired,
};
SpeedDial.defaultProps = {
  effect: 'fade-staggered',
  fabButtonColor: 'primary',
  itemButtonColor: 'primary'
}
export default withStyles(styles)(SpeedDial);
