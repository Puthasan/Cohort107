import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';



function App() {
  const apiKey = "98e3fb1f";
  const [movie, setMovie] = useState(null);

  const getMovie = async(searchTerm) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
      const data = await response.json();
      setMovie(data);
  } catch(e) {
      console.log(e);
  }

}


useEffect(() => {
  const getRandomMovie = async() => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=random`)
      const data = await response.json()

      if (data.Search && data.Search.length > 0) {
        const randomMovie = data.Search[Math.floor(Math.random() * data.Search.length)]
        const detailedResponse = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${randomMovie.imdbID}`)
        const detailedData = await detailedResponse.json()
        setMovie(detailedData)
      }
    } catch(e) {
      console.log(e)
    }
  }

  getRandomMovie()
}, []);


  return (
    <div className="App">
      <h1>Movie Search</h1>

      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>

    </div>
  );
}

export default App;
