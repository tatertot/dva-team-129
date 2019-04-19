// src/components/LineGraph/AvgLine.js

import React from "react";
import * as d3 from "d3";

const AvgLine = ({
  value,
  width,
  height,
  x,
  y,
  bottomMargin,
  mean,
  lineColor
}) => {
  const yScale = d3
          .scaleLinear()
          .domain([0, 30])
          .range([height - y - bottomMargin, 0]),
          line = d3.line()([[0, 5], [width, 5]]);

  const avgValue = mean;

  const translate = `translate(${20}, ${yScale(avgValue)})`,
        label = `US avg: ${mean}`;

  return (
      <g className="avgLine" transform={translate}>
        <path d={line} fill={"none"} stroke={lineColor}/>
      </g>
  );
};

export default AvgLine;