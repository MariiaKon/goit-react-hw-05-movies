import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  font-size: 1.3em;
  padding: 4px 8px;
  border: 1px solid black;

  &::placeholder {
    font-size: 0.8em;
    color: #8a8a8a;
  }

  &:focus {
    outline-offset: -2px;
    outline: 2px solid #f51911;
  }
`;
