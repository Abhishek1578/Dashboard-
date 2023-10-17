import { Space, Table, Typography } from "antd";
import { getPromote } from "../../API";
import { useEffect, useState } from "react";

function Promote(){
    const [loading,setLoading]=useState(false)
    const [dataSource,setDataSource]=useState([])
    useEffect(()=>{
        setLoading(true)
        getPromote().then(res=>{
            setDataSource(res.products)
            setLoading(false);
        })
    },[])
    return (
    <Space size={20} direction="vertical">
        <Typography.Title level={3} >Promote</Typography.Title>
        <Table 
          loading={loading}
        columns={[
            {
                title:"Title",
                dataIndex:"title",
            },
            {
                title:"Price",
                dataIndex:"price",
                render:(value)=><span>${value}</span>
            },
            {
                title:"Quantity",
                dataIndex:"quantity",
            },
            {
                title:"Total",
                dataIndex:"total",
            },
            {
                title:"DiscountedPrice",
                dataIndex:"discountedprice",
                render:(value)=><span>${value}</span>
            },
        ]}
        dataSource={dataSource}
        pagination={{
            pageSize:5
        }

        }
        ></Table>
    </Space>
    );
}
export default Promote;