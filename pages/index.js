import { useEffect, useState } from "react";
import Cover from"../components/cover";
import Popular from"../components/popular";
import Upcoming from"../components/upcoming";
import TopRated from"../components/topRated";
import MySearch from "../components/mySearch";
import MyCard from "../components/myCard";


const Home = () => {
  const [top, setTop] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topLoading, setTopLoading] = useState(true);
  const [upcomingLoading, setUpcomingLoading] = useState(true);
  const [popularLoading, setPopularLoading] = useState(true);
  const [cover, setCover] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=6a839c8b6621bcff242762ae5d38f884"
    )
      .then((response) => response.json())
      .then((result) => {
        setTop(result.results);
        setTopLoading(false);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=6a839c8b6621bcff242762ae5d38f884"
    )
      .then((response) => response.json())
      .then((result) => {
        setUpcoming(result.results);
        setUpcomingLoading(false);
        setCover({
          img: `http://image.tmdb.org/t/p/original${result.results[0].backdrop_path}`,
          title: result.results[0].title,
          year: result.results[0].release_date,
          popularity: result.results[0].popularity,
          rate: result.results[0].vote_average,
        });
      });

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6a839c8b6621bcff242762ae5d38f884"
    )
      .then((response) => response.json())
      .then((result) => {
        setPopular(result.results);
        setPopularLoading(false);
      
      });
  }, []);

  return (
    <div>
    <header>
      <div className="container">
        <nav>
          <img src="/logo.svg" alt="" />
          <MySearch />
        </nav>
      </div>
    </header>
    <main>
      <Cover
        count={count}
        setCount={setCount}
        cover={cover}
        setCover={setCover}
        upcoming={upcoming}
      />
      <section className="grid">
        <div className="container">
          <div className="top-rated">
            <h1>Top Rated</h1>
            <div className="cards">
              {top.map((item) => 
                 (
                  <MyCard
                    key={item.id}
                    img={item.poster_path}
                    name={item.title}
                    overview={item.overview}
                    release_date={item.release_date}
                  />
                )
              )}
            </div>
          </div>
          <div className="most-popular">
            <h1>Most Popular</h1>
            <div className="cards">
              {popular.map((item) => 
               (
                  <MyCard
                    key={item.id}
                    img={item.poster_path}
                    name={item.title}
                    overview={item.overview}
                    release_date={item.release_date}
                  />
                )
              )}
            </div>
          </div>
          <div className="upcoming">
            <h1>Upcoming</h1>
            <div className="cards">
              {upcoming.map((item) => {
                return (
                  <MyCard
                    key={item.id}
                    img={item.poster_path}
                    name={item.title}
                    overview={item.overview}
                    release_date={item.release_date}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  );
};
export default Home;
