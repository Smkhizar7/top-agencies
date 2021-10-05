import { Navbar,NavDropdown,Container,Nav } from "react-bootstrap";
import "./css/style.css"

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="sm"  className="navBar">
            <Container>
                <Navbar.Brand href="#home" >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle className="txt_white" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto txt_white">
                        <Nav.Link className="txt_white" href="#features">Features</Nav.Link>
                        <Nav.Link className="txt_white"href="#pricing">Pricing</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link className="txt_white" href="#deets">More deets</Nav.Link>
                        <Nav.Link className="txt_white" eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;