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

  dollarValue(a,b) {
    return {
      year: parseInt(b),
      amount: parseInt(a)
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
        style={{fill: "white", width: 2, height: 2, stroke: 'gray'}}
        cx={year + 20}
        cy={days}
        title={null}
        r={3}
      />
    )
  }

  label(year,yAmount,amount){
    return (
      <text
        key={year}
        style={{fill: "black", width: 2, height: 2, stroke: 'none', fontSize: '10'}}
        x={year + 22}
        y={156 + yAmount}
        title={null}
        r={3}
      >
        ${amount.toLocaleString()}
      </text>
    )
  }

  render() {

    const { zoomToState, values, mentalHealthDays, physHealthDays, genHealthScore, statePerCapitaValues,
      USmentalMean, USphysicalMean} = this.props;


    const height = 250;
    const width = 400;

    const xScale  = d3.scaleLinear()
      .domain([2011, 2017]).range([0,width])

    const yScaleCapita = d3.scaleLinear()
      .domain([0, 14000]).range([120, 0])

    const yScale = d3.scaleLinear()
      .domain([0, 31])
      .range([height, 0])

    const line = d3.line()
      .x((d)=>xScale(d.year) + 20)
      .y((d)=>yScale(d.days))

     const capitaLine = d3.line()
      .x((d)=>xScale(d.year) + 20)
      .y((d)=>yScaleCapita(d.amount))

    const mentalData = _.find(mentalHealthDays, {state:zoomToState});
    const physData = _.find(physHealthDays, {state:zoomToState});
    const genData = _.find(genHealthScore, {state:zoomToState});
    const capitaData = _.find(statePerCapitaValues, {state:zoomToState});

    const mentalHealthData =  _.map(mentalData.numDaysPerYear, (a,b) =>this.yearValue(a,b));
    const physHealthData =  _.map(physData.numDaysPerYear, (a,b) =>this.yearValue(a,b));
    const genHealthData =  _.map(genData.scorePerYear, (a,b) =>this.scoreValue(a,b));

    const perCapitaData = _.map(capitaData.years, (a,b) =>this.dollarValue(a,b));
    const perCapitaSlice = perCapitaData.slice(10, 18);
    const genHealthMean = d3.mean(genHealthData, (d) => d.score);

    return (
      <g>
        <text x={575} y={65} fontWeight={"bold"} fill={"rgb(63, 59, 54)"}>Mental and Physical Healthy Days Per Month</text>
        <svg x={520} y={80}>
          <Legend />
          {/*<text*/}
              {/*x={width +20}*/}
              {/*y={yScale(USmentalMean) - 12}*/}
              {/*textAnchor="end"*/}
              {/*fontSize={12}*/}
              {/*fill={"gray"}*/}
          {/*>US average*/}
          {/*</text>*/}

          <AvgLine x={520}
                   y={10}
                   width={400}
                   height={250}
                   bottomMargin={5}
                   mean={USmentalMean}
                   lineColor={"purple"}
          />
          <AvgLine x={520}
                   y={10}
                   width={400}
                   height={250}
                   bottomMargin={5}
                   mean={USphysicalMean}
                   lineColor={"magenta"}
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
          <svg y={135}>
            <path className="line"
               d={capitaLine(perCapitaSlice)}
               fill={"none"}
               stroke={"darksalmon"}
               strokeWidth={2}
            />
            {_.map(perCapitaSlice, (d) => this.circleMark(xScale(d.year),yScaleCapita(d.amount)))}
          </svg>
          {_.map(perCapitaSlice, (d) => this.label(xScale(d.year),yScaleCapita(d.amount), d.amount))}

          {_.map(mentalHealthData, (d) => this.circleMark(xScale(d.year),yScale(d.days)))}
          {_.map(physHealthData, (d) => this.circleMark(xScale(d.year),yScale(d.days)))}


          <text x={30} y={35} transform={"rotate(-90 30 30)"} className={"axisLabel"} fill={'rgb(111, 106, 101)'}>Days</text>
          <text x={388} y={245} className={"axisLabel"} fill={'rgb(111, 106, 101)'}>Years</text>

          <XAxis x={20} y={height} />
          <YAxis x={20} y={0} />



          <circle cx={80} cy={330} r={30} fill={"#a4bec8"} />
          <text x={65} y={335} fontWeight={"bold"}>{genHealthMean.toFixed(2)}</text>
          <text x={120} y={327} fontWeight={"bold"}>Avg. general health indicator </text>
          <text x={120} y={343} fontSize={12} wordSpacing={2}>1=Very Good 2=Good 3=Ok 4=Poor 5=Very Poor</text>
          <text x={20} y={390} dy={0} width={200} height={50} fontSize={12}>
            <tspan x={20} dy={"1.2em"}>Respondants answered a series of questions which were distilled into general,</tspan>
            <tspan x={20} dy={"1.2em"}>physical and mental health scores.  For a summary on the analysis, take a</tspan>
            <tspan x={20} dy={"1.2em"}>look at our
            <tspan className={"datalink"}> <a href="https://github.gatech.edu/Team129/BRFSSProject/blob/master/models/brfss_data_lib.ipynb">
               BRFSS Survey Questions Analysis</a></tspan>.</tspan>
          </text>
        </svg>

      </g>
    )
  }

}

export default LineGraph;