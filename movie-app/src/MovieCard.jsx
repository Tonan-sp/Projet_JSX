function MovieCard({ title, year, posterUrl, description }) {
  return (
    <article className="movie-card">
      <img
        className="movie-card__poster"
        src={posterUrl}
        alt={`Affiche du film « ${title} »`}
      />
      <div className="movie-card__content">
        <h2>{title}</h2>
        <p className="movie-card__year">{year}</p>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default MovieCard
