import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [info, setInfo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/info?data=${encodeURIComponent(info)}`);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={info} onChange={(e) => setInfo(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPage;
