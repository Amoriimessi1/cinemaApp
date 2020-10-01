const Cover = ({ cover, setCover, count, setCount,upcoming}) => {

  const handlePrev=() => {
    if (count == 1) return;
    else {
      setCount(count - 1);
      setCover({
        img: `http://image.tmdb.org/t/p/original${upcoming[count].backdrop_path}`,
        title: upcoming[count].title,
        year: upcoming[count].release_date,
        popularity: upcoming[count].popularity,
      });
    }
  }
  const handlNext=() => {
    if (count == upcoming.length) {
      setCount(1);
    } else {
      setCount(count + 1);
      setCover({
        img: `http://image.tmdb.org/t/p/original${upcoming[count].backdrop_path}`,
        title: upcoming[count].title,
        year: upcoming[count].release_date,
        popularity: upcoming[count].popularity,
      });
    }
  }

  return (
    <section className="cover">
      <img className="cover-img" src={cover.img} alt="" />
      <div className="dim">
        <div className="container">
          <div className="text">
            <h1>{cover.title}</h1>
            <p style={{ color: "#ffba00" }} className="year">
              {cover.year}
            </p>
            <p>Popularity: {cover.popularity}</p>
          </div>
          <div className="controls">
            <button
              className="previous"
              onClick={handlePrev}
            ></button>
            <p>{count}/20</p>
            <button
              className="next"
              onClick={handlNext}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cover;
