import React, { Component } from 'react';
import styled from 'styled-components';

const ServicesMain = styled('div')`
  height: 79vh;
`;

class Services extends Component {
  render() {
    return (
      <ServicesMain>
        <h1>SERVICE</h1>
        <p>
          I am enough of an artist to draw freely upon my imagination. The point
          is that when I see a sunset or a waterfall or something, for a split
          second it's so great, because for a little bit I'm out of my brain,
          and it's got nothing to do with me. I'm not trying to figure it out,
          you know what I mean? And I wonder if I can somehow find a way to
          maintain that mind stillness.
        </p>
      </ServicesMain>
    );
  }
}

export default Services;
