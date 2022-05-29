import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  font-size: 1.3em;
  padding: 4px 8px;
  border: 1px solid black;
  width: calc(100vw - 100px);

  @media screen and (min-width: 400px) {
    width: 300px;
  }

  &::placeholder {
    font-size: 0.8em;
    color: #8a8a8a;
  }

  &:focus {
    outline-offset: -2px;
    outline: 2px solid #f51911;
  }
`;
