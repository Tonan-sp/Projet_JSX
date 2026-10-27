import MovieCard from './MovieCard.jsx'

function MovieList({ movies, likedIds, onToggleLike, searchQuery }) {
  const likedCount = likedIds.length

  return (
    <>
      <p className="movie-list__liked-count" aria-live="polite">
        {likedCount} film{likedCount === 1 ? '' : 's'} aimé{likedCount === 1 ? '' : 's'}
      </p>
      {movies.length === 0 ? (
        <p className="movie-list__empty" role="status">
          Aucun film ne correspond à « {searchQuery} »
        </p>
      ) : (
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
      )}
    </>
  )
}

export default MovieList
