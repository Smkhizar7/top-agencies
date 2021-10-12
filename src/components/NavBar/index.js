import { Navbar,Container, Nav } from "react-bootstrap";
import "./css/style.css"
import Logo from "../../assets/images/logo.png"
import { Link, useHistory } from 'react-router-dom'
function NavBar() {
    return (
        <Navbar className="navBar">
            <Container fluid>
                <Navbar.Brand href="#home" className="logo" ><img className="img" src={Logo} alt=""/></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <Navbar >
                    <Nav className="myNavBar">
                        <Link className="menuItem" to="" >Products</Link>
                        <Link className="menuItem" to="/signup">Register Now</Link>
                        <Link className="menuItem" to="" >Project Management</Link>
                        <Link className="menuItem" to="">Deals</Link>
                        <Link className="menuItem" to="">Membership</Link>
                    </Nav>
                    <Nav>
                        <Link className="menuItem1" to="">Cart</Link>
                        <Link className="menuItem1"  eventKey={2} to="/login">
                            Sign In
                        </Link>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    )
}

export default NavBar;