import React, { Component } from 'react';
import styled from 'styled-components';
import HeroPage from './pages/Hero';
import Navbar from './pages/Navbar';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';

const MainWrapper = styled('div')``;

class App extends Component {
  constructor() {
    super();
    this.state = {
      navOpen: true
    };
  }

  render() {
    return (
      <MainWrapper>
        {this.state.navOpen ? <Navbar /> : <div />}
        <HeroPage />
        <AboutMe />
        <Services />
      </MainWrapper>
    );
  }
}

export default App;
