import React from "react";
import DropDown from './DropDown/DropDown';

class Controls extends React.Component {
  state = {
    USstateFilter: () => true,
    USstate: "*"
  }

  componenetDidMount() {
    let [USstate] = window.location.hash
            .replace("#", "")
            .split("-");

    if (USstate !== "*" && USstate) {
        this.updateUSstateFilter(USstate);
    }

  }

  updateUSstateFilter = (USstate, reset) => {

    let filter = d => d.State_Name === USstate;

    this.setState(
      {
        USstateFilter: filter,
        USstate: USstate
      },
      () => this.notifyUpdate()
    );
  }

  // Rudimentary "routing"
  notifyUpdate(){
    window.location.hash = [this.state.USstate || "*"].join("-");
    this.props.updateDataFilter(
      (filters => {
        return d => filters.USstateFilter(d);
      })(this.state),
      {
        USstate: this.state.USstate
      }
    );
  }

  render() {
    const { data } = this.props;
    const USstates = new Set(data.map(d => d.State_Name));
    // console.log('us states', USstates);

    return (
      <div>
        <DropDown
          data={data}
          toggleNames={Array.from(USstates.values())}
          selectedUSstate={this.state.USstate}
          updateDataFilter={this.updateUSstateFilter}
          />
     </div>
    );
  }
}

export default Controls;