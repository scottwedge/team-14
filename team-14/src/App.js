
import React from 'react'

import './App.css';
import ExternalScatterPlotContainer from "./Backend/ExtGraph";
import InternalScatterPlotContainer from "./Backend/IntGraph";
import ExternalWeb from './FrontEnd/ExternalWeb';


function App() {
  return (
    <div className="App">
      <h1>United Way - San Antonio</h1>
      <h3>External</h3>
      <ExternalWeb/>
      <div class="plots">
        <ExternalScatterPlotContainer/>
        <InternalScatterPlotContainer/>
      </div>
    </div>
  );
}


export default App;
