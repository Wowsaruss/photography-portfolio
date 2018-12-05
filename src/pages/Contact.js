import React, { Component } from 'react';
import styled from 'styled-components';
import { LightGray } from '../colors';

const ContactMain = styled('div')`
  height: 100vh;
  background-color: ${LightGray};
`;

class Contact extends Component {
  render() {
    return <ContactMain>CONTACT</ContactMain>;
  }
}

export default Contact;
