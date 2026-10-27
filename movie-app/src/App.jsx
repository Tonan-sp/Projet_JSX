import './App.css'
import { movies } from './movies.js'
import MovieList from './MovieList.jsx'
import Panel from './Panel.jsx'
import { useState } from "react";


function App() {
  const [likedIds, setLikedIds] = useState([])

  function toggleLike(movieId) {
    setLikedIds((currentLikedIds) =>
      currentLikedIds.includes(movieId)
        ? currentLikedIds.filter((id) => id !== movieId)
        : [...currentLikedIds, movieId],
    )
  }

  return (
    <main className="movie-page">
      <h1>Films à découvrir</h1>
      <Panel title="Catalogue">
        <MovieList
          movies={movies}
          likedIds={likedIds}
          onToggleLike={toggleLike}
        />
      </Panel>
    </main>
  )
}


export default App
