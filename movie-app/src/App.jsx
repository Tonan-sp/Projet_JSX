import './App.css'
import { movies as initialMovies } from './movies.js'
import AddMovieForm from './AddMovieForm.jsx'
import MovieList from './MovieList.jsx'
import Panel from './Panel.jsx'
import SearchBar from './SearchBar.jsx'
import { useState } from "react";


function App() {
  const [movies, setMovies] = useState(initialMovies)
  const [likedIds, setLikedIds] = useState([])
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(normalizedQuery),
  )

  function toggleLike(movieId) {
    setLikedIds((currentLikedIds) =>
      currentLikedIds.includes(movieId)
        ? currentLikedIds.filter((id) => id !== movieId)
        : [...currentLikedIds, movieId],
    )
  }

  function addMovie(movie) {
    setMovies((currentMovies) => [...currentMovies, movie])
  }

  return (
    <main className="movie-page">
      <h1>Films à découvrir</h1>
      <Panel title="Catalogue">
        <AddMovieForm onAdd={addMovie} />
        <SearchBar
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <MovieList
          movies={filteredMovies}
          likedIds={likedIds}
          onToggleLike={toggleLike}
          searchQuery={query.trim()}
        />
      </Panel>
    </main>
  )
}


export default App
