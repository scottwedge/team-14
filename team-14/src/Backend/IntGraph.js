import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {name: "July", uv: 370},
    {name: "August",uv: 130},
    {name: "September",uv: 143},
    {name: "July",  v2: 166},
    {name: "August",v2: 84},
    {name: "September",v2: 96},

    
];

export default class InternalScatterPlotContainer extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv"   stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone"  dataKey="v2"  stroke="#8832d8" activeDot={{ r: 7 }} />
       
      </LineChart>
    );
  }
}
