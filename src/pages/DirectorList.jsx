import { Link } from 'react-router-dom';

const DirectorList = ({ directors }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div style={{ flex: '1', borderRight: '2px solid black', minHeight: '80vh' }}>
        <h2>Directors List</h2>
        <div className="director-sidebar">
          <h3>Directors List</h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {directors.map((director) => (
              <Link
                key={director.id}
                to={`/directors/${director.id}`}
                style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}
              >
                {director.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div style={{ flex: '2' }}>
        <h3>Select a director to see details.</h3>
      </div>
    </div>
  );
};

export default DirectorList;