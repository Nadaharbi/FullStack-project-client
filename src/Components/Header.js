import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import LOGO3 from '../Images/car.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Features/UserSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [varIsOpen, setIsOpen] = useState(false);
  //const email = useSelector((state) => state.counter.user.email);
  const toggle = () => setIsOpen(!varIsOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
      // Dispatch the logout action and use .unwrap() to handle success or error
      await dispatch(logout()).unwrap();
      navigate("/");
    
  }

  return (
    <Navbar color="dark" dark expand="md" className="Rounder">
      <img src={LOGO3} alt="AutoAid logo" width="85px" height="100px" />
      <NavbarBrand href="/">AutoAid</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={varIsOpen} navbar>
        <Nav className="ml-auto" navbar>
          
          
          {/* <NavItem className="navs">
            <NavLink className="navs" href="/forum">Forum</NavLink>
          </NavItem>
          <NavItem className="navs">
            <NavLink className="navs" href="/warningSolver">Warning Solver</NavLink>
          </NavItem>
          <NavItem className="navs">
            <NavLink className="navs" href="/profile">Profile</NavLink>
          </NavItem> */}
          {/* <NavItem className="navs">
            <NavLink className="navs" href="/about">About Us</NavLink>
          </NavItem> */}
          <NavItem className="navs">
            <NavLink className="navs" href="/">Login</NavLink>
          </NavItem>
          <NavItem className="navs">
            <NavLink className="navs" onClick={handleLogout}>LogOut</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
