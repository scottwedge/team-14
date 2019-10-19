import './InternalWeb.css';

import React , { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class InternalWeb extends Component {
  render() {
    const options = [
      'one', 'two', 'three'
    ]
    const defaultOption = options[0]
    return (
    <div className="App">
      <div class="container">
        <Dropdown options={options} onChange={this._onSelect} placeholder="Select an Impact Council" />
        {/* <Dropdown options={options} onChange={this._onSelect} placeholder="Select an Indicator" /> */}
        <Dropdown options={options} onChange={this._onSelect} placeholder="Select a Strategy" />
        <button>Generate Results</button>
      </div>
    </div>
    
    );
  }
 
}

export default ExternalWeb;