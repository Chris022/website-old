import React from 'react';
import './App.css';

import Porojects from './Projects';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Navbar from './Navbar';


function App() {
  return (
    <>
      <Navbar/>
      
      <Banner/>

      <AboutMe/>

      <Porojects/>
      </>

    
  );
}

export default App;