// src/components/DataContent/StateTitle.js

import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

import StateTitle from './StateTitle';
import LineGraph from "../LineGraph/LineGraph";

class DataContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { zoomToState, values, mentalHealthDays, physHealthDays, genHealthDays } = this.props;
    if (zoomToState !== 'all') {
      return (
        <g>
          <StateTitle zoomToState={zoomToState} values={values} />
          <LineGraph  zoomToState={zoomToState}
                      mentalHealthDays={mentalHealthDays}
                      physHealthDays={physHealthDays}
                      genHealthDays={genHealthDays} />
          <text x={520} y={470}>$X,XXX per capita health care spending (average)</text>
        </g>
      )
    }
    else {
      return (
        <text x={520} y={30}>US level statistics</text>
      )
    }
  }
}

export default DataContent;