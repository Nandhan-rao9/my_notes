import React, { useState, useEffect } from 'react';

function RandomDog() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        setUrl(data.message);
        setLoading(false);
      });
  }, []); // runs once, on mount

  return (
    <div>
      <h2>Random Dog Photo 🐶</h2>
      {loading ? <p>Loading...</p> : <img src={url} alt="Random Dog" width={200} />}
    </div>
  );
}

export default RandomDog;