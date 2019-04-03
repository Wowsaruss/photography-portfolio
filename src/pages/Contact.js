import React, { Component } from 'react';
import styled from 'styled-components';
import { LightGray } from '../colors';

const ContactMain = styled('div')`
  height: 100vh;
  background-color: ${LightGray};
`;

const FormWrapper = styled('div')`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ContactWrapper = styled('form')``;

const InputTitle = styled('h3')`
  margin: 0px;
`;

const NameWrapper = styled('div')`
  display: flex;
  flex-direction: row;
`;

const Names = styled('label')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Name = styled('input')`
  width: 200px;
  height: 30px;
  box-sizing: border-box;
  padding: -0px;
  ::placeholder {
    color: grey;
    font-size: 20px;
  }
  outline: none;
`;

const EmailInput = styled('input')`
  width: 450px;
  height: 30px;
  outline: none;
`;

const TextBox = styled('textarea')`
  width: 450px;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  outline: none;
`;

const SubmitButton = styled('input')`
  width: 450px;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid black;
  color: #000000;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  outline: none;
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
        <FormWrapper
          class="gform pure-form pure-form-stacked"
          method="POST"
          data-email="example@email.net"
          action="https://script.google.com/macros/s/AKfycbyYNOgI3-k5UpHEYhrPpqeWzpWTQ6KgM7pNnkNyOXMX7587lOM/exec">
          <NameWrapper>
            <Names>
              <InputTitle>Name</InputTitle>
              <Name
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First"
                value={this.state.firstName}
                onChange={this.handleFirstName}
              />
            </Names>
            <Names>
              <Name
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last"
                value={this.state.lastName}
                onChange={this.handleLastName}
              />
            </Names>
          </NameWrapper>
          <ContactWrapper>
            <label>
              <InputTitle>Email</InputTitle>
              <EmailInput
                type="text"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={this.state.email}
                onChange={this.handleEmail}
              />
            </label>
          </ContactWrapper>
          <label>
            <InputTitle>Message</InputTitle>
            <TextBox
              type="text"
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleMessage}
            />
          </label>
          <SubmitButton type="submit" value="SUBMIT" />
        </FormWrapper>
      </ContactMain>
    );
  }
}

export default Contact;
