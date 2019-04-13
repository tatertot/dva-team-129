// src/components/DataContent/StateTitle.js

import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

class StateTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { zoomToState, values } = this.props;

    return (
      <g>
        <text x={520} y={30} className={"stateTitle"}>{zoomToState}</text>
      </g>
    )
  }
}

export default StateTitle;