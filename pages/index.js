import { useEffect, useState } from "react";
import Header from"../components/header";
import Main from"../components/main";
import Popular from"../components/popular";
import Upcoming from"../components/upcoming";
import TopRated from"../components/topRated";
const Home = () => {
  const [top, setTop] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topLoading, setTopLoading] = useState(true);
  const [upcomingLoading, setUpcomingLoading] = useState(true);
  const [popularLoading, setPopularLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=6a839c8b6621bcff242762ae5d38f884"
    )
      .then((response) => response.json())
      .then((result) => {
        setTop(result);
        setTopLoading(false);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=6a839c8b6621bcff242762ae5d38f884"
    )
      .then((response) => response.json())
      .then((result) => {
        setUpcoming(result);
        setUpcomingLoading(false);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6a839c8b6621bcff242762ae5d38f884"
    )
      .then((response) => response.json())
      .then((result) => {
        setPopular(result);
        setPopularLoading(false);
      });
  }, []);

  return (
    <div>
<Header/>
<Main/>



    {popularLoading ? (
       <div>
       <h1>Hey World POPULAR LOADING .........................</h1>
     </div>
      
    ):(
      <Popular/>
    )}
    {topLoading ? (
       <div>
       <h1>Hey World TOP RATED LOADING .........................</h1>
     </div>
      
    ):(
      <TopRated/>
    )}
    {upcomingLoading ? (
       <div>
       <h1>Hey World UPCOMING LOADING .........................</h1>
     </div>
      
    ):(
      <Upcoming/>
    )}
    </div>
  );
};
export default Home;
