import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import ThemeToggler from './ThemeToggler';

const ExternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const InternalNavLink = styled(NavLink)`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
  &.navbar__link--active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor};
  }
`;

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [dropdownsOpen, setDropdownsOpen] = useState([]);

  const handleToggleDropdown = (index) => {
    const newDropdownsOpen = [...dropdownsOpen];
    newDropdownsOpen[index] = !newDropdownsOpen[index];
    setDropdownsOpen(newDropdownsOpen);
  };

  useEffect(() => {
    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  const history = useHistory();
  const redirectToSkillDetails = (skillTitle) => {
    history.push(`${skillTitle}`);
    setExpanded(false);
  };
  return (
    <Navbar
      fixed="top"
      expand="md"
      bg="dark"
      variant="dark"
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        {data?.logo && (
          <Link to="/">
            <Navbar.Brand style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <p>Corentin Lart</p>
            </Navbar.Brand>
          </Link>
        )}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            {data
              && data.sections?.map((section, index) => {
                if (section?.type === 'link') {
                  return (
                    <ExternalNavLink
                      key={section.title}
                      href={section.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setExpanded(false)}
                      className="navbar__link"
                      theme={theme}
                    >
                      {section.title}
                    </ExternalNavLink>
                  );
                }
                if (section?.type === 'dropdown') {
                  return (
                    <InternalNavLink
                      key={section.title}
                      onClick={() => setExpanded(false)}
                      exact={index === 0}
                      activeClassName="navbar__link--active"
                      className="navbar__link"
                      to={section.href}
                      theme={theme}
                      style={{ display: 'inline-block' }}
                    >
                      <NavDropdown
                        title={section.title}
                        id="basic-nav-dropdown"
                        show={dropdownsOpen[index]}
                        onToggle={() => handleToggleDropdown(index)}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {Object.entries(section.actions[0]).map(([actionTitle, actionUrl]) => (
                          <NavDropdown.Item onClick={() => redirectToSkillDetails(actionUrl)}>
                            {actionTitle}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    </InternalNavLink>
                  );
                }
                return (
                  <InternalNavLink
                    key={section.title}
                    onClick={() => setExpanded(false)}
                    exact={index === 0}
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to={section.href}
                    theme={theme}
                  >
                    {section.title}
                  </InternalNavLink>
                );
              })}
          </Nav>
          <ThemeToggler
            onClick={() => setExpanded(false)}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;
