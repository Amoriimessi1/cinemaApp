import { Space,Spin } from 'antd';

const Upcoming=(props)=>{
    return(
        <div className="container top">
          <h1><b>Upcoming</b></h1>  
        {props.upcomingLoading ? (<div style={{display:"flex",justifyContent:"center"}}>
      <Space size="middle">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Space>
    </div>
      ):(<div className="flex">
        <h3>Upcoming</h3>
        <h1>...</h1>
        </div>
      )}
          
        </div>
    )
    }
    export default Upcoming;