import { useState } from 'react'

function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false)

  const trimmedTitle = title.trim()
  const ratingValue = Number(rating)
  const errors = {
    title: trimmedTitle ? '' : 'Le titre est obligatoire.',
    rating:
      rating === '' || !Number.isFinite(ratingValue) || ratingValue < 0 || ratingValue > 10
        ? 'La note doit être comprise entre 0 et 10.'
        : '',
  }

  function handleSubmit(event) {
    event.preventDefault()
    setHasAttemptedSubmit(true)

    if (errors.title || errors.rating) {
      return
    }

    onAdd({
      id: crypto.randomUUID(),
      title: trimmedTitle,
      rating: ratingValue,
    })
    setTitle('')
    setRating('')
    setHasAttemptedSubmit(false)
  }

  return (
    <form className="add-movie-form" onSubmit={handleSubmit} noValidate>
      <h2>Ajouter un film</h2>
      <div className="add-movie-form__fields">
        <div className="add-movie-form__field">
          <label htmlFor="new-movie-title">Titre</label>
          <input
            id="new-movie-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            aria-invalid={hasAttemptedSubmit && Boolean(errors.title)}
            aria-describedby={hasAttemptedSubmit && errors.title ? 'new-movie-title-error' : undefined}
          />
          {hasAttemptedSubmit && errors.title && (
            <p className="add-movie-form__error" id="new-movie-title-error">
              {errors.title}
            </p>
          )}
        </div>
        <div className="add-movie-form__field">
          <label htmlFor="new-movie-rating">Note (0 à 10)</label>
          <input
            id="new-movie-rating"
            type="number"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            min="0"
            max="10"
            step="0.1"
            required
            aria-invalid={hasAttemptedSubmit && Boolean(errors.rating)}
            aria-describedby={hasAttemptedSubmit && errors.rating ? 'new-movie-rating-error' : undefined}
          />
          {hasAttemptedSubmit && errors.rating && (
            <p className="add-movie-form__error" id="new-movie-rating-error">
              {errors.rating}
            </p>
          )}
        </div>
        <button className="add-movie-form__submit" type="submit">
          Ajouter
        </button>
      </div>
    </form>
  )
}

export default AddMovieForm
