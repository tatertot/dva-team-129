import React, { Component } from "react";
import * as d3 from "d3";
import _ from "lodash";

import './style.css';
import { loadData } from "./DataHandling";
import USmap from "./components/USmap/USmap"


class App extends Component {
  state = {
    sampleData: [],
    USstateNames: []
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
  stateValue(state) {
   // console.log('state', state)
    return {
      stateId: this.getStateId(state.State_Name),
      state: state.State_Name,
      percentChange : state.Average_Annual_Percent_Growth
    };
  }

  render() {
    const {
      usTopoJson,
      sampleData,
      USstateNames
    } = this.state;

    const stateValues = sampleData.map(
      state => this.stateValue(state)
    ).filter(d => d.state !== "");

    return (
       <div className="App container">
         <h1>Health Care Spending per State</h1>
         <h2>Annual Average Percentage Growth From Medicaid Enrollment 2011-2014</h2>
         <svg width="960" height="600">
           <USmap usTopoJson={usTopoJson}
                  USstateNames={USstateNames}
                  x={0}
                  y={0}
                  zoom={1}
                  values={stateValues}
           />
         </svg>
       </div>
    );
  }
}

export default App;
