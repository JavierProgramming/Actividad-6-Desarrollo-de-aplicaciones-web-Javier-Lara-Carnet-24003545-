import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { changeOption } from '../../reducers/optionSlice';

import "./menu.css";

const Menu = () => {
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  const handleSelect = (selectedKey) => {
    if (selectedKey && selectedKey !== option) {
      dispatch(changeOption(selectedKey));
    }
  };

  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="mb-3">
      <Container>
        <Navbar.Brand href="#">My React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            activeKey={option} 
            onSelect={handleSelect}
            className="me-auto"
          >
            <Nav.Link eventKey="tasks">Tasks</Nav.Link>
            <Nav.Link eventKey="goals">Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
