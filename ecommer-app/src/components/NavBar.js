import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { LinkContainer } from 'react-router-bootstrap'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <LinkContainer to='/' style={{ margin: '-15px 0px' }}>
                    <Navbar.Brand>
                        <img src="../images/logo.png"
                            width="90"
                            height="85"
                            className="d-inline-block align-top"
                            alt="MarchTech logo" />
                    </Navbar.Brand>
                </LinkContainer>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                        MarkTech
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>
                                Catálogo
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/'>
                            <Nav.Link>
                                Contacto
                            </Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                            <LinkContainer to='/category/notebook'>
                                <NavDropdown.Item >
                                    NOTEBOOKS
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/category/office'>
                                <NavDropdown.Item>
                                    PC ESCRITORIO
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/category/gamer'>
                                <NavDropdown.Item>
                                    PC GAMER
                                </NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                VER MÁS
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            Ingresar
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;