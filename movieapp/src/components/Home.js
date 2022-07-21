import { useState, useEffect } from 'react'
import CardForm from '../CardForm';
import styled from 'styled-components'
import MovieCard from './MovieCard';

const CloseButton = styled.button`
display: flex;
flex: 1;
background-color: red;
color: red;
align-self: center;
justify-content: center;
`;

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

export default function Home() {
  const [searchCriteria, setSearchCriteria] = useState('Thor');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchCriteria}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.Search);
      console.log(movies);
      // setMovies(data.Search);
      setIsLoading(false);
    }
    getMovies()

}, [searchCriteria]);



return (
  <div className='Home-Container'>
    <div style={{backgroundColor: 'cadetblue', display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', padding: '15px', width: '250px', borderRadius: '15%', border: 'solid 5px'}}>
      <h1 style={{color: 'black'}}>Movie Search</h1>
      {/* <CloseButton>
      <button onClick={() => setSearchCriteria("Batman")}>Find Batman</button>
      </CloseButton>
      <CloseButton>
      <button onClick={() => setSearchCriteria("Superman")}>Find Superman</button>
      </CloseButton> */}
      <CardForm 
      searchCriteria={searchCriteria}
      setSearchCriteria = {setSearchCriteria}
      />
      { searchCriteria.length > 0 && (<p style={{marginTop: '10px', fontSize:'20px'}}>Searching for <br/><span style={{fontStyle: 'oblique', fontWeight: 'bold'}}>{searchCriteria}</span>...</p>)}
    </div>
    
    {!isLoading ? (
      <div className='MovieCardList'>
        {movies?.length > 0 ? (
          movies?.map((movie) => (
            <div>
              {console.log('mapping')}
              <MovieCard movieData={movie}/>
            </div>
          ))
        ) : (
          <div style={{background: 'white', height: '50px', width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>No movies found/searched</div>            
        )}
      </div>
     ) : (
      <div>Loading...</div>
     )};
    </div>
    
)
}
