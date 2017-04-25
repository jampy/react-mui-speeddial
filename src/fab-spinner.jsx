import React from 'react'
import createReactClass from 'create-react-class'

const styles = {

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


export const FabSpinner = createReactClass({

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

});