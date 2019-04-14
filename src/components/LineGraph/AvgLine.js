// src/components/LineGraph/AvgLine.js

import React from "react";
import * as d3 from "d3";

const AvgLine = ({
  data,
  value,
  width,
  height,
  x,
  y,
  bottomMargin,
  median
}) => {
  const yScale = d3
          .scaleLinear()
          .domain([0, 30])
          .range([height - y - bottomMargin, 0]),
          line = d3.line()([[0, 5], [width, 5]]);

  const avgValue = median || d3.mean(data, value);

  const translate = `translate(${20}, ${yScale(avgValue)})`,
        label = `Placeholder avg num days: 16 days`;

  return (
      <g className="avgLine" transform={translate}>
          <text
              x={width - 5}
              y="0"
              textAnchor="end"
              fontSize={12}
              fill={"darkgray"}
          >
              {label}
          </text>
          <path d={line} fill={"none"} stroke={"gray"}/>
      </g>
  );
};

export default AvgLine;