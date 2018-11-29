import React, { Component } from 'react';
import styled from 'styled-components';
import HeroPage from './pages/Hero';
import Navbar from './pages/Navbar';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import { DarkBlue } from './colors';

const MainWrapper = styled('div')`
  background-color: ${DarkBlue};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
