import { useParams, Link } from 'react-router-dom';

const DirectorCard = ({ directors }) => {
  const { id } = useParams();
  const director = directors.find(d => d.id === parseInt(id));

  if (!director) return <div>Director not found</div>;

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div style={{ border: '2px solid green', padding: '10px', flex: 2 }}>
        <h2>{director.name}</h2>
        <p><strong>Nationality:</strong> {director.nationality}</p>
        <p>{director.bio}</p>
        <Link to={`/directors/${director.id}/movies/new`} style={{ color: 'blue' }}>
          Add New Movie
        </Link>
        <hr />
        <h4>Movies:</h4>
        {director.movies.map(movie => (
          <div key={movie.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h4>
              <Link to={`/directors/${director.id}/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </h4>
            <p>Release Year: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorCard;