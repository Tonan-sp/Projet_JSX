import './App.css'
import AddMovieForm from './AddMovieForm.jsx'
import MovieList from './MovieList.jsx'
import Panel from './Panel.jsx'
import SearchBar from './SearchBar.jsx'
import { getJSON } from './api.js'
import { useEffect, useState } from 'react'


function App() {
  const [movies, setMovies] = useState([])
  const [likedIds, setLikedIds] = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(normalizedQuery),
  )

  useEffect(() => {
    const controller = new AbortController()

    async function loadMovies() {
      try {
        const data = await getJSON('/api/movies', { signal: controller.signal })

        if (!Array.isArray(data)) {
          throw new Error('La réponse de l’API doit être une liste de films.')
        }

        setMovies(data)
      } catch (loadError) {
        if (!controller.signal.aborted) {
          setError(loadError.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadMovies()
    return () => controller.abort()
  }, [])

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
        {isLoading ? (
          <p role="status">Chargement des films…</p>
        ) : error ? (
          <p role="alert">Erreur lors du chargement des films : {error}</p>
        ) : movies.length === 0 ? (
          <p role="status">Aucun film dans le catalogue.</p>
        ) : (
          <MovieList
            movies={filteredMovies}
            likedIds={likedIds}
            onToggleLike={toggleLike}
            searchQuery={query.trim()}
          />
        )}
      </Panel>
    </main>
  )
}


export default App
