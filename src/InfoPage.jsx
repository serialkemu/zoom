import React from 'react';
import { useLocation } from 'react-router-dom';

const InfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get('data');

  return (
    <div>
      <h1>Information</h1>
      <p>{data}</p>
    </div>
  );
};

export default InfoPage;
