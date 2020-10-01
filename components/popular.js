import { Space,Spin } from 'antd';
const Popular=(props)=>{
return(

      <div className="container top">
           <h1><b>Popular</b></h1>  
      {props.popularLoading ? (<div style={{display:"flex",justifyContent:"center"}}>
    <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
  </div>
    ):(<div className="flex">
      <h3>Popular</h3>
      <h1>...</h1>
      </div>
    )}
        
      </div>
        
)
}
export default Popular;