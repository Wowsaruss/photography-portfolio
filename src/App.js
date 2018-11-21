import React, { Component } from 'react';
import styled from 'styled-components';
import { LightRed } from './colors';
import HeroPage from './pages/Hero';
import Navbar from './pages/Navbar';

const MainWrapper = styled('div')``;

const AboutMe = styled('div')`
  height: 400px;
  background-color: ${LightRed};
`;

const Service = styled('div')`
  height: 79vh;
`;

class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Navbar />
        <HeroPage />
        <AboutMe>
          <h2>A Little About Me</h2>
        </AboutMe>
        <Service>SERVICE</Service>
      </MainWrapper>
    );
  }
}

export default App;
