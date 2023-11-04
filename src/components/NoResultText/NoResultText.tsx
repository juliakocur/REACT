import { useState, useEffect } from 'react';

const NoResultText = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setData('No results found. Please try again with another search term.');
    }, 0);
  }, []);

  return <h3 style={{ textAlign: 'center', color: 'white' }}>{data}</h3>;
};

export default NoResultText;
