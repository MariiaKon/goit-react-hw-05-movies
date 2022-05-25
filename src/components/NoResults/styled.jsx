import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Msg = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 0 40px;
  font-weight: 600;
  font-size: 34px;
  text-transform: uppercase;
`;

export const GoHomeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  width: fit-content;
  border: none;
  background: black;
  color: white;
  font-size: 0.9em;
  padding: 20px;

  &:hover {
    background: #f51911;
  }
`;

export const GoHomeLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
