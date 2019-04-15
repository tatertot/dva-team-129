// src/components/LineGraph/LineGraph.js

import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

import AvgLine from "./AvgLine";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import Legend from "./Legend";

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

  scoreValue(a,b) {
    return {
      year: parseInt(b),
      score: a
    }
  };

  circleMark(year,days){
    return (
      <circle
        key={year}
        style={{fill: "white", width: 2, height: 2, stroke: 'black'}}
        cx={year + 20}
        cy={days}
        title={null}
        r={3}
      />
    )
  }

  render() {

    const { zoomToState, values, mentalHealthDays, physHealthDays, genHealthScore } = this.props;


    const height = 250;
    const width = 400;

    const xScale  = d3.scaleLinear()
      .domain([2011, 2017]).range([0,width])

    const yScale = d3.scaleLinear()
      .domain([0, 31])
      .range([height, 0])

    const line = d3.line()
      .x((d)=>xScale(d.year) + 20)
      .y((d)=>yScale(d.days))
    const mentalData = _.find(mentalHealthDays, {state:zoomToState});
    const physData = _.find(physHealthDays, {state:zoomToState});
    const genData = _.find(genHealthScore, {state:zoomToState});

    const mentalHealthData =  _.map(mentalData.numDaysPerYear, (a,b) =>this.yearValue(a,b));
    const physHealthData =  _.map(physData.numDaysPerYear, (a,b) =>this.yearValue(a,b));
    const genHealthData =  _.map(genData.scorePerYear, (a,b) =>this.scoreValue(a,b));

    const genHealthMean = d3.mean(genHealthData, (d) => d.score);

debugger;
    return (
      <g>
        <text x={520} y={60}>Mental and Physical Healthy Days</text>
        <svg x={520} y={80}>
          <Legend />

          <AvgLine data={mentalHealthDays}
                   x={520}
                   y={10}
                   width={400}
                   height={250}
                   bottomMargin={5}
                   median={16}
                   value={16}
          />

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

          {_.map(mentalHealthData, (d) => this.circleMark(xScale(d.year),yScale(d.days)))}
          {_.map(physHealthData, (d) => this.circleMark(xScale(d.year),yScale(d.days)))}

          <text x={30} y={35} transform={"rotate(-90 30 30)"} className={"axisLabel"}>Days</text>
          <text x={388} y={245} className={"axisLabel"}>Years</text>

          <XAxis x={20} y={height} />
          <YAxis x={20} y={0} />



          <circle cx={30} cy={310} r={20} fill={"#a4bec8"} />
          <text x={15} y={315}>{genHealthMean.toFixed(2)}</text>
          <text x={60} y={307}>Avg. general health indicator </text>
          <text x={60} y={323} fontSize={12} wordSpacing={2}>1=Very Good 2=Good 3=Ok 4=Poor 5=Very Poor</text>
          {/*<XAxis x={20} y={height} />*/}
        </svg>

      </g>
    )
  }

}

export default LineGraph;