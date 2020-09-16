import React, { useState } from 'react'
import axios from 'axios'
// use hooks with dummy components
// use state hook

// CALCULATOR APP




const App = () => {
  
  const [movieState, setMovieState] = useState({
    title: '',
    plot: '',
    poster: ''
  })
  
  movieState.handleInputChange = event => {
    
    setMovieState({ ...movieState, [event.target.name]: event.target.value })
    console.log(movieState)
  }
  
  movieState.handleBtnClick = event => {
    event.preventDefault()

  }


  return (
    <>
    <h1>Movie App</h1>
    <form>
      <p>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" value={movieState.title} onChange={movieState.handleInputChange}/>
      </p>
      <p>
      <label htmlFor="plot">Plot</label>
      <input type="text" name="plot" value={movieState.plot} onChange={movieState.handleInputChange}/>
      </p>
      <p>
      <label htmlFor="poster">Poster</label>
      <input type="text" name="poster"value={movieState.poster} onChange={movieState.handleInputChange}/>
      </p>

      <p>
        <button onClick="movieState.handleBtnClick">Submit</button>
      </p>
    </form>
    </>
  )
}

export default App