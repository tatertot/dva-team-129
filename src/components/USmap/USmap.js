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
      quantize: d3.scaleQuantize().range(d3.range(10)),
      projection
    };
  }

  // getDerivedStateFromProps gets called on every component render,
  // otherwise viz would be one update behind, however,
  // need to avoid complex calculation, check performance, use memoization, etc
  static getDerivedStateFromProps(props, state) {
    let { projection, quantize, geoPath } = state;
    // need for zooming
    // console.log('props', props)
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
        console.log('zoom: ', id);
        projection.scale(props.width * 4.5);

      const centroid = geoPath.centroid(_.find(statePaths, { id: id })),
        translate = projection.translate();

        projection.translate([
          translate[0] - centroid[0] + props.width/2 + 20,
          translate[1] - centroid[1] + props.height/2 + 50
      ]);
    }

    if (props.values) {
      quantize.domain([0,11]);
    }

    return {
      ...state,
      projection,
      quantize
    };
  }

  getValue(id) {
    // console.log('prop vals', this.props.values);
    const row = _.find(this.props.values, {stateId: id});

    if (row) {
      // console.log('log',id, row.percentChange);
      return row.percentChange;
    }
    return null;
  }



  render() {

    const { geoPath, quantize } = this.state,
      { usTopoJson, values, zoomToState } = this.props;

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
        //console.log('USstates>>>>', USstates);

        // console.log('values', values);
        const stateValueMap = _.fromPairs(
          values.map(d => [d.stateId, d.percentChange])
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
              // value={this.getValue(feature.id)}
              value={stateValueMap[feature.id]}
              quantize={quantize}
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