import { Navbar, Container, Nav } from "react-bootstrap";
import "./css/style.css"
import Logo from "../../assets/images/logo.png"
import { Link, useHistory } from 'react-router-dom'
import { auth, signOut } from "../../confiq/Firebase";


function NavBar() {
    const history = useHistory();
    let logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log(auth.currentUser)
            history.push('/')
        }).catch((error) => {
            console.log(error)
            // An error happened.
        });
    }
    return (
        <Navbar className="navBar">
            <Container fluid>
                <Navbar.Brand href="#home" className="logo" ><img className="img" src={Logo} alt="" /></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <Navbar >
                    <Nav className="myNavBar">
                        <Link className="menuItem" to="" >Products</Link>
                        <Link className="menuItem" to="" >Project Management</Link>
                        <Link className="menuItem" to="">Deals</Link>
                        <Link className="menuItem" to="">Membership</Link>
                    </Nav>
                    <Nav>

                        {auth.currentUser ? null : <Link className="menuItem1" to="/signup">Register</Link>
                        }
                        {/* <Link className="menuItem1" to="/signup">Register</Link> */}
                        {auth.currentUser ? <button className="menuItem1" onClick={() => logOut()} >
                            Log Out
                        </button> :
                            <Link className="menuItem1" to="/">
                                Sign In
                            </Link>}
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    )
}

export default NavBar;