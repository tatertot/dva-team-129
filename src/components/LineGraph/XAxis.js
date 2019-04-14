// src/components/LineGraph/XAxis.js

import * as d3 from "d3";
import D3blackbox from "../D3blackbox";

const XAxis = D3blackbox(function() {

  const scale = d3
    .scaleLinear()
    .domain([2011, 2018])
    .range([0, 400]);
  const axis = d3.axisBottom(scale)
                .tickFormat(d3.format('d'))
                .ticks(8);

  d3.select(this.anchor.current).call(axis);
});

export default XAxis;