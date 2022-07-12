import HighlightCard from "./HighlightCard";
import MovieCard from "./MovieCard";
import { useState, useEffect } from 'react'

// const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

export default function Home() {
  const [searchCriteria, setSearchCriteria] = useState("Thor");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = '12bd0e73'

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchCriteria}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log('data is', data);
      setMovies(data.Search);
      setIsLoading(false);
    }
    getMovies()

}, [searchCriteria]);

return (
  <div>
    <div>Movie List</div>
    <button onClick={() => setSearchCriteria("Batman")}>Find Batman</button>
    <button onClick={() => setSearchCriteria("Superman")}>Find Superman</button>
    <div>{searchCriteria} is selected.</div>
    {!isLoading ? (
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div>
              <div>{movie.Title}</div>
            </div>
          ))
        ) : (
          <div>No movies found.</div>            
        )}
      </div>
     ) : (
      <div>Loading...</div>
     )};
    </div>
)
}
