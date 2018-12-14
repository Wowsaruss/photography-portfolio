import React, { Component } from 'react';
import styled from 'styled-components';
import { LightGray } from '../colors';

const ContactMain = styled('div')`
  height: 100vh;
  background-color: ${LightGray};
`;

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    };
  }

  handleFirstName = event => {
    this.setState({ firstName: event.target.value });
  };
  handleLastName = event => {
    this.setState({ lastName: event.target.value });
  };
  handlePhone = event => {
    this.setState({ phone: event.target.value });
  };
  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleMessage = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <ContactMain>
        <h1>CONTACT</h1>
        {/* <form
          class="gform pure-form pure-form-stacked"
          method="POST"
          data-email="example@email.net"
          action="https://script.google.com/macros/s/AKfycbyYNOgI3-k5UpHEYhrPpqeWzpWTQ6KgM7pNnkNyOXMX7587lOM/exec"
        /> */}
        <form
          class="gform pure-form pure-form-stacked"
          method="POST"
          data-email="example@email.net"
          action="https://script.google.com/macros/s/AKfycbyYNOgI3-k5UpHEYhrPpqeWzpWTQ6KgM7pNnkNyOXMX7587lOM/exec">
          <label>
            First Name:
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleFirstName}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleLastName}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handlePhone}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </label>
          <label>
            Message:
            <textarea
              type="text"
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleMessage}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </ContactMain>
    );
  }
}

export default Contact;
