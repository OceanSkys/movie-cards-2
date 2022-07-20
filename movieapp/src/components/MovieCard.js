import MovieModal from "./MovieModal";
import { useState } from 'react'


export default function MovieCard(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div className="MovieCard-Container">
        <MovieModal 
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          movieData={props.movieData}   
        />
        <div className="MovieCard">
          <img className='MoviePoster' src={props.movieData.Poster} onClick= {() => setIsModalOpen(true)}></img>
          <p className="MovieTitle">{props.movieData.Title}</p>
        </div>
      </div>

    );
  }