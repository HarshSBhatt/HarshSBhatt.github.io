import React, { useState, useEffect } from "react";
import "./App.scss";
import Intro from "./components/intro";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga";
import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import { ArrowUp } from "react-feather";
import GetInTouch from "./components/getInTouch";
import Footer from "./components/footer";
import Loading from "./components/loading";

function App() {
  useEffect(() => {
    window.scroll(0, 0);
    ReactGA.initialize("UA-168265252-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 2200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [cls, setCls] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  const listenScrollEvent = () => {
    if (window.scrollY > 1000) {
      setCls("showTop");
    } else {
      setCls("");
    }
  };

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  if (loading) return <Loading />;

  return (
    <React.Fragment>
      <Navbar />
      <Intro />
      <Services />
      <Portfolio />
      <GetInTouch />
      <About />
      <Footer />
      <div className={`${cls} scrollToTop`} onClick={scrollToTop}>
        <ArrowUp />
      </div>
    </React.Fragment>
  );
}

export default App;
