// src/components/USstate/Legend.js
import D3blackbox from "../D3blackbox";
import * as d3 from "d3";
import React, {Component} from "react";
import _ from "lodash";

const lineColors = ['purple', 'magenta'];
const lineTitles = ['Mental Health', 'Physical Health']


class Legend extends Component {

  render() {

    return (
      <g>
        {lineColors.map(function (d,i) {
          return (
            <g key={i}>
              <circle
                style={{fill: lineColors[i], width: 20, height: 20, stroke: 'gray'}}
                cx={210 + 110*i}
                cy={20}
                title={lineTitles[i]}
                r={4}
              />
              <text fontSize={12} x={219 +110*i} y={25}>{lineTitles[i]}</text>
              <text fontSize={12} x={205 +110*i} y={40} style={{fill: lineColors[i]}}><tspan fontSize={14}>--- </tspan>US Avg</text>

            </g>
          )
          }
        )};

        <circle
            style={{fill: "darksalmon", width: 20, height: 20, stroke: 'gray'}}
            cx={30}
            cy={237}
            title={"Per Capita Spending"}
            r={4}
          />
          <text fontSize={12} x={39} y={242}>Per Capita Spending</text>

      </g>

    );
  };
}

export default Legend;