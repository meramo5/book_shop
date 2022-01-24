import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../../../Style/style.css';
import logo from '../../../images/logo.png';
const Header = () => {
    const { user, logout} = useAuth();
    return (
        <div>
            
        </div>
    );
};

export default Header;
