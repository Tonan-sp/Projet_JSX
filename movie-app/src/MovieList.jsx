import MovieCard from './MovieCard.jsx'

function MovieList({ movies, likedIds, onToggleLike }) {
  const likedCount = likedIds.length

  return (
    <>
      <p className="movie-list__liked-count" aria-live="polite">
        {likedCount} film{likedCount === 1 ? '' : 's'} aimé{likedCount === 1 ? '' : 's'}
      </p>
      <section className="movie-grid" aria-label="Liste des films">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            isLiked={likedIds.includes(movie.id)}
            onToggleLike={() => onToggleLike(movie.id)}
          />
        ))}
      </section>
    </>
  )
}

export default MovieList
