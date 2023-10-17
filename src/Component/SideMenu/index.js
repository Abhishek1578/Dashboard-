import { KeyOutlined, MoneyCollectTwoTone, PercentageOutlined, QuestionCircleOutlined, ShopOutlined, UserAddOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx"
import { MdProductionQuantityLimits } from "react-icons/md"
import { BsPersonVideo } from "react-icons/bs"
import { GiHelp, GiProgression, GiReceiveMoney } from "react-icons/gi"


function SideMenu(){
    const location=useLocation()
    const [selectedKeys,setSelectedKeys]=useState('/')
    useEffect(() => {
      const pathname=location.pathname
      setSelectedKeys(pathname)
    }, [location.pathname])
    
    const navigate=useNavigate()
    return <div className="SideMenu">
   
    <Menu 
    className="SideMenuvertical"
    mode="vertical"
    onClick={(item)=>{
        //item.key
        navigate(item.key);
    }}
    selectedKeys={[selectedKeys]}
    items={[
        {
           label:"Dashboard",
           icon:<RxDashboard/>,
           key:"/" 
        },
        {
            label:"Product",
            icon:<MdProductionQuantityLimits/>,
            key:"/product" 
         },
         {
            label:"Customers",
            icon:<BsPersonVideo/>,
            key:"/customers" 
         },
         {
            label:"Income",
            icon:<GiReceiveMoney/>,
            key:"/income" 
         },
         {
            label:"Promote",
            icon:<GiProgression/>,
            key:"/promote" 
         },
         {
            label:"Help",
            icon:<GiHelp/>,
            key:"/help" 
         },
    ]}
    ></Menu>
    </div>
}
export default SideMenu;