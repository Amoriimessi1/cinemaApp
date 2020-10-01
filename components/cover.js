const Cover = ({ cover, setCover}) => {

  const handlePrev=() => {
    if (props.count == 1) return;
    else {
      props.setCount(props.count - 1);
      setCover({
        img: `http://image.tmdb.org/t/p/original${props.upcoming[props.count].backdrop_path}`,
        title: props.upcoming[props.count].title,
        year: props.upcoming[props.count].release_date,
        popularity: props.upcoming[props.count].popularity,
      });
    }
  }
  const handlNext=() => {
    if (props.count == props.upcoming.length) {
      props.setCount(1);
    } else {
      props.setCount(props.count + 1);
      setCover({
        img: `http://image.tmdb.org/t/p/original${props.upcoming[props.count].backdrop_path}`,
        title: props.upcoming[props.count].title,
        year: props.upcoming[props.count].release_date,
        popularity: props.upcoming[props.count].popularity,
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
            <p>{props.count}/20</p>
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
