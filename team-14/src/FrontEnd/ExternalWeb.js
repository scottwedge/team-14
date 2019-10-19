import './ExternalWeb.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React , { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import { Link } from 'react-router-dom';


const local_host = 'http://127.0.0.1:5000/';
var strat = []

class ExternalWeb extends Component {
    getStrat() {
        var name = {'council': 'Strong Individuals and Families Impact Council'}
        console.log(JSON.stringify(name))
        fetch(local_host + 'api/get-strategy/',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, *cors, same-origin
            // 
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },            // redirect: 'follow', // manual, *follow, error
            // referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(name) // body data type must match "Content-Type" header
          })
        .then(res => res.json())
        .then((data) => {
          this.setState({ strategies: data })
        })
        .catch(console.log)
      }
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