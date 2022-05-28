import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 40px;
  width: fit-content;
  min-height: 40px;
  height: fit-content;
  border: none;
  background: black;
  color: white;
  padding: 10px;

  &:hover {
    background: #f51911;
  }

  &.search {
    padding: 0;
    font-size: 1.2em;
  }

  &.goHome {
    padding: 10px 20px;
    font-size: 0.8em;
  }

  &.goBack {
    min-height: 24px;
    margin-bottom: 20px;
    font-size: 0.7em;
    padding: 0 10px;
  }
`;
