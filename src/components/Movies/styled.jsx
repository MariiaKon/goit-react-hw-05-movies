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
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  width: 40px;
  border: none;
  background: black;
  color: white;
  font-size: 1.2em;
`;
