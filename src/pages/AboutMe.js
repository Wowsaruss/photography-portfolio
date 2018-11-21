import React, { Component } from 'react';
import styled from 'styled-components';
import { LightRed } from '../colors';

const AboutMeMain = styled('div')`
  height: 400px;
  background-color: ${LightRed};
`;

class AboutMe extends Component {
  render() {
    return (
      <AboutMeMain>
        <h2>A Little About Me</h2>
      </AboutMeMain>
    );
  }
}

export default AboutMe;
