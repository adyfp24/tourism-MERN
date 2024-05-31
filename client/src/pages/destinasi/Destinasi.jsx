import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import useDestination from '../../hooks/useDestination';

function Destinasi() {
  const { destinasi, loading, error, getAllData } = useDestination();

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>Destinasi</div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {destinasi.map(dest => (
          <li key={dest._id}>
            <h3>{dest.title}</h3>
            <p>{dest.description}</p>
            <img src={dest.headerImg} alt={dest.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Destinasi;
