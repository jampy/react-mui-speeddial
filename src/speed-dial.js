import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';
import FabSpinner from './fab-spinner';

const styles = {
  container: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  fabButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

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
    const { open=internalOpen, effect, style, children, fabProps, fabContentOpen, fabContentClose } = this.props;
    const enhancedChildren = React.Children.map(children,
      (child, index) => React.cloneElement(child, {
        effect,
        index,
        visible: open,
        onCloseRequest: this.handleCloseRequest
      })
    );
    return (<div style={{...styles.container, ...style}}>
      <div style={styles.fabButton}>
      <Button fab
        color="primary"
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
  fabContentClose: PropTypes.node,
  fabContentOpen: PropTypes.node.isRequired,
};
SpeedDial.defaultProps = {
  effect: 'fade-staggered'
}
export default SpeedDial;
