// src/components/USstate/USstate.js
import React, { Component } from "react";
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

  state = {
    USstateFilter: () => true,
    USstate: "*"
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
        USstate: USstate
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

  highlight() {
    console.log('hover, show percent change', this.props.value);
  }

  selectUSstate = (event, newState) => {
    const stateName = _.find(this.props.USstateNames, { id: parseInt(this.pRef.current.attributes.title.value) }).name;
    // this.props.updateDataFilter(stateName, !newState)
    this.updateUSstateFilter(stateName)
  }

  render() {
    const { value, geoPath, feature, quantize } = this.props;
    let color = BlankColor;

    if (value) {
      color = ChoroplethColors[quantize(value)];
    }

    return (
      <path d={geoPath(feature)}
            style={{fill:color}}
            title={feature.id}
            className="state-borders"
            onMouseOver={this.highlight.bind(this)}
            onClick={this.selectUSstate.bind(this)}
            ref={this.pRef}

       />
    );
  }
}

export default USstate;