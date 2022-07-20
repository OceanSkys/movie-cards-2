const MovieDetails = (props) => {
  
    return (
      <div className="MovieDetailsContent">
        <div className="MoviePosterPlot">
          <img className="ModalPoster" src={props.movieCard.Poster} alt={props.movieCard.Title} />
          <div>
            <div className="plotTitle">
              <h1>{props.movie.Title}</h1> 
            </div>
            <div className="plotDesc">
              <h1 className ='desc'>Description:</h1>
              <p className="plot">{ props.movie.Plot }</p>
            </div>
          </div>
        </div>
        <div className="ModalDetails">
          <ul className="movieTags">
            <div>
              <li className="tags">{ props.movie.Rated }</li>
              <li className="tags"> { props.movie.imdbRating } </li>
            </div>
            <div>
              <li className="tags">{ props.movie.Genre }</li>
              <li className="tags">{ props.movie.Runtime }</li>
            </div>
          </ul>
        </div>
      </div>
    )
  }
  
  export default MovieDetails