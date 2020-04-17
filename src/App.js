import React, { useState, useEffect } from 'react';
import './App.scss';
import Intro from './components/intro';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/loading';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 3400);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  if (loading) return <Loading />;

  return (
    <BrowserRouter>
      <Navbar />
      <Intro />
    </BrowserRouter>
  );
}

export default App;
