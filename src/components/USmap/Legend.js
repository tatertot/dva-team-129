// src/components/USstate/Legend.js
import D3blackbox from "../D3blackbox";
import * as d3 from "d3";
import React, {Component} from "react";
import _ from "lodash";

const color = d3.scaleThreshold().domain(d3.range(1, 10)).range(d3.schemeGreens[9]);

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

const xScale = d3.scaleLinear()
  .domain([1, 10])
  .rangeRound([1,10]);


class Legend extends Component {

  render() {

    return (
      <g>
        {ChoroplethColors.map(function (d,i) {
          if (d[0] == null) d[0] = xScale.domain()[0];
          if (d[1] == null) d[1] = xScale.domain()[1];
          return (
            <g key={i}><rect
                style={{fill: ChoroplethColors[i], width: 20, height: 20}}
                y={20*i}
                title={null}
            />
            <text fontSize={10} x={22} y={20*i}>{i}%</text>
            </g>
          )
          }
        )};
      </g>

    );
  };
}

export default Legend;