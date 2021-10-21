import "./css/style.css"
import Grid from "@mui/material/Grid"
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BasicButtons, MyInputText, OrderForm } from "..";
import { Link, useHistory } from 'react-router-dom'
import { Modal } from "react-bootstrap";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Cement Order
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <OrderForm/>
            </Modal.Body>
            <Modal.Footer>
                <BasicButtons onClick={props.onHide}>Save</BasicButtons>
                <BasicButtons onClick={props.onHide}>Close</BasicButtons>
            </Modal.Footer>
        </Modal>
    );
}


export default function Dashboard() {
    const [modalShow, setModalShow] = useState()
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                item xs={9}>
                <Grid className="mt-20" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <ListItem className="orders" button>
                        <Item className="box"><h4>Pending Orders</h4></Item>
                    </ListItem>
                    <ListItem className="orders" button >
                        <Item className="box"><h4>Accepted Orders</h4></Item>
                    </ListItem>
                    <ListItem className="orders" button>
                        <Link to="/orderhistory" className="box"><h4>Orders History</h4></Link>
                    </ListItem>
                    <div className="mt-20">
                        <BasicButtons
                            onClick={() => setModalShow(true)}
                            variant="contained"
                            fullWidth={false} >
                            Add New Order</BasicButtons>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}