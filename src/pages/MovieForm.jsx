import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieForm = ({ setDirectors }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', releaseYear: '', duration: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a movie object with a unique ID
    const newMovie = { 
      ...formData, 
      id: `m${Date.now()}` 
    };

    setDirectors(prev => prev.map(d => {
      if (d.id === parseInt(id)) {
        return { ...d, movies: [...d.movies, newMovie] };
      }
      return d;
    }));
    
    // Go back to the Director's card to see the new movie
    navigate(`/directors/${id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input 
          placeholder="Movie Title" 
          value={formData.title} 
          onChange={e => setFormData({...formData, title: e.target.value})} 
          required 
        />
        <input 
          placeholder="Release Year" 
          type="number"
          value={formData.releaseYear} 
          onChange={e => setFormData({...formData, releaseYear: e.target.value})} 
          required 
        />
        <input 
          placeholder="Duration (e.g. 120 min)" 
          value={formData.duration} 
          onChange={e => setFormData({...formData, duration: e.target.value})} 
          required 
        />
        <button type="submit" style={{ background: 'blue', color: 'white', padding: '10px' }}>Save Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;