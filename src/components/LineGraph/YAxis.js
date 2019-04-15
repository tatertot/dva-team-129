import * as d3 from "d3";
import D3blackbox from "../D3blackbox";

const YAxis = D3blackbox(function() {

  const scale = d3
    .scaleLinear()
    .domain([31, 0])
    .range([0, 250]);
  const axis = d3.axisLeft(scale)
                .tickFormat(d3.format('d'))
                .ticks(6);

  d3.select(this.anchor.current).call(axis);
});

export default YAxis;