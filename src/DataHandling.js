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
        d3.csv("data/state_ment_health.csv"),
        d3.csv("data/state_phys_health.csv"),
        d3.csv("data/state_gen_health.csv"),
        d3.csv("data/state_per_capita.csv"),
        d3.csv("data/phi_per_enrollee.csv"),
        d3.tsv("data/us-state-names.tsv", cleanUSStateName)
    ]).then(([us,
              sampleData,
              mentalHealth,
              physHealth,
              genHealth,
              statePerCapita,
              phiPerEnrollee,
              USstateNames]) => {

        callback({
          usTopoJson: us,
          sampleData: sampleData,
          mentalHealth: mentalHealth,
          physHealth: physHealth,
          genHealth: genHealth,
          statePerCapita: statePerCapita,
          phiPerEnrollee: phiPerEnrollee,
          USstateNames: USstateNames
        });
    });
};