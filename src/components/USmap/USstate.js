// src/components/USstate/USstate.js
import React, { Component } from "react";
import * as d3 from 'd3';
import _ from "lodash";

const ChoroplethColors = [
    'rgb(222,235,247)',
    'rgb(198,219,239)',
    'rgb(158,202,225)',
    'rgb(107,174,214)',
    'rgb(66,146,198)',
    'rgb(33,113,181)',
    'rgb(8,81,156)',
    'rgb(8,48,107)'
];

const blankColor = 'rgb(198,219,239)';

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
    const { value, geoPath, feature, quantize, statePerCapitaValues, phiPerEnrolleeValues } = this.props;
    let color = blankColor;
    if (value) {
      color = ChoroplethColors[quantize(value)];
    }

    const highlight = () => {

      const stateName = _.find(this.props.USstateNames, { id: parseInt(this.pRef.current.attributes.title.value) }).name;
      const perCapitaChange = _.find(statePerCapitaValues, {state: stateName}).percentChange;

      const years = _.find(statePerCapitaValues, {state: stateName}).years
      const formattedYears = []
        _.each(years, (a,b) => {
          formattedYears.push({'year': a});
        });

      const perCapitaMean = d3.mean(formattedYears, (d) => {
        return d.year;
      });

      const phiPerEnrolleeChange = _.find(phiPerEnrolleeValues, {state:stateName}).percentChange;
      const phiYears = _.find(phiPerEnrolleeValues, {state: stateName}).years;
      const phiFormattedYears = []
        _.each(phiYears, (a,b) => {
          phiFormattedYears.push({'year': a});
        });
      const phiPerEnrolleeMean = d3.mean(phiFormattedYears, (d) => {
        return d.year;
      });

      this.props.onHover(
        stateName,
        perCapitaChange,
        perCapitaMean.toFixed(2),
        phiPerEnrolleeChange,
        phiPerEnrolleeMean.toFixed(2)
      );
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