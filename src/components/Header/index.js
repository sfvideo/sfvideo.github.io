import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Logo from '../Logo';
import Container from '../Container';
import { colors } from '../../style-vars';

const NavContainer = styled.div`
  border-bottom: 1px solid ${colors.dark};
  height: 100px;
  display: flex;
  align-items: center;
`;

const NavBar = Container.extend`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const NavLogo = styled(Logo)`
  max-height: 2em;
  width: auto;
`;

const NavLinks = styled.ul`
  margin: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 1em;
  margin: 0 1em 0 0;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: ${colors.dark};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <NavContainer>
    <NavBar>
      <Link to="/"><NavLogo /></Link>

      <NavLinks>
        <NavItem>
          <Link to="/next-meetup/">Next Meetup</Link>
        </NavItem>
        <NavItem>
          <Link to="/propose">Propose a Speaker</Link>
        </NavItem>
      </NavLinks>
    </NavBar>
  </NavContainer>
)

export default Header
