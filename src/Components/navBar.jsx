import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

import { NAVBAR_TXT as TEXT } from "../Text/navBarText";
import { LANGUAGES, PAGES } from "../Text/defaults";

export default function NavBar({ language, updateLanguage, updatePage }) {
  const navButtonPressed = (buttonName) => {
    updatePage(buttonName);
  };

  const handleLanguageChange = (language) => {
    updateLanguage(language);
  };

  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer
        to="/"
        onClick={() => {
          navButtonPressed(PAGES.HOME);
        }}
      >
        <Container className="">
          <Navbar.Brand href="#home">
            <h4>{language === LANGUAGES.JP ? TEXT.JP.HOME : TEXT.ENG.HOME}</h4>
          </Navbar.Brand>
        </Container>
      </LinkContainer>
      <Container>
        <Nav className="justify-content-end">
          <LinkContainer
            to="/sudoku"
            onClick={() => {
              navButtonPressed(PAGES.SUDOKU);
            }}
          >
            <Nav.Link>
              <h5>
                {language === LANGUAGES.JP ? TEXT.JP.SUDOKU : TEXT.ENG.SUDOKU}
              </h5>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer
            to="/password"
            onClick={() => {
              navButtonPressed(PAGES.PASS_GEN);
            }}
          >
            <Nav.Link>
              <h5>
                {language === LANGUAGES.JP
                  ? TEXT.JP.PASS_GEN
                  : TEXT.ENG.PASS_GEN}
              </h5>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>

      <Dropdown className="justify-content-end">
        <Dropdown.Item onClick={() => handleLanguageChange(LANGUAGES.ENG)}>
          English
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange(LANGUAGES.JP)}>
          日本語
        </Dropdown.Item>
      </Dropdown>
    </Navbar>
  );
}
