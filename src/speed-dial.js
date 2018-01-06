import React from 'react'
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
    const { open=internalOpen, effect, style, children } = this.props;
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
        {...this.props.fabProps}
        onTouchTap={this.handleFabTouchTap}
      >
        <FabSpinner
          aContent={this.props.fabContentOpen}
          bContent={this.props.fabContentClose || this.props.fabContentOpen}
          showB={open}
        />
      </Button>
    </div>
      {enhancedChildren}

    </div>);
  }
}
SpeedDial.propTypes = {};
SpeedDial.defaultProps = {
  effect: 'fade-staggered'
}
export default SpeedDial;
/* export const SpeedDial = React.createClass({

  getInitialState() {
    return {
      internalOpen: false
    }
  },


  handleFabTouchTap() {
    this.setState({
      internalOpen: !this.state.internalOpen
    });

    let cb = this.props.onOpenCloseRequest;
    cb && cb();
  },


  handleCloseRequest() {
    this.handleFabTouchTap();
  },

  render: function() {

    let { open, effect, style } = this.props;

    if (open === undefined)
      open = this.state.internalOpen;

    if (effect === undefined)
      effect = "fade-staggered";

    let enhancedChildren = React.Children.map(this.props.children,
      (child, index) => React.cloneElement(child, {
        effect,
        index,
        visible: open,
        onCloseRequest: this.handleCloseRequest
      })
    );

    return <div style={{...styles.container, ...style}}>

      <Button fab
        color="primary"
        {...this.props.fabProps}
        onTouchTap={this.handleFabTouchTap}
      >
        <FabSpinner
          aContent={this.props.fabContentOpen}
          bContent={this.props.fabContentClose || this.props.fabContentOpen}
          showB={open}
        />
      </Button>

      {enhancedChildren}

    </div>;
  }

}); */
