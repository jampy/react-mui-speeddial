import React from 'react'
import Button from 'material-ui/Button';
import { FabSpinner } from './fab-spinner';

const styles = {

  container: {
    position: "relative",
    display: "inline-block"
  }

};


export const SpeedDial = React.createClass({

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

});
