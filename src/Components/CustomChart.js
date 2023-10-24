// import { Card } from 'antd';
// import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
  
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];


// const CustomChart = () => {
//   return (
//     <>
//         {/* <LineChart
//         width='100%'
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         > */}
//         <Card style={{ width:'100%',height:'100%'}}>
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>  
//         </Card>    
//     </>
//   )
// }

// export default CustomChart;

import React from 'react';
import ReactECharts from 'echarts-for-react';  // or var ReactECharts = require('echarts-for-react');

export const CustomChart = ()=>{
  const option = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["01 Apr", "02 Apr", "03 Apr", "04 Apr", "05 Apr",]
    },
    yAxis: {
      type: "value",
      data: ["0K", "240K", "340K", "40K", "50K", "60K"],
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
        itemStyle: {
          color: "#0E9F6E",
          border: "3px solid #0E9F6E",
        },
      },
    ],
  };
  // const options = {
  //   tooltip : {
  //     trigger : "axis"
  //   },
  //   xAxis:{
  //     type: "category",
  //     data: ["Mon","Tues","Wed","Thurs","Fri","Sat"]
  //   },
  //   yAxis:{
  //     type: "value",
  //     data: ["0K","30K","80K","120K","120K"]
  //   },
  //   series : {
  //     data : [293,32,32,,23,2,4],
  //     smooth: true,
  //     type: "Line"
  //   }

  // }
  return(
    
<ReactECharts
  option={option}
  notMerge={true}
  lazyUpdate={true}
  theme={"theme_name"}
/>
  )
}

