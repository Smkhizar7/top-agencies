import Grid from "@mui/material/Grid"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import "./css/style.css"
import { Dashboard, NavBar, Slider } from "../../components";
import { Link, useHistory } from 'react-router-dom'
import { propTypes } from "react-bootstrap/esm/Image";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DrawerHeader = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
export default function Profile({children}) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar />
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <DrawerHeader className="d_Header">
                        {/* <img className="" src="" alt="" /> */}
                        <h1>Jiye Bhutto</h1>
                    </DrawerHeader>
                    <ListItem button>
                        <ListItemText>
                            <Link className="our_Link" to="/dashboard">DashBoard</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                            <Link className="our_Link" to="/pendingorders">Pending Orders</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                            <Link className="our_Link" to="/currentorders">Current Order</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                            <Link className="our_Link" to="/orderhistory">Order History</Link>
                        </ListItemText>
                    </ListItem>
                </Grid>
                {children}
            </Grid>
        </Box>
    );
}