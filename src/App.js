import React, { Component } from "react";
import * as d3 from "d3";
import _ from "lodash";

import './style.css';
import { loadData } from "./DataHandling";
import USmap from "./components/USmap/USmap";
import Controls from "./components/Controls/";
import DataContent from "./components/DataContent";

class App extends Component {
  state = {
    sampleData: [],
    mentalHealth: [],
    physHealth: [],
    genHealth: [],
    USstateNames: [],
    USstateFilter: () => true,
    filteredBy: {
       USstate: "*",
    }
  };

  componentDidMount() {
    loadData(data => this.setState(data));
  }

  getStateId(USstate) {
    if (USstate != "") {
      let row = _.find(this.state.USstateNames, {name: USstate});
      return row.id;
    }
    return null;
  }

  getStateName(USstate) {
    if (USstate != "") {
      let row = _.find(this.state.USstateNames, {id:  parseInt(USstate.stateId)});
      return row.name;
    }
  }

  stateValue(state) {
    return {
      stateId: this.getStateId(state.State_Name),
      state: state.State_Name,
      percentChange : state.Average_Annual_Percent_Growth
    };
  }

  mentalHealthDays(state) {
      return {
      stateId: state.stateId,
      state: this.getStateName(state),
      numDaysPerYear: { 2011: state[2011], 2012: state[2012], 2013: state[2013], 2014: state[2014],
                        2015: state[2015], 2016: state[2016], 2017: state[2017]}
      };

    return null;
  }

    physHealthDays(state) {
      return {
      stateId: state.stateId,
      state: this.getStateName(state),
      numDaysPerYear: { 2011: state[2011], 2012: state[2012], 2013: state[2013], 2014: state[2014],
                        2015: state[2015], 2016: state[2016], 2017: state[2017]}
      };

    return null;
  }

    genHealthDays(state) {
      return {
      stateId: state.stateId,
      state: this.getStateName(state),
      numDaysPerYear: { 2011: state[2011], 2012: state[2012], 2013: state[2013], 2014: state[2014],
                        2015: state[2015], 2016: state[2016], 2017: state[2017]}
      };

    return null;
  }

  updateDataFilter = (filter, filteredBy) => {
    this.setState({
      USstateFilter: filter,
      filteredBy: filteredBy
    });
  };

  render() {
    const {
      usTopoJson,
      sampleData,
      mentalHealth,
      physHealth,
      genHealth,
      USstateNames,
      filteredBy
    } = this.state;

    const mentalHealthDays = mentalHealth.slice(0,51).map(
      state => this.mentalHealthDays(state)
    ).filter(d=>d.state !== "");

    const physHealthDays = physHealth.slice(0,51).map(
      state => this.physHealthDays(state)
    ).filter(d=>d.state !== "");

    const genHealthDays = genHealth.slice(0,51).map(
      state => this.genHealthDays(state)
    ).filter(d=>d.state !== "");

    const stateValues = sampleData.map(
      state => this.stateValue(state)
    ).filter(d => d.state !== "");

    let zoomToState = 'all';
    if (filteredBy.USstate !== '*') {
      zoomToState = this.state.filteredBy.USstate;
    }

    return (
       <div className="App container" id="main">
         <h1>Health Care Spending per State</h1>
         <h2>Annual Average Percentage Growth From Medicaid Enrollment 2011-2014</h2>
         <Controls
           data={sampleData}
           updateDataFilter={this.updateDataFilter}
           />
         <svg width="1000" height="550">
           <rect x={0} y={0} width={1000} height={550} fill={"#fcf8f5"} ></rect>

           <USmap usTopoJson={usTopoJson}
                  USstateNames={USstateNames}
                  x={0}
                  y={0}
                  width={500}
                  height={400}
                  zoomToState={zoomToState}
                  values={stateValues}
           />
           <rect x="500"
                 y="0"
                 width="500"
                 height="600"
                 style={{ fill: "#f6f0ea" }}
           />
           <DataContent zoomToState={zoomToState}
                        values={stateValues}
                        mentalHealthDays={mentalHealthDays}
                        physHealthDays={physHealthDays}
                        genHealthDays={genHealthDays}
           />
           <rect x={0} y={0} width={1000} height={550} fill={"none"} stroke={"black"} ></rect>

         </svg>
       </div>
    );
  }
}

export default App;
