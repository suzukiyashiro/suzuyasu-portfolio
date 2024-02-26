import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AIHorseProject from './Components/AIHorseProject';
import AIMusicProject from './Components/AIMusicProject';
import Laboratry from './Components/Laboratry';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

export function useScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollPositions = JSON.parse(localStorage.getItem("scrollPositions")) || {};

    if (scrollPositions[pathname]) {
      window.scrollTo(0, scrollPositions[pathname]);
    } else {
      window.scrollTo(0, 0);
    }

    window.onscroll = () => {
      scrollPositions[pathname] = window.pageYOffset;
      localStorage.setItem("scrollPositions", JSON.stringify(scrollPositions));
    };
    
    return () => {
      window.onscroll = null;
    }
  }, [pathname]);

  return null;
}



const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/ai-horse-project" element={<AIHorseProject />} />
        <Route path="/ai-music-project" element={<AIMusicProject />} />
        <Route path="/laboratry" element={<Laboratry />} />
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
};
export default App;
