import React, { Component } from 'react';
import styled from 'styled-components';
import HeroPage from './pages/Hero';
import Navbar from './pages/Navbar';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';

const MainWrapper = styled('div')``;

class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Navbar />
        <HeroPage />
        <AboutMe />
        <Services />
      </MainWrapper>
    );
  }
}

export default App;
