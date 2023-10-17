import {  OrderedListOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { getOrder } from "../../API";
import { SELECTION_ALL } from "antd/es/table/hooks/useSelection";
import React from 'react';
import Chart from "chart.js/auto"
import { Pie,PieChart,Tooltip } from 'recharts'
import { red } from "@material-ui/core/colors";
import { BsCurrencyDollar } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi"
import { FaShoppingBag } from "react-icons/fa"

function Dashboard(){
    return( 
    <Space size={20} direction="vertical" >
        <Typography.Title level={2}>Dashboard</Typography.Title>
        <Space direction="horizontal">
            <DashboardCard icon={<BsCurrencyDollar style={{
                color:"green",
                backgroundColor:"rgba(0,255,0,0.25)",
                borderRadius:10,
                fontSize:54,
                padding:8,
        }}
        />} title={"Earning"} value={198000} />
            <DashboardCard icon={<OrderedListOutlined style={{
                color:"purple",
                backgroundColor:"rgb(255, 0, 255)",
                borderRadius:20,
                fontSize:54,
                padding:8,
        }}/>} title={"Oders"}  value={2400} />
            <DashboardCard icon={<GiReceiveMoney style={{
                color:"blue",
                backgroundColor:"rgb(0, 255, 255)",
                borderRadius:20,
                fontSize:54,
                padding:8,
        }}/>} title={"Balance"} value={2400} />
        <DashboardCard icon={<FaShoppingBag style={{
            color:"blue",
            backgroundColor:"rgb(0, 255, 255)",
            borderRadius:20,
            fontSize:44,
            padding:8,
        }}/>} title={"Total Sales"} value={89000}/>
        </Space>
        <Space>
            <div>
            <DashboardChart/>
            </div>
            <div style={{color:red}}>
                <DashboardProgressBar/>
            </div>
        </Space>
        <Space>
        <RecentOrders/>
        </Space>
    </Space>
    );
}
function DashboardCard({title,value,icon}){
    return(
        <Card>
                <Space direction="horizontal">
                    {icon}
                    <Statistic title={title} value={value}/>
                </Space>
            </Card>
    );
}

function RecentOrders(){
    const [dataSource,setDataSource]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        getOrder().then(res=>{
            setDataSource(res.products.splice(0,3));
            setLoading(false);
        })
    
    },[])
    return( 
    <>
    <Typography><h1>Product Cell</h1></Typography>
    <Table
    columns={[{
        title:'Title',
        dataIndex:"title",
    },
    {
        title:"Quantity",
        dataIndex:"quantity",
    },
    {
        title:"Price",
        dataIndex:"discountedPrice",
    },
]} 
loading={loading}
dataSource={dataSource}
pagination={false}
></Table>
</>
);

}
function DashboardChart(){
    const chartRef=useRef(null);
    const chartInstance=useRef(null);
    useEffect(()=>{
        if(chartInstance.current){
            chartInstance.current.destroy();
        }
        const myChartRef=chartRef.current.getContext("2d")
        const barColores=[
            'rgba(255,0,0,0.3)',
            'rgba(0,255,0,0.3)',
            'rgba(0,0,255,0.3)',
            'rgba(192,192,192,0.3)',
            'rgba(255,255,0,0.3)',
            'rgba(255,0,255,0.3)',
            'rgba(127, 17, 224, 1)',
            'rgba(255,0,0,0.3)',
            'rgba(0,255,0,0.3)',
            'rgba(0,0,255,0.3)',
            'rgba(192,192,192,0.3)',
           
        ];
        chartInstance.current=new Chart(myChartRef,{
            type:'bar',
            data:{
                labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                datasets:[
                    {
                        label:"Monthly Earning",
                        data:[25,22,35,25,30,20,32,40,36,30,28,30],
                        backgroundColor:barColores
                    }
                ]
            }
        })
        return()=>{
            if(chartInstance.current){
                chartInstance.current.destroy()
            }
        };
    }, []);
    return (
        <>
        <canvas ref={chartRef} />
        </>
    )
}
function DashboardProgressBar(){
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];
      
      const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 },
        { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 },
        { name: 'Group F', value: 4800 },
      ];
    return(
    <PieChart width={400} height={400}>
    <Pie
      dataKey="value"
      isAnimationActive={false}
      data={data01}
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill="#8884d8"
      label
    />
    <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
    <Tooltip />
  </PieChart>
    );
   
}
export default Dashboard;