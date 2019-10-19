
import React from 'react'

import './App.css';
import ScatterPlotContainer from "./Backend/ExtGraph";
import ExternalWeb from './FrontEnd/ExternalWeb';


function App() {
  return (
    <div className="App">
      <ExternalWeb/>
      <ScatterPlotContainer />
    </div>
  );
}


export default App;
