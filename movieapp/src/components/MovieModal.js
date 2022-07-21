import ReactModal from "react-modal"
import { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";

const modalStyles = {
    overlay: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      backgroundColor: 'aliceblue',
      position: "relative",
      width: 800,
      height: 600,
      inset: 0,
      padding: 0,
    },
  };

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

export default function MovieModal({ isModalOpen, setIsModalOpen, movieData}) {
    const [selectedMovie, setSelectedMovie] = useState([]);

    const getMovies = async (id) => {
 
        const url =`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setSelectedMovie(data)
        console.log(selectedMovie); 
    }
    
    useEffect(() => {
    ReactModal.setAppElement("body");

    getMovies(movieData.imdbID);

    }, [isModalOpen]);

    return (
        <ReactModal isOpen={isModalOpen} style={modalStyles}>
          <div>
            <div className='XButton-Container' onClick={() => setIsModalOpen(false)} >
              <div className="XButton">
               X
              </div>
            </div>
              <MovieDetails
              movie = {selectedMovie}
              movieCard = {movieData}
              />
          </div>
        </ReactModal>
    )
}