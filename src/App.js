import React, { Component } from 'react';
import styled from 'styled-components';
import HeroPage from './pages/Hero';
import Navbar from './pages/Navbar';
import AboutMe from './pages/AboutMe';

const MainWrapper = styled('div')``;

const Service = styled('div')`
  height: 79vh;
`;

class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Navbar />
        <HeroPage />
        <AboutMe />
        <Service>SERVICE</Service>
      </MainWrapper>
    );
  }
}

export default App;
