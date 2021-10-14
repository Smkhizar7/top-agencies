import "./css/style.css"
import Grid from "@mui/material/Grid"
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BasicButtons, MyInputText } from "..";
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
                <div className="modal_Inputs mt-10">
                    <MyInputText
                        type="text"
                        label="Site Name"
                        name="siteName"
                        fullWidth={true}
                    />
                </div>
                <div className="modal_Inputs mt-10">
                    <MyInputText
                        type="text"
                        label="Site Address"
                        name="siteAddress"
                        fullWidth={true}
                    />
                </div>
                <div className="modal_Inputs mt-10">
                    <MyInputText
                        type="text"
                        label="Plot Size"
                        name="plotSize"
                        fullWidth={true}
                    />
                </div>
                <div className="modal_Inputs mt-10">
                    <MyInputText
                        type="text"
                        label="Brand Required"
                        name="brandRequired"
                        fullWidth={true}
                    />
                </div>
                <div className="modal_Inputs mt-10">
                    <MyInputText
                        type="text"
                        label="Cement Type"
                        name="cementType"
                        fullWidth={true}
                    />
                </div>
                <div className="modal_Inputs mt-10">
                    <MyInputText
                        type="text"
                        label="Quantity"
                        name="quantity"
                        fullWidth={true}
                    />
                </div>
                <div className="modal_Inputs mt-10">
                    <MyInputText
                        type="text"
                        label="Rates"
                        name="rates"
                        fullWidth={true}
                    />
                </div>
                <div className="modal_Inputs mt-10">
                    <MyInputText
                        type="text"
                        label="Contact Person Name"
                        name="contactPerson"
                        fullWidth={true}
                    />
                </div>
                <div className="modal_Inputs mt-10">
                    <MyInputText
                        type="text"
                        label="Contact Person Number"
                        name="contactNum"
                        fullWidth={true}
                    />
                </div>
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