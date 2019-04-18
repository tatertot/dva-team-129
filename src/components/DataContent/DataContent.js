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
    const { zoomToState, values, mentalHealthDays, physHealthDays, genHealthScore, statePerCapitaValues, USperCapitaMean, phiPerCapitaMean } = this.props;


    // const formattedPerCapitaYears = []
    //   this.state.statePerCapitaValues.map(
    //   state => _.each(state.years, (a,b) => {
    //       formattedPerCapitaYears.push({'year': a});
    //     })
    // );
    //
    // const USperCapitaMean = d3.mean(formattedPerCapitaYears, (d) => {
    //   return d.year;
    // })

    //this.props.onStatUpdate(USperCapitaMean);
    let capitaMean = 0;
    if(USperCapitaMean > 0) {
       capitaMean = USperCapitaMean.toFixed(2)
    }

    let phiMean = 0;
    if(phiPerCapitaMean > 0) {
       phiMean = phiPerCapitaMean.toFixed(2)
    }


    if (zoomToState !== 'all') {
      return (
        <g>
          <StateTitle zoomToState={zoomToState} values={values} />
          <LineGraph  zoomToState={zoomToState}
                      mentalHealthDays={mentalHealthDays}
                      physHealthDays={physHealthDays}
                      genHealthScore={genHealthScore} />
          <text x={520} y={470}>$X,XXX per capita health care spending (average)</text>
        </g>
      )
    }
    else {
      return (
        <g>
        <text x={520} y={30} fontSize={20} fontWeight={"bold"} fill={"#023446"}>Overall US Healthcare Spending</text>
          <text x={520} y={80} fontSize={18} fill={"rgb(8, 48, 107)"}><tspan className="spending">${phiMean}</tspan> average private healthcare per enrollee</text>
          <text x={520} y={110} fontSize={18} fill={"rgb(8, 48, 107)"}><tspan className="spending">${capitaMean}</tspan> average per capita</text>

        <text x={520} y={150} fontSize={18} fontWeight={"bold"}>Top 3 states with highest per capita</text>
        <text x={520} y={180} fontSize={18} fill={"rgb(8, 48, 107)"}>1. State: $xxxx</text>
        <text x={520} y={210} fontSize={18} fill={"rgb(8, 48, 107)"}>2. State: $xxxx</text>
        <text x={520} y={240} fontSize={18} fill={"rgb(8, 48, 107)"}>3. State: $xxxx</text>

        <text x={520} y={270} fontSize={18} fontWeight={"bold"} fill={"#023446"}>Average Percent Increase</text>
        <text x={520} y={300} fontSize={18} fill={"rgb(8, 48, 107)"}>XX%</text>

        <text x={520} y={330} fontSize={18} fontWeight={"bold"} fill={"#023446"}>Top 3 states with highest % increase</text>
        <text x={520} y={360} fontSize={18} fill={"rgb(8, 48, 107)"}>1. State: xx%</text>
        <text x={520} y={390} fontSize={18} fill={"rgb(8, 48, 107)"}>2. State: x%</text>
        <text x={520} y={420} fontSize={18} fill={"rgb(8, 48, 107)"}>3. State: x%</text>
        </g>)
    }
  }
}

export default DataContent;