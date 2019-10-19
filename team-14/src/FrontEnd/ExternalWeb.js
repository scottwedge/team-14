import React , { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class ExternalWeb extends Component {
  render() {
    const options = [
      'one', 'two', 'three'
    ]
    const defaultOption = options[0]
    return (
    <div className="App">
    <div class="container" style={{flex: 1, flexDirection: 'row'}}>
    <Dropdown options={options} onChange={this._onSelect} placeholder="Select an Impact Council" />
      <Dropdown options={options} onChange={this._onSelect} placeholder="Select an Indicator" />
      <Dropdown options={options} onChange={this._onSelect} placeholder="Select a Strategy" />
    </div>
    <button>Generate Results</button>
    </div>
    
    );
  }
 
}

export default ExternalWeb;