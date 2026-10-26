function RatingBadge({ rating }) {
  let className = 'badge'

  if (rating >= 8) {
    className += ' badge--good'
  } else if (rating < 5) {
    className += ' badge--bad'
  }

  return <span className={className}>{rating}</span>
}

export default RatingBadge
