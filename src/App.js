import React, { useState, useEffect } from 'react';
import './App.scss';
import Intro from './components/intro';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar';
import Loading from './components/loading';
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import { ArrowUp } from 'react-feather';
import { animateScroll as scroll } from "react-scroll";
import { SizeMe } from 'react-sizeme'

function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  if (loading) return <Loading />;

  return (
    <React.Fragment>
      <Navbar />
      <Intro />
      <About />
      {/* <Services />
      <Portfolio />
      <Contact /> */}
      <div className='scrollToTop' onClick={scrollToTop}><ArrowUp /></div>
    </React.Fragment>
  )
}

export default App;
