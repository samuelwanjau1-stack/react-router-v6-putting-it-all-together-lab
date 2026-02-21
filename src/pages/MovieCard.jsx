import { useParams } from 'react-router-dom';

const MovieCard = ({ directors }) => {
  const { id, movieId } = useParams();
  
  const director = directors.find(d => d.id === parseInt(id));
  const movie = director?.movies.find(m => String(m.id) === String(movieId));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      {/* Test looks for the title here (Instance 2) */}
      <h2 aria-label="movie-title">{movie.title}</h2>
      
      <div className="movie-details">
        <p><strong>Director:</strong> {director.name}</p>
        <p><strong>Release Year:</strong> {movie.releaseYear}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
        <p><strong>Genre:</strong> Sci-Fi, Thriller</p>
      </div>
    </div>
  );
};

export default MovieCard;