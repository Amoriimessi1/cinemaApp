import { useState } from "react";
import { Input, Col, Row, Card,  } from "antd";
import ResultCard from '../components/resultCard'


const { Search } = Input;
const MySearch = () => {
    const { Meta } = Card;
    const [search, setSearch] = useState([]);
    const handleSearch = (e) => {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=6a839c8b6621bcff242762ae5d38f884&language=en-US&query=${e.target.value}&page=1&include_adult=false`
        )
          .then((res) => res.json())
          .then((result) => setSearch(result.results));
      };
    
  
      return (
        <div className="input">
          <i>
            {" "}
            <img src="/search.svg" alt="" />
          </i>
          <input type="text" placeholder="Find Movie..." onChange={handleSearch} />
          <div
            className="results"
            style={{
              width: "300px",
              maxHeight: "500px",
              backgroundColor: "#384763",
              position: "absolute",
              zIndex: "4",
              top: "38px",
              right: "0",
              overflow: "scroll",
              borderRadius: "10px",
              overflowX: "hidden",
            }}
          >
            {search
              ? search.map((item) => (
                  <ResultCard
                    img={`http://image.tmdb.org/t/p/w185${item.poster_path}`}
                    name={item.title}
                    overview={item.overview}
                  />
                ))
              : ""}
          </div>
        </div>
      );
};
export default MySearch;


