import './ExternalWeb.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React , { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// import { Link } from 'react-router-dom';


const local_host = 'http://127.0.0.1:5000/';


const response = await axios.post(
    'http://127.0.0.1:5000/api/get-strategy',
    { example: 'data' },
    { headers: { 'Content-Type': 'application/json' } }
  )
  console.log(response.data)

class ExternalWeb extends Component {
    
  render() {
    const options = [
      'one', 'two', 'three'
    ]
    const defaultOption = options[0]
    var data = this.getStrat()
    return (
    <div className="App">
      {/* <Router>
        <Link to="/internal"><button>Log in</button></Link>
      </Router> */}
      <div className="container">
        <Dropdown options={options} onChange={this._onSelect} placeholder="Select an Impact Council" />
        {/* <Dropdown options={options} onChange={this._onSelect} placeholder="Select an Indicator" /> */}
        <Dropdown options={data} onChange={this._onSelect} placeholder="Select a Strategy" />
        <button>Generate Results</button>
      </div>
    </div>
    
    );
  }
 
}



export default ExternalWeb;