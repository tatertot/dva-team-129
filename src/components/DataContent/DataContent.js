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
    const { zoomToState, values, mentalHealthDays, physHealthDays, genHealthScore, statePerCapitaValues, USperCapitaMean,
      phiPerCapitaMean, sortedCapitas, USmentalMean, USphysicalMean, capitaMeanPercentage, phiMeanPercentage} = this.props;

    let capitaMean = 0;
    if(USperCapitaMean > 0) {
       capitaMean = parseInt((USperCapitaMean.toFixed(2))).toLocaleString();
    }

    //should manage in state put running out of time to set up properly
    let phiMean = 0;
    if(phiPerCapitaMean > 0) {
       phiMean = parseInt((phiPerCapitaMean)).toLocaleString();
    }
    let USavgPhi = 0;
    if(phiMeanPercentage > 0) {
       USavgPhi = phiMeanPercentage.toFixed(2);
    }
    let USavgCapita = 0;
    if(capitaMeanPercentage > 0) {
       USavgCapita = capitaMeanPercentage.toFixed(2);
    }

    let cap1, cap2, cap3, cap4, cap5, cap6;
    let st1, st2, st3, st4, st5, st6;
    cap1=cap2=cap3=cap4=cap5=cap6=st1=st2=st3=st4=st5=st6 = "--";

    if (sortedCapitas.length > 0) {

      st1 = sortedCapitas[50].state;
      st2 = sortedCapitas[49].state;
      st3 = sortedCapitas[48].state;
      st4 = sortedCapitas[2].state;
      st5 = sortedCapitas[1].state;
      st6 = sortedCapitas[0].state;

      cap1 = parseInt((sortedCapitas[50].mean)).toLocaleString();
      cap2 = parseInt((sortedCapitas[49].mean)).toLocaleString();
      cap3 = parseInt((sortedCapitas[48].mean)).toLocaleString();
      cap4 = parseInt((sortedCapitas[2].mean)).toLocaleString();
      cap5 = parseInt((sortedCapitas[1].mean)).toLocaleString();
      cap6 = parseInt((sortedCapitas[0].mean)).toLocaleString();
    }

    if (zoomToState !== 'all') {
      return (
        <g>
          <StateTitle zoomToState={zoomToState} values={values} />
          <LineGraph  zoomToState={zoomToState}
                      mentalHealthDays={mentalHealthDays}
                      physHealthDays={physHealthDays}
                      genHealthScore={genHealthScore}
                      statePerCapitaValues={statePerCapitaValues}
                      USmentalMean={USmentalMean}
                      USphysicalMean={USphysicalMean} />
        </g>
      )
    }
    else {

      return (
        <g>
          <text x={530} y={40} fontSize={20} fontWeight={"bold"} fill={"#023446"}>Overall US Healthcare Spending (2000-2017)</text>

          <text x={530} y={80} fontSize={18} fontWeight={"bold"} fill={"#023446"}>Average Percent Increase</text>
          <text x={530} y={110} fontSize={16} fill={"rgb(8, 48, 107)"}><tspan className="spending">{USavgCapita}%</tspan> Medicaid</text>
          <text x={530} y={140} fontSize={16} fill={"rgb(8, 48, 107)"}><tspan className="spending">{USavgPhi}%</tspan> Private Health Insurance</text>

          <text x={530} y={190}fontSize={18} fontWeight={"bold"}>Average Spending</text>
          <text x={530} y={220} fontSize={16} fill={"rgb(8, 48, 107)"}><tspan className="spending">${capitaMean}</tspan> per capita</text>
          <text x={530} y={250} fontSize={16} fill={"rgb(8, 48, 107)"}><tspan className="spending">${phiMean}</tspan> per enrollee (private health insurance)</text>

          <text x={530} y={300} fontSize={18} fontWeight={"bold"}>States with highest per capita spending</text>
          <text x={530} y={330} fontSize={16} fill={"rgb(8, 48, 107)"}>1. {st1}: ${cap1}</text>
          <text x={530} y={350} fontSize={16} fill={"rgb(8, 48, 107)"}>2. {st2}: ${cap2}</text>
          <text x={530} y={370} fontSize={16} fill={"rgb(8, 48, 107)"}>3. {st3}: ${cap3}</text>

          <text x={530} y={410} fontSize={18} fontWeight={"bold"}>States with lowest per capita spending</text>
          <text x={530} y={440} fontSize={16} fill={"rgb(8, 48, 107)"}>1. {st6}: ${cap6}</text>
          <text x={530} y={460} fontSize={16} fill={"rgb(8, 48, 107)"}>2. {st5}: ${cap5}</text>
          <text x={530} y={480} fontSize={16} fill={"rgb(8, 48, 107)"}>3. {st4}: ${cap4}</text>


        </g>)
    }
  }
}

export default DataContent;