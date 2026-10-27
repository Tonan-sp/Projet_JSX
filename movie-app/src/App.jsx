import './App.css'
import { movies } from './movies.js'
import MovieList from './MovieList.jsx'
import Panel from './Panel.jsx'
import { useState } from "react";


function App() {
  const [likedIds] = useState([])

  return (
    <main className="movie-page">
      <h1>Films à découvrir</h1>
      <Panel title="Catalogue">
        <MovieList movies={movies} />
      </Panel>
    </main>
  )
}

function LikeButton() {
  const [likes, setLikes] = useState(0);
  // valeur setter valeur initiale (utilisée au 1er rendu seulement)
  return <button onClick={() => setLikes(likes + 1)}> {likes}</button>;
}





export default App
