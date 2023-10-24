import React from 'react';
import { Badge, Table } from 'antd';
const columns = [
  {
    title: 'TRANSACTION',
    dataIndex: 'name',
  },
  {
    title: 'DATE & TIME',
    dataIndex: 'chinese',
    // sorter: {
    //   compare: (a, b) => a.chinese - b.chinese,
    //   multiple: 3,
    // },
  },
  {
    title: 'AMOUNT',
    dataIndex: 'math',
    // sorter: {
    //   // compare: (a, b) => a.math - b.math,
    //   // multiple: 2,
    // },
  },
  {
    title: 'STATUS',
    dataIndex: 'english',
    // sorter: {
    //   compare: (a, b) => a.english - b.english,
    //   multiple: 1,
    // },
    render: (_, item) => {
      item.english == "In progress" ? <div>Ok</div> :  item.english == "Cancelled" ? <div>no</div> : <div>ha</div> 
      console.log('item is -->', item)
      if(item.english == "In progress"){
        return(
          <Badge
          className="site-badge-count-109"
          count={"In progress"}
          style={{
            backgroundColor: '#E1EFFE',
            color:'#1E429F'
          }}
        />
        )
      }else if(item.english == "Cancelled"){
       return(
        <Badge
        className="site-badge-count-109"
        count={"Cancelled"}
        style={{
          backgroundColor: '#FBD5D5',
          color:'#9B1C1C'
        }}
      />
       )
      }else{
        return(
          <Badge
          className="site-badge-count-109"
          count={"Completed"}
          style={{
            backgroundColor: '#DEF7EC',
            color:'#03543F'
          }}
        />
        )
      }
    }
  },
];
const data = [
  {
    key: '1',
    name: 'Payment from Bonnie Green',
    chinese: "Apr 23 ,2021",
    math: "$2300",
    english: "Completed",
    backgroundColor:'#F9FAFB'
  },
  {
    key: '2',
    name: 'Payment refund to #00910',
    chinese: "Apr 23 ,2021",
    math: "-$670",
    english: "Completed",
  },
  {
    key: '3',
    name: 'Payment failed from #087651',
    chinese: "Apr 18, 2021",
    math: "$234",
    english: "Cancelled",
  },
  {
    key: '4',
    name: 'Payment from Bonnie Green',
    chinese: "Apr 15, 2021",
    math: "$5000",
    english: "In progress",
  },
  {
    key: '4',
    name: 'Payment from Jese Leos',
    chinese: "Apr 15, 2021",
    math: "$2300",
    english: "In progress",
  },
  {
    key: '4',
    name: 'Payment from THEMSBERG LLC',
    chinese: "Apr 11, 2021",
    math: "$280",
    english: "Completed",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const App = () => <Table columns={columns} dataSource={data} style={{width:'100%',overflow:'auto'}} onChange={onChange} />;
export default App;