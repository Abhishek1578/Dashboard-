import {  UserOutlined } from '@ant-design/icons';
import {  Input, Space, Typography } from 'antd';
import { BsFillPatchCheckFill} from 'react-icons/bs'

function AppHeader(){
    return <div className="AppHeader">
        <Typography.Title >Hello's Abhishek {<BsFillPatchCheckFill style={{fontSize:16, color:"blue"}}/> } </Typography.Title>
        <Space>
           <Input.Search
           placeholder='Search'
           prefix={<UserOutlined/>}
           allowClear
           >
           </Input.Search>
        </Space>
        </div>
}
export default AppHeader;