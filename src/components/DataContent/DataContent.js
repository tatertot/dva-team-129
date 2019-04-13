// src/components/DataContent/StateTitle.js

import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

import StateTitle from './StateTitle';

class DataContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { zoomToState, values } = this.props;
    if (zoomToState !== 'all') {
      return (
        <StateTitle zoomToState={zoomToState} values={values} />
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