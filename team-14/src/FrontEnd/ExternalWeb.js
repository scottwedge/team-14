import './ExternalWeb.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React , { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import APIs from '../../APIs';

class ExternalWeb extends Component {
  render() {
    const options = [
      'one', 'two', 'three'
    ]
    const defaultOption = options[0]
    return (
    <div className="App">
      {/* <Router>
        <Link to="/internal"><button>Log in</button></Link>
      </Router> */}
      <div className="container">
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