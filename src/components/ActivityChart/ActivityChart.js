import React, { PureComponent } from 'react';
import './ActivityChart.css'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '5',
    pv: 4000,
    uv: 7090,
  },
  {
    name: '9',
    pv: 9900,
    uv: 6090,
  },
  {
    name: '11',
    pv: 4800,
    uv: 8090,
  },
  {
    name: '13',
    pv: 4600,
    uv: 14000,
  },
  {
    name: '15',
    pv: 6000,
    amt: 2181,
  },
  {
    name: '17',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '19',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '21',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '23',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '25',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '25',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class TinyBarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
        // <div className='bar-chart-container'>
        <ResponsiveContainer width="100%" height="20%" >
            <h1 className='activity-heading'>ActivityChart</h1>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            // left: 20,
            marginTop: 4,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#8884d8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
        // </div>
    );
  }
}
