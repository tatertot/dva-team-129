import React, { Component } from "react";
import * as d3 from "d3";
import _ from "lodash";

import './style.css';
import { loadData } from "./DataHandling";
import USmap from "./components/USmap/USmap";
import Controls from "./components/Controls/";
import DataContent from "./components/DataContent";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sampleData: [],
      mentalHealth: [],
      physHealth: [],
      genHealth: [],
      USstateNames: [],
      statePerCapita: [],
      phiPerEnrollee: [],
      USstateFilter: () => true,
      filteredBy: {
        USstate: "*",
      },
      USperCapitaMean: null,
      stateLabel: "Pick State",
      perCapitaChange: "--",
      perCapitaMean: "--",
      phiPerEnrolleeChange: "--",
      phiPerEnrolleeMean:"--"
    };

    this.onHover = this.onHover.bind(this)
  }



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

  statePerCapitaValue(state) {
    return {
      stateId: this.getStateId(state.State_Name),
      state: state.State_Name,
      years: {2001:parseInt(state.Y2001),2002:parseInt(state.Y2002),2003:parseInt(state.Y2003),
              2004:parseInt(state.Y2004),2005:parseInt(state.Y2005),2006:parseInt(state.Y2006),
              2007:parseInt(state.Y2007),2008:parseInt(state.Y2008),2009:parseInt(state.Y2009),
              2010:parseInt(state.Y2010),2011:parseInt(state.Y2011),2012:parseInt(state.Y2012),
              2013:parseInt(state.Y2013),2014:parseInt(state.Y2014),2015:parseInt(state.Y2015),
              2016:parseInt(state.Y2016),2017:parseInt(state.Y2017)},
      percentChange : state.Average_Annual_Percent_Growth
    };
  }

  phiPerEnrolleeValue(state) {
    return {
      stateId: this.getStateId(state.State_Name),
      state: state.State_Name,
      years: {2001:state.Y2001,2002:state.Y2002,2003:state.Y2003,2004:state.Y2004,2005:state.Y2005,2006:state.Y2006,
        2007:state.Y2007,2008:state.Y2008,2009:state.Y2009,2010:state.Y2010,2011:state.Y2011,2012:state.Y2012,
        2013:state.Y2013, 2014:state.Y2014, 2015:state.Y2015, 2016:state.Y2016, 2017:state.Y2017},
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
      scorePerYear: { 2011: state[2011], 2012: state[2012], 2013: state[2013], 2014: state[2014],
                        2015: state[2015], 2016: state[2016], 2017: state[2017]}
      };

    return null;
  }

  updateDataFilter = (filter, filteredBy) => {
    //console.log('filter', filter, filteredBy);
    this.setState({
      USstateFilter: filter,
      filteredBy: filteredBy
    });
  };

  onHover = (stateName, perCapitaChange, perCapitaMean, phiPerEnrolleeChange, phiPerEnrolleeMean) => {
    this.setState({
      stateLabel: stateName,
      perCapitaChange: perCapitaChange,
      perCapitaMean: perCapitaMean,
      phiPerEnrolleeChange: phiPerEnrolleeChange,
      phiPerEnrolleeMean: phiPerEnrolleeMean
    })
  };

  onStatUpdate = (USperCapitaMean) => {
    this.setState({USperCapitaMean: USperCapitaMean})
  }

  render() {
    const {
      usTopoJson,
      sampleData,
      mentalHealth,
      physHealth,
      genHealth,
      statePerCapita,
      phiPerEnrollee,
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

    const statePerCapitaValues = statePerCapita.map(
      state => this.statePerCapitaValue(state)
    ).filter(d => d.state !== "");

    const phiPerEnrolleeValues = phiPerEnrollee.map(
      state => this.phiPerEnrolleeValue(state)
    ).filter(d => d.state !== "");

    let zoomToState = 'all';
    if (filteredBy.USstate !== '*') {
      zoomToState = this.state.filteredBy.USstate;
    }

    const formattedPerCapitaYears = []

    const UScapita =  statePerCapitaValues.map(
      state => _.each(state.years, (a) => {
          formattedPerCapitaYears.push({'year': a});
        })
    );

    // statePerCapitaValues[0]['years']
    const capita = []
    _.map(statePerCapitaValues, (state) => {
      const values = Object.values(state["years"]);
        const mean = d3.mean(values, (d) => {
          return d;
        });
        capita.push({'state':state["state"], 'mean':mean})
    });




    //     const mentalHealthMean = d3.mean(mentalHealthData, (d) => {
    //   return d.days;
    // });
    // console.log('mental', mentalHealthMean);

    const sortedCapitas =_.sortBy(capita, ['mean', 'state']);
    const USperCapita = d3.mean(formattedPerCapitaYears, (d) => {
      return d.year;
    });

    const formattedPhiYears = []
    const phiCapita =  phiPerEnrolleeValues.map(
      state => _.each(state.years, (a,b) => {
          formattedPhiYears.push({'year': a, 'test':b});
        })
    );

    const phiPerCapitaMean = d3.mean(formattedPhiYears, (d) => {
      return d.year;
    });

    const mentalMean = []
    _.map(mentalHealthDays, (state) => {
      const values = Object.values(state["numDaysPerYear"]);
        const mean = d3.mean(values, (d) => {
          return d;
        });
        mentalMean.push({'state':state["state"], 'mean':mean})
    });
    let USmentalMean = 0;
    USmentalMean = d3.mean(mentalMean, (d) => {
      return d.mean;
    });

    const getMentalMean= () => {
      if (USmentalMean > 0) {
        return USmentalMean.toFixed(2);
      }
      return USmentalMean;
    }

    let physicalMean = []
    _.map(physHealthDays, (state) => {
      const values = Object.values(state["numDaysPerYear"]);
        const mean = d3.mean(values, (d) => {
          return d;
        });
        physicalMean.push({'state':state["state"], 'mean':mean})
    });

    let USphysicalMean = 0;
    USphysicalMean = d3.mean(physicalMean, (d) => {
      return d.mean;
    });


    const getUSphysicalMean= () => {
      if (USphysicalMean > 0) {
        return USphysicalMean.toFixed(2);
      }
      return 0;
    }

    // console.log('us capita mean', USperCapitaMean);

    // if (USperCapitaMean) {
    //   this.setState({USperCapitaMean});
    // }

    return (
       <div className="App container" id="main">
         <h1 style={{"marginBottom":"15px"}}>Health Care Spending and Healthiness in the US</h1>
         <p style={{"marginTop":"15px"}}><strong>Project Summary: </strong>The project attempts to show the relationship between health care spending and overall healthiness using data from
           the Behavioral Risk Factor Surveillance System (BRFSS) and from the Centers for Medicare and Medicaid Services (CMS).
           The visualization shows the comparison of health and spending across the US and for each state.
         </p>
         {/*<div>{sortedCapitas[0].state}</div>*/}
         <Controls
           data={sampleData}
           updateDataFilter={this.updateDataFilter}
           />
         <svg width="1000" height="550">
           <rect x={0} y={0} width={1000} height={550} fill={"#fcf8f5"} ></rect>
           <USmap usTopoJson={usTopoJson}
                  USstateNames={USstateNames}
                  x={0}
                  y={50}
                  width={500}
                  height={400}
                  zoomToState={zoomToState}
                  values={stateValues}
                  updateDataFilter={this.updateDataFilter}
                  onHover={this.onHover}
                  stateData={this.state.label}
                  statePerCapitaValues={statePerCapitaValues}
                  phiPerEnrolleeValues={phiPerEnrolleeValues}
           />

           <rect x={0} y={425} width={500} height={125} fill={"#dae3df"} ></rect>
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
                        genHealthScore={genHealthDays}
                        statePerCapitaValues={statePerCapitaValues}
                        onStatUpdate={this.onStatUpdate}
                        USperCapitaMean={USperCapita}
                        USmentalMean={getMentalMean()}
                        USphysicalMean={getUSphysicalMean()}
                        phiPerCapitaMean={phiPerCapitaMean}
                        sortedCapitas={sortedCapitas}
           />
           <rect x={1} y={1} width={500} height={40} fill={"#023446"} ></rect>
           <text x={15} y={28} fill={"#abe2c9"} fontSize={20} fontWeight={"500"}>Healthcare Spending in the US</text>

           <rect x={0} y={0} width={1000} height={550} fill={"none"} stroke={"black"} ></rect>

           <text x={15} y={450} className={"stateData"} fontWeight={"bold"}>Health Care Spending by State (2000-2017)</text>
           <text x={15} y={472} className={"stateData"}>State: {this.state.stateLabel}</text>
           <text x={15} y={495} className={"stateData"} fontWeight={"bold"} fontSize={13}>State Medicaid</text>
           <text x={15} y={515} className={"stateData"}>Ave. Yearly Increase: {this.state.perCapitaChange}%</text>
           <text x={15} y={535} className={"stateData"}>Per Capita: ${this.state.perCapitaMean}</text>
           <text x={250} y={495} className={"stateData"} fontWeight={"bold"} fontSize={13}>Private Health Insurance</text>
           <text x={250} y={515} className={"stateData"}>Ave. Yearly Increase: {this.state.phiPerEnrolleeChange}%</text>
           <text x={250} y={535} className={"stateData"}>Per Capita: ${this.state.phiPerEnrolleeMean}</text>
         </svg>

       </div>
    );
  }
}

export default App;
  // getUSphiMean = () => {
  //   console.log('phi mean',this.phiPerEnrolleeValue);
  //   // debugger;
  // }

    // const capitaByState = () => {
    //   for (let i=0; i < statePerCapitaValues.length - 1; i++) {
    //   // for (let j = 0; j < statePerCapitaValues[i]["years"].length - 1; j++) {
    //   //   console.log('capita', i, j, statePerCapitaValues[i]['years'][j]);
    //   // }
    //     const values = Object.values(statePerCapitaValues[i]["years"]);
    //     const mean = d3.mean(values, (d) => {
    //       return d
    //     });
    //     capita.push({i: mean})
    //   }
    //   debugger;
    // }


    // const eachCapita = []
    // const test = formattedCapita
    // _.each(formattedPerCapita, (d) => {
    //   stateCapita = d3.mean(d, (i) => {
    //     return i.year;
    //   });
    //   eachCapita.push({'mean': stateCapita});
    // }
