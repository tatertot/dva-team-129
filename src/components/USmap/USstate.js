// src/components/USstate/USstate.js
import React, { Component } from "react";
import * as d3 from 'd3';
import _ from "lodash";

const ChoroplethColors = [
    'rgb(247,251,255)',
    'rgb(222,235,247)',
    'rgb(198,219,239)',
    'rgb(158,202,225)',
    'rgb(107,174,214)',
    'rgb(66,146,198)',
    'rgb(33,113,181)',
    'rgb(8,81,156)',
    'rgb(8,48,107)'
];

const BlankColor = 'rgb(198,219,239)';

class USstate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      USstateFilter: () => true,
      USstate: "*",
    }
  }


  // need to create for interaction between d3 and react
  pRef = React.createRef();

  componenetDidMount() {
    let [USstate] = window.location.hash
            .replace("#", "")
            .split("-");

    if (USstate !== "*" && USstate) {
      this.updateUSstateFilter(USstate);
    }
  }

  updateUSstateFilter = (USstate, reset) => {

    let filter = d => d.State_Name === USstate;

    this.setState(
      {
        USstateFilter: filter,
        USstate: USstate,
      },
      () => this.notifyUpdate()
    );
  }

  // Rudimentary "routing"
  notifyUpdate(){
    window.location.hash = [this.state.USstate || "*"].join("-");
    this.props.updateDataFilter(
      (filters => {
        return d => filters.USstateFilter(d);
      })(this.state),
      {
        USstate: this.state.USstate
      }
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { zoomToState, value } = this.props;
    return zoomToState !== nextProps.zoomToState || value !== nextProps.value;
  }

  getStateName() {
    return  _.find(this.props.USstateNames, { id: parseInt(this.pRef.current.attributes.title.value) }).name;
  }

  // getPerCapitaChange() {
  //   return _.find(this.props.statePerCapitaValues, {state: stateName}).percentChange;
  //
  // }


  selectUSstate = (event, newState) => {
    const stateName = _.find(this.props.USstateNames, { id: parseInt(this.pRef.current.attributes.title.value) }).name;
    // this.props.updateDataFilter(stateName, !newState)
    this.updateUSstateFilter(stateName)
  };

  render() {
    const { value, geoPath, feature, quantize, statePerCapitaValues } = this.props;
    let color = BlankColor;
    if (value) {
      //console.log('perCapita', perCapita);
      color = ChoroplethColors[quantize(value)];
    }
    const xScale = d3.scaleLinear();
    var data = [
      {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
      {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
      {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
      {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
    ];
    // const d3mean = d3.mean(data, function(d) { return d.land_area; });
    //console.log('d3', xScale, d3mean);
    const highlight = () => {

      const stateName = _.find(this.props.USstateNames, { id: parseInt(this.pRef.current.attributes.title.value) }).name;
      const perCapitaChange = _.find(this.props.statePerCapitaValues, {state: stateName}).percentChange;

      const years = _.find(this.props.statePerCapitaValues, {state: stateName}).years
      const formattedYears = []
        _.each(years, (a,b) => {
          formattedYears.push({'year': a});
        });

      const perCapitaMean = d3.mean(formattedYears, (d) => {
        return d.year;
      });
      //const perCapita = d3.mean(this.props.statePerCapitaValues, (d) => d.year);
      this.props.onHover(stateName, perCapitaChange, perCapitaMean.toFixed(2));
    }

    return (
      <path d={geoPath(feature)}
            style={{fill:color}}
            title={feature.id}
            className="state-borders"
            onMouseOver={highlight.bind(this)}
            onClick={this.selectUSstate.bind(this)}
            ref={this.pRef}

      />
    );
  }
}

export default USstate;