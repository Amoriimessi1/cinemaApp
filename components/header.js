import { Input, Col, Row } from "antd";
const { Search } = Input;

const Header = () => {
  return (
   
      <header>
          <div className="container header">
        <Col span={4}>
          <h1>Cinema App</h1>
        </Col>
        <Col span={4}>
          <Search className="rounded" placeholder="Search ..." loading  />
        </Col>{" "}
        </div>
      </header>
 
  );
};
export default Header;
