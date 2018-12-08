import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: blue;
  border: 1px solid black;
  height: 95vh;
  margin: 1rem;
  font-size: 2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
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
