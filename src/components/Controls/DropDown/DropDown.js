import React from "react";

class DropDown extends React.Component {

  selectUSstate = ( event, newState ) => {
    // this.setState({value: event.target.value});
    let selected = event.target.value;
    this.props.updateDataFilter( selected, !newState);
  };

  _addOption(name){
    if (name !== "") {
      let key = `toggle-${name}`,
      label = name;

    if (this.props.capitalize) {
      label = label.toUpperCase();
    }

    return <option
              label={label}
              name={name}
              key={key}
              value={ name }
            >
              {name}
            </option>
    }
  }

  render() {
    const {toggleNames} = this.props;
    return (
      <div id="stateDropDown">
        <select onChange={this.selectUSstate}>
          <option value="all">Select State</option>
          <option value="all">Show All States</option>
          {toggleNames.map(name => this._addOption(name))}
        </select>
      </div>
    )

  }
}

export default DropDown;