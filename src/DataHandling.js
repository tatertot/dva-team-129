import * as d3 from 'd3';
import _ from 'lodash';

const cleanUSStateName = d => ({
    code: d.code,
    id: Number(d.id),
    name: d.name
});


// _.noop returns undefined
export const loadData = (callback = _.noop) => {
    Promise.all([
        d3.json("data/us.json"), //state paths
        d3.csv("data/sample.csv"),
        d3.tsv("data/us-state-names.tsv", cleanUSStateName)
    ]).then(([us, sampleData, USstateNames]) => {
        console.log('hello data');
        callback({
          usTopoJson: us,
          sampleData: sampleData,
          USstateNames: USstateNames
        });
    });
};