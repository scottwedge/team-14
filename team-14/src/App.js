
import React from 'react'
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import './App.css';
import ExternalScatterPlotContainer from "./Backend/ExtGraph";
import InternalScatterPlotContainer from "./Backend/IntGraph";
import ExternalWeb from './FrontEnd/ExternalWeb';
import InternalWeb from './FrontEnd/InternalWeb';


function App() {
  return (
    <div className="App">
      <h1>United Way - San Antonio</h1>
      <h3>External</h3>
      {/* <Router>
          <Route path="/internal" component={InternalWeb} />
          <Route path="/external" component={ExternalWeb} />
      </Router> */}
      <ExternalWeb/>
      <div className="plots">
        <ExternalScatterPlotContainer/>
        <InternalScatterPlotContainer/>
      </div>
    </div>
  );
}


export default App;
