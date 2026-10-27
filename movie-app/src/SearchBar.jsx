function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label className="search-bar__label" htmlFor="movie-search">
        Rechercher un film
      </label>
      <input
        className="search-bar__input"
        id="movie-search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Titre du film"
      />
    </div>
  )
}

export default SearchBar
