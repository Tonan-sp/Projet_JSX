import './App.css'
import { movies } from './movies.js'
import MovieCard from './MovieCard.jsx'

function App() {
  return (
    <main className="movie-page">
      <h1>Films à découvrir</h1>
      <section className="movie-grid" aria-label="Liste des films">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </section>
    </main>
  )
}


export default App
