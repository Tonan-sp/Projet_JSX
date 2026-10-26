import './App.css'
import { movies } from './movies.js'
import MovieList from './MovieList.jsx'
import Panel from './Panel.jsx'

function App() {
  return (
    <main className="movie-page">
      <h1>Films à découvrir</h1>
      <Panel title="Catalogue">
        <MovieList movies={movies} />
      </Panel>
    </main>
  )
}


export default App


