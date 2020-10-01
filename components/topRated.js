import { Space,Spin } from 'antd';

const TopRated=(props)=>{
    return(
        <div className="container">
               <h1><b>Top Rated</b></h1>  
        {props.topLoading ? (<div   style={{display:"flex",justifyContent:"center"}}>
      <Space size="middle">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Space>
    </div>
      ):(<div className="flex">
        <h3>Top Rated</h3>
        <h1>...</h1>
        </div>
      )}
          
        </div>
          
    )
    }
    export default TopRated;