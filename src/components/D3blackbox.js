import React from "react";
/* Blackbox Higher Order Component, this returns another react component, it's like an object factory
This is wrapper for d3 code so it can be rendered in the react app, gives control of the DOM back to D3
https://github.com/Swizec/d3blackbox */

export default function D3blackbox(D3render) {
  return class Blackbox extends React.Component {
    anchor = React.createRef();

    componentDidMount() {
      D3render.call(this);
    }
    componentDidUpdate() {
      D3render.call(this);
    }

    render() {
      const { x, y } = this.props;
      return <g transform={`translate(${x}, ${y})`} ref={this.anchor} />;
    }
  };
}
