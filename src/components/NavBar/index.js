import { Navbar, Container, Nav } from "react-bootstrap";
import "./css/style.css"
import Logo from "../../assets/images/logo.png"
import { Link, useHistory } from 'react-router-dom'
import { auth, signOut } from "../../confiq/Firebase";
import { useState } from "react";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocationCityIcon from '@mui/icons-material/LocationCity';
const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    minHeight: '82px',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-start',
}));




function NavBar({ children, user }) {
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
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
        <>
            <Navbar className="navBar">
                <Container fluid>
                    <Navbar.Brand href="#home" className="logo" ><img className="img" src={Logo} alt="" /></Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                    <Navbar >
                        <Nav>

                            <div className={open ? "mr-100" : "my_menu"}>
                                {auth.currentUser ? null : <Link className="menuItem1" to="/signup">Register</Link>
                                }
                                {/* <Link className="menuItem1" to="/signup">Register</Link> */}
                                {auth.currentUser ? <button className="menuItem1" onClick={() => logOut()} >
                                    Log Out
                                </button> :
                                    <Link className="menuItem1" to="/">
                                        Sign In
                                    </Link>}
                            </div>
                            {auth.currentUser ?
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                                >
                                    <MenuIcon />
                                </IconButton> : null}
                            <Drawer
                                sx={{
                                    width: 0,
                                    flexShrink: 0,
                                    '& .MuiDrawer-paper': {
                                        width: drawerWidth,
                                        boxSizing: 'border-box',
                                    },
                                }}
                                variant="persistent"
                                anchor="right"
                                open={open}
                            >
                                <DrawerHeader>
                                    <IconButton onClick={handleDrawerClose}>
                                        {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                    </IconButton>
                                    <h5>{user}</h5>
                                </DrawerHeader>
                                <Divider />

                                <div className="sideBtn">
                                    <ListItem button>
                                        <ListItemText>
                                            <Link className="our_Link" to="/dashboard">DashBoard</Link>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <div className="sideBtn">
                                    <ListItem button>
                                        <ListItemText>
                                            <Link className="our_Link" to="/pendingorders">Pending Orders</Link>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <div className="sideBtn">
                                    <ListItem button>
                                        <ListItemText>
                                            <Link className="our_Link" to="/currentorders">Current Order</Link>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <div className="sideBtn">
                                    <ListItem button>
                                        <ListItemText>
                                            <Link className="our_Link" to="/orderhistory">Order History</Link>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <List>
                                    <div className="sideBtn">
                                        <ListItem button key={"Construction Tools"}>
                                            <ListItemIcon>
                                                <LocationCityIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={"Construction Tools"} />
                                        </ListItem>
                                    </div>
                                </List>
                            </Drawer>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
            <div className="content_Body">
                {children}
            </div>
        </>
    )
}

export default NavBar;