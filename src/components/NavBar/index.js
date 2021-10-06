import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import "./css/style.css"
import Logo from "../../assets/images/logo.png"
function NavBar() {
    return (
        <Navbar className="navBar">
            <Container fluid>
                <Navbar.Brand href="#home" className="logo" ><img className="img" src={Logo} alt=""/></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <Navbar >
                    <Nav className="myNavBar">
                        <Nav.Link className="menuItem" href="#features">Products</Nav.Link>
                        <Nav.Link className="menuItem" href="#pricing">Project Management</Nav.Link>
                        <Nav.Link className="menuItem"href="#pricing">Deals</Nav.Link>
                        <Nav.Link className="menuItem"href="#pricing">Membership</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="menuItem1" href="#deets">Cart</Nav.Link>
                        <Nav.Link className="menuItem1"  eventKey={2} href="#memes">
                            Sign In
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    )
}

export default NavBar;