import MovieCard from './MovieCard.jsx'

function MovieList({ movies }) {
  return (
    <section className="movie-grid" aria-label="Liste des films">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </section>
  )
}

export default MovieList
