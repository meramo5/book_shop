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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><Image
                        className='logo' src={logo}
                    ></Image> Books</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/books">All Books</Nav.Link>
                        </Nav>
                        <Nav className='ml-auto'>
                            <Navbar.Text className='me-2'>
                                {user?.displayName}
                            </Navbar.Text>
                            {user?.email ? (
                                <><NavDropdown title={<Image
                                    className='user-image' src={user?.photoURL}
                                ></Image> || 'Login'} id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className='bg-dark'>
                                        {
                                            user?.email ?
                                                <button className="btn btn-dark logout-button" onClick={logout}>Logout</button>
                                                :
                                                <Nav.Link></Nav.Link>
                                        }
                                    </NavDropdown.Item>
                                </NavDropdown>
                                </>
                            ) : (
                                <Nav.Link as={NavLink} to='/login'>
                                    Login
                                </Nav.Link>
                            )}
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;
