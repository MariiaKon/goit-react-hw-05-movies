import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-column-gap: 20px;
  padding: 20px;
  box-shadow: 0px 1px 7px #8a8a8a;
  font-size: 1.1em;

  @media screen and (min-width: 800px) {
    padding: 20px 100px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: black;

  &.active {
    color: #f51911;
  }
`;

export const Main = styled.main`
  padding: 20px;

  @media screen and (min-width: 800px) {
    padding: 20px 100px;
  }
`;
