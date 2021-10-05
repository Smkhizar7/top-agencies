import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import "./css/style.css"
import Logo from "../../assets/images/logo.jpg"
function NavBar() {
    return (
        <Navbar collapseOnSelect expand="sm" className="navBar">
            <Container>
                <Navbar.Brand href="#home" className="logo" ><img className="img" src={Logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Products</Nav.Link>
                        <Nav.Link href="#pricing">Project Management</Nav.Link>
                        <Nav.Link href="#pricing">Deals</Nav.Link>
                        <Nav.Link href="#pricing">Membership</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Cart</Nav.Link>
                        <Nav.Link  eventKey={2} href="#memes">
                            Sign In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;