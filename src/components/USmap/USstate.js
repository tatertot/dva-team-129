// src/components/USstate/USstate.js
import React, { Component } from "react";
import _ from "lodash";

const ChoroplethColors = [
    'rgb(247,251,255)',
    'rgb(222,235,247)',
    'rgb(198,219,239)',
    'rgb(158,202,225)',
    'rgb(107,174,214)',
    'rgb(66,146,198)',
    'rgb(33,113,181)',
    'rgb(8,81,156)',
    'rgb(8,48,107)'
];

const BlankColor = 'rgb(198,219,239)';

class USstate extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { zoomToState, value } = this.props;
    return zoomToState !== nextProps.zoomToState || value !== nextProps.value;
  }

  highlight() {
    console.log('hover, show percent change', this.props.value);
  }

  render() {
    const { value, geoPath, feature, quantize } = this.props;
    let color = BlankColor;

    if (value) {
      color = ChoroplethColors[quantize(value)];
    }

    return (
      <path d={geoPath(feature)}
            style={{fill:color}}
            title={feature.id}
            className="state-borders"
            onMouseOver={this.highlight.bind(this)}
       />
    );
  }
}

export default USstate;