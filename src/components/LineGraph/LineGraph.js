// src/components/LineGraph/LineGraph.js

import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

import XAxis from "./XAxis";
import YAxis from "./YAxis"

class LineGraph extends Component {
  constructor(props) {
    super(props);
  }

  yearValue(a,b) {
    return {
      year: parseInt(b),
      days: parseInt(a)
    }
  };

  render() {

    const { zoomToState, values, mentalHealthDays, physHealthDays, genHealthDays } = this.props;


    const height = 250;
    const width = 400;

    const xScale  = d3.scaleLinear()
      .domain([2011, 2018]).range([0,width])

    const yScale = d3.scaleLinear()
      .domain([0, 31])
      .range([height, 0])

    const line = d3.line()
      .x((d)=>xScale(d.year) + 20)
      .y((d)=>yScale(d.days) + 20);

    const mentalData = _.find(mentalHealthDays, {state:zoomToState});
    const physData = _.find(physHealthDays, {state:zoomToState});
    const genData = _.find(genHealthDays, {state:zoomToState});

    const mentalHealthData =  _.map(mentalData.numDaysPerYear, (a,b) =>this.yearValue(a,b));
    const physHealthData =  _.map(physData.numDaysPerYear, (a,b) =>this.yearValue(a,b));
    const genHealthData =  _.map(genData.numDaysPerYear, (a,b) =>this.yearValue(a,b));

    return (
      <g>
        <text x={520} y={60}>Mental and Physical Healthy Days</text>
        <svg x={520} y={80}>
          <path className="line"
                d={line(mentalHealthData)}
                fill={"none"}
                stroke={"purple"}
                strokeWidth={2}
          />
          <path className="line"
                d={line(physHealthData)}
                fill={"none"}
                stroke={"magenta"}
                strokeWidth={2}
          />
          <path className="line"
                d={line(genHealthData)}
                fill={"none"}
                stroke={"tomato"}
                strokeWidth={2}
          />
          <XAxis x={20} y={height} />
          <YAxis x={20} y={0} />

        </svg>
      </g>
    )
  }

}

export default LineGraph;