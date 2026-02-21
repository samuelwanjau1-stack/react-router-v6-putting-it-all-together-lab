import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DirectorList from './pages/DirectorList';
import DirectorCard from './pages/DirectorCard';
import DirectorForm from './pages/DirectorForm';
import MovieForm from './pages/MovieForm';
import MovieCard from './pages/MovieCard';

const initialData = [
  {
    id: 1,
    name: "Christopher Nolan",
    nationality: "British-American",
    bio: "Director of mind-bending films",
    movies: [
      { id: "m1", title: "Inception", releaseYear: 2010, duration: "148 minutes" }
    ]
  },
  {
    id: 2,
    name: "Greta Gerwig",
    nationality: "American",
    bio: "Director known for Lady Bird and Little Women",
    movies: [{ id: "m2", title: "Lady Bird", releaseYear: 2017, duration: "94 minutes" }]
  },
  {
    id: 3,
    name: "Bong Joon-ho",
    nationality: "South Korean",
    bio: "Academy Award-winning director of Parasite",
    movies: [{ id: "m3", title: "Parasite", releaseYear: 2019, duration: "132 minutes" }]
  },
  {
    id: 4,
    name: "Denis Villeneuve",
    nationality: "Canadian",
    bio: "Director of Dune and Arrival",
    movies: [{ id: "m4", title: "Arrival", releaseYear: 2016, duration: "116 minutes" }]
  }
];

function App() {
  const [directors, setDirectors] = useState(initialData);

  return (
    <Router>
      <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#eee' }}>
        <Link to="/">Home</Link>
        <Link to="/directors">Directors</Link>
        <Link to="/directors/new">Add Director</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to the Movie Directory</h1>} />
        <Route path="/about" element={<h1>About the Movie Directory</h1>} />
        <Route path="/directors" element={<DirectorList directors={directors} />} />
        <Route path="/directors/new" element={<DirectorForm setDirectors={setDirectors} />} />
        <Route path="/directors/:id" element={<DirectorCard directors={directors} />} />
        <Route path="/directors/:id/movies/new" element={<MovieForm setDirectors={setDirectors} />} />
        <Route path="/directors/:id/movies/:movieId" element={<MovieCard directors={directors} />} />
      </Routes>
    </Router>
  );
}

export default App;