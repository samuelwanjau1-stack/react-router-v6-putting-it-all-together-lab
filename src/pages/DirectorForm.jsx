import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DirectorForm = ({ setDirectors }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', nationality: '', bio: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDirector = { ...formData, id: Date.now(), movies: [] };
    setDirectors(prev => [...prev, newDirector]);
    navigate('/directors');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Director</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input placeholder="Nationality" value={formData.nationality} onChange={e => setFormData({...formData, nationality: e.target.value})} required />
        <textarea placeholder="Bio" value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})} required />
        <button type="submit">Save Director</button>
      </form>
    </div>
  );
};

export default DirectorForm;