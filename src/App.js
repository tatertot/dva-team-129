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
  stateValue(state) {
   // console.log('state', state)
    return {
      stateId: this.getStateId(state.State_Name),
      state: state.State_Name,
      percentChange : state.Average_Annual_Percent_Growth
    };
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
      USstateNames,
      filteredBy
    } = this.state;

    const stateValues = sampleData.map(
      state => this.stateValue(state)
    ).filter(d => d.state !== "");

    let zoomToState = 'all';
    // console.log('filteredBy', filteredBy, filteredBy.USstate,  filteredBy.USstate !== '*');
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
         <svg width="960" height="500">
             {/*<rect x={0} y={0} width={500} height={500} fill={"#fcf8f5"} ></rect>*/}

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
                 width="600"
                 height="500"
                 style={{ fill: "#fcf8f5" }}
           />
           <DataContent zoomToState={zoomToState} values={stateValues} />



         </svg>
       </div>
    );
  }
}

export default App;
