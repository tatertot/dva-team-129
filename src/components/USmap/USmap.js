// src/components/USmap/USmap.js

import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import _ from 'lodash';

import USstate from './USstate';
import Legend from './Legend';

class USmap extends Component {
  constructor(props) {
    super(props);

    const projection = d3.geoAlbersUsa().scale([1000]); // scale things down so see entire US;
    this.state = {
      geoPath: d3.geoPath().projection(projection),
      quantize: d3.scaleQuantize().range(d3.range(9)),
      projection
    };
  }

  // getDerivedStateFromProps gets called on every component render,
  // otherwise viz would be one update behind, however,
  // need to avoid complex calculation, check performance, use memoization, etc
  static getDerivedStateFromProps(props, state) {
    let { projection, quantize, geoPath } = state;
    // need for zooming
    projection.translate([props.width/2 + 20, props.height/2])
      .scale(props.width * 1.2);

    // remove ! to enable zoom
    if (props.zoomToState == 'all') {
      projection.scale(props.width * 1.2);
    }
    else if (props.zoomToState && props.usTopoJson) {

      const us = props.usTopoJson,
        statePaths = topojson.feature(us, us.objects.states).features,
        id = _.find(props.USstateNames, { name: props.zoomToState }).id;
        projection.scale(props.width * 4.5);

      const centroid = geoPath.centroid(_.find(statePaths, { id: id })),
        translate = projection.translate();

        projection.translate([
          translate[0] - centroid[0] + props.width/2 + 20,
          translate[1] - centroid[1] + props.height/2 + 50
      ]);
    }

    if (props.values) {
      quantize.domain([0,9]);
    }

    return {
      ...state,
      projection,
      quantize
    };
  }

  getValue(id) {
    const row = _.find(this.props.statePerCapita, {stateId: id});

    if (row) {

      return row.percentChange;
    }
    return null;
  }

  // Us if we wanted to show per capita $$ for choropleth
  getDollarValue(id) {

    debugger;
    const name = _.find(this.props.USstateNames, {stateId: id}).name;
    const row = _.find(this.props.sortedCapitas, {name: name})
    if (row) {

      return row.mean;
    }
    return null;
  }


  render() {

    const { geoPath, quantize, hover } = this.state,
      { usTopoJson, values, zoomToState, updateDataFilter, onHover, statePerCapitaValues, phiPerEnrolleeValues,
      sortedCapitas} = this.props;

    if (!usTopoJson) {
      return null;
    } else {

      const us = usTopoJson,
        USstateMesh = topojson.mesh(
          us,
          us.objects.states,
          (a,b) => a !== b
        ),
        USstates = topojson.feature(us, us.objects.states).features;

        // console.log('values', values);
        const stateValueMap = _.fromPairs(
          values.map(d => [d.stateId, d.percentChange])
        );
      const perCapitaValueMap = _.fromPairs(
          statePerCapitaValues.map(d => [d.stateId, d.percentChange])
        );

      const perCapitaDollarValueMap = _.fromPairs(
          sortedCapitas.map(d => [d.id, d.mean])
        );

        // console.log('values', stateValueMap);
      return (

        <g className="states">
          {USstates.map(feature => (
            <USstate
              geoPath={geoPath}
              feature={feature}
              zoomToState={zoomToState}
              key={feature.id}
              value={perCapitaValueMap[feature.id]}
              // dollarValue={perCapitaDollarValueMap[feature.id]}
              quantize={quantize}
              updateDataFilter={updateDataFilter}
              stateName={feature.id}
              USstateNames={this.props.USstateNames}
              hover={hover}
              onHover={onHover}
              statePerCapitaValues={statePerCapitaValues}
              phiPerEnrolleeValues={phiPerEnrolleeValues}
            />
          ))};
          <path d={geoPath(USstateMesh)}
                style={{
                fill: "none",
                stroke: "#023446",
                strokeLineJoin: "round"
                }}
          />
          <Legend x={0} y={0} />

        </g>
      );
    }
  }
}
export default USmap;