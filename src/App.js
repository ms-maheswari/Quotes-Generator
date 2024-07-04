import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME A QUOTE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
