
export const SeriesCard = (props) => {

    const { img_url, name, rating, description, genre, cast, watch_url } = props.data;
    return (
      <>
        <li>
          <div>
            <img
              src={img_url}
              alt="qot-img"
              width="40%"
              height="49%"
            />
          </div>
          <h2>Name: {name} </h2>
          <h3>Rating: {rating}</h3>
          <p>Summary : {description}</p>
          <p>Genre: {genre}</p>
          <p>Cast : {cast}</p>
          <a href={watch_url}></a>
          <button>Watch Now</button>
        </li>
      </>
    );
}

