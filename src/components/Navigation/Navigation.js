// // import styled from "styled-components";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav-background">
    <Navbar expand="md" bg="none" expand="lg">

        <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/news" activeClassName="active">News</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </Nav>
          <Form className="d-flex search-input--padding">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Go</Button>
          </Form>
        </Navbar.Collapse>

    </Navbar>
    </div>

  );
}

export default Navigation;
