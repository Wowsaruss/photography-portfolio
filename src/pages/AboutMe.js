import React, { Component } from 'react';
import styled from 'styled-components';
import { LightGray } from '../colors';

const AboutMeMain = styled('div')`
  height: 400px;
  background-color: ${LightGray};
`;

class AboutMe extends Component {
  render() {
    return (
      <AboutMeMain>
        &dArr;
        <h2>A Little About Me</h2>
        <p>
          I am enough of an artist to draw freely upon my imagination. The point
          is that when I see a sunset or a waterfall or something, for a split
          second it's so great, because for a little bit I'm out of my brain,
          and it's got nothing to do with me. I'm not trying to figure it out,
          you know what I mean? And I wonder if I can somehow find a way to
          maintain that mind stillness.
        </p>
      </AboutMeMain>
    );
  }
}

export default AboutMe;
