// src/components/USstate/Legend.js
import D3blackbox from "../D3blackbox";
import * as d3 from "d3";
import React, {Component} from "react";
import _ from "lodash";

const lineColors = ['purple', 'magenta', 'tomato'];
const lineTitles = ['Mental Health', 'Physical Health', 'General Health']


class Legend extends Component {

  render() {

    return (
      <g>
        {lineColors.map(function (d,i) {
          return (
            <g key={i}>
              <circle
                style={{fill: lineColors[i], width: 20, height: 20, stroke: 'black'}}
                cx={10}
                cy={300+20*i}
                title={lineTitles[i]}
                r={6}
              />
              <text fontSize={12} x={27} y={305+20*i}>{lineTitles[i]}</text>
            </g>
          )
          }
        )};
      </g>

    );
  };
}

export default Legend;

//
// // Handmade legend
// svg.append("circle").attr("cx",200).attr("cy",130).attr("r", 6).style("fill", "#69b3a2")
// svg.append("circle").attr("cx",200).attr("cy",160).attr("r", 6).style("fill", "#404080")
// svg.append("text").attr("x", 220).attr("y", 130).text("variable A").style("font-size", "15px").attr("alignment-baseline","middle")
// svg.append("text").attr("x", 220).attr("y", 160).text("variable B").style("font-size", "15px").attr("alignment-baseline","middle")
