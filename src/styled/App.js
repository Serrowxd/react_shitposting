import React, { Component } from 'react';
// import { Container, Card, CardContainer } from './styles';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: blue;
  border: 1px solid black;
  height: 95vh;
  margin: 1rem;
  font-size: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  height: 100%;

  ${props =>
    props.main_card &&
    css`
      flex-direction: column;
      h1 {
        padding-bottom: 3rem;
      }

      button {
        margin-top: 2rem;
        padding: 1rem;
        font-size: 1.2rem;
      }
    `}

  ${props =>
    props.indv_card &&
    css`
      height: 25rem;
      background-color: white;
      border: 1px solid black;
      padding: 2rem;
    `}

  ${props =>
    props.mid &&
    css`
      height: 30rem;
    `}
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
    };
  }
  render() {
    return (
      <Container>
        <Card main_card>
          <h1> Simple, Transparent Pricing </h1>
          <CardContainer>
            <Card indv_card>
              <h1> {this.props.text} </h1>
            </Card>
            <Card indv_card mid>
              <h1> {this.props.text} </h1>
            </Card>
            <Card indv_card>
              <h1> {this.props.text} </h1>
            </Card>
          </CardContainer>
          <button> PAY ME MONEY </button>
        </Card>
      </Container>
    );
  }
}

export default App;
