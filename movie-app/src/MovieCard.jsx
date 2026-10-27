import RatingBadge from './RatingBadge.jsx'

function MovieCard({
  title,
  year,
  rating,
  posterUrl,
  description,
  isLiked,
  onToggleLike,
}) {
  return (
    <article className="movie-card">
      <img
        className="movie-card__poster"
        src={posterUrl}
        alt={`Affiche du film « ${title} »`}
      />
      <div className="movie-card__content">
        <div className="movie-card__heading">
          <h2>{title}</h2>
          <button
            className={`movie-card__like-button${isLiked ? ' movie-card__like-button--liked' : ''}`}
            type="button"
            aria-label={isLiked ? `Retirer « ${title} » des favoris` : `Ajouter « ${title} » aux favoris`}
            aria-pressed={isLiked}
            onClick={onToggleLike}
          >
            ♥
          </button>
        </div>
        <p className="movie-card__year">{year}</p>
        <RatingBadge rating={rating} />
        <p>{description}</p>
      </div>
    </article>
  )
}

export default MovieCard
