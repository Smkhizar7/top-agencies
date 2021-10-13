import "./css/style.css"
import Grid from "@mui/material/Grid"
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { Link, useHistory } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Dashboard(){
    return(
        <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    item xs={9}>
                    <ListItem className="orders" button>
                        <Item className="box"><h4>Pending Orders</h4></Item>
                    </ListItem>
                    <ListItem className="orders" button >
                        <Item className="box"><h4>Accepted Orders</h4></Item>
                    </ListItem>
                    <ListItem className="orders" button>
                        <Item className="box"><h4>Balance Orders</h4></Item>
                    </ListItem>


                </Grid>
    )
}