
import React from 'react'

import './App.css';
import ExternalScatterPlotContainer from "./Backend/ExtGraph";
import InternalScatterPlotContainer from "./Backend/IntGraph";
import ExternalWeb from './FrontEnd/ExternalWeb';


function App() {
  return (
    <div className="App">
      <ExternalWeb/>
      <ExternalScatterPlotContainer />
      <InternalScatterPlotContainer/>
    </div>
  );
}


export default App;
