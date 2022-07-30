import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{margin:'-15px 0px'}}><img
                    src="./images/logo.png"
                    width="90"
                    height="85"
                    className="d-inline-block align-top"
                    alt="MarchTech logo"
                /></Navbar.Brand>
                <Navbar.Brand href="#home">MarkTech</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Catálogo</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">
                                NOTEBOOKS
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.">PC ESCRITORIO</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">PC GAMER</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                VER MÁS
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Ingresar</Nav.Link>
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