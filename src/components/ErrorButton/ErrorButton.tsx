import { useState } from 'react';
import './ErrorButton.css';

const ErrorButton = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error('I crashed!');
  }
  return (
    <button className="crash__button" onClick={() => setError(true)}>
      Crash
    </button>
  );
};

export default ErrorButton;
