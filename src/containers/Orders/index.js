import "./css/style.css"
import Grid from "@mui/material/Grid"
import { BasicButtons, MyInputText } from "../../components";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import React from 'react';
import { Formik, Form, useField, Field } from 'formik';
import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { db, collection, doc, setDoc } from "../../confiq/Firebase";

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Select {...field} {...props} />
    );
};


function MyVerticallyCenteredModal(props) {
    const [loading, setLoading] = useState(false);
    const Sigma = Yup.object({
        projectName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        siteAddress: Yup.string()
            .max(100, 'Must be 100 characters or less')
            .required('Required'),
        plotSize: Yup.string()
            .required('Required'),
        brand: Yup.string()
            .oneOf(
                ['Lucky Cement', 'Power Cement', 'Dg Cement', 'Pakland Cement', 'Popular Cement', 'Falcon Cement', 'Meaple Leaf Cement'],
                'Invalid Brand'
            )
            .required('Required'),
        brandType: Yup.string()
            .required('Required'),
        quantity: Yup.number()
            .required('Required'),
        rate: Yup.number()
            .required('Required'),
        contactPerson: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        contactNum: Yup.number()
            .required('Required'),

    })
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
                <Formik
                    initialValues={{
                        projectName: "",
                        siteAddress: "",
                        plotSize: "",
                        brand: "", // added for our select
                        brandType: "", // added for our select
                        quantity: "",
                        rate: "",
                        contactPerson: "",
                        contactNum: ""

                    }}
                    validationSchema={Sigma}
                    onSubmit={async (values, actions) => {
                        const newCityRef = doc(collection(db, "orders"));
                        setLoading(true);
                        await setDoc(newCityRef, {
                            orderId: newCityRef.id,
                            ...values,
                            orderStatus: "pending"
                        })
                            .then((res) => {
                                setLoading(false);
                                actions.setSubmitting(false);
                                props.onHide();
                                alert("Order Added Successfully")
                            })
                            .catch((err) => {
                                alert("Err==>" + err);
                            });
                    }}

                >
                    {({ errors, touched, handleChange, handleSubmit }) => (
                        <Form submit={handleSubmit}>
                            <div className="modal_Inputs1 mt-10">
                                <MyInputText
                                    name="projectName"
                                    type="text"
                                    label="Project Name"
                                    fullWidth={true}
                                    onChange={handleChange}
                                    error={errors.projectName && touched.projectName ? true : false}
                                    helperText={errors.projectName && touched.projectName ? errors.projectName : null}
                                />
                            </div>
                            <div className="modal_Inputs1 mt-10">
                                <MyInputText
                                    name="siteAddress"
                                    type="text"
                                    label="Site Address"
                                    fullWidth={true}
                                    onChange={handleChange}
                                    error={errors.siteAddress && touched.siteAddress ? true : false}
                                    helperText={errors.siteAddress && touched.siteAddress ? errors.siteAddress : null}
                                />
                            </div>
                            <div className="modal_Inputs1 mt-10">
                                <div className="short_Input">
                                    <MyInputText
                                        type="text"
                                        label="Plot Size"
                                        name="plotSize"
                                        fullWidth={true}
                                        onChange={handleChange}
                                        error={errors.plotSize && touched.plotSize ? true : false}
                                        helperText={errors.plotSize && touched.plotSize ? errors.plotSize : null}

                                    />
                                </div>
                                <div className="short_Input">
                                    <MyInputText
                                        type="number"
                                        label="Quantiy (Bags)"
                                        name="quantity"
                                        fullWidth={true}
                                        onChange={handleChange}
                                        error={errors.quantity && touched.quantity ? true : false}
                                        helperText={errors.quantity && touched.quantity ? errors.quantity : null}
                                    />
                                </div>
                                <div className="short_Input">
                                    <MyInputText
                                        type="number"
                                        label="Rate per Bag"
                                        name="rate"
                                        fullWidth={true}
                                        onChange={handleChange}
                                        error={errors.rate && touched.rate ? true : false}
                                        helperText={errors.rate && touched.rate ? errors.rate : null}
                                    />
                                </div>
                            </div>
                            <div className="brands">
                                <div className="brands_div mt-20">
                                    <FormControl xs={2} sx={{ m: 1, width: "100%", mt: 3 }}>
                                        <InputLabel id="labelBrand">Brand</InputLabel>
                                        <Select
                                            labelId="labelBrand"
                                            id="brand"
                                            name="brand"
                                            label="Brand"
                                            onChange={handleChange}
                                            error={errors.brand && touched.brand ? true : false}
                                        >
                                            <MenuItem disabled value=""><em>Select any Brand</em></MenuItem>
                                            <MenuItem value="Lucky Cement">Lucky Cement</MenuItem>
                                            <MenuItem value="Power Cement">Power Cement</MenuItem>
                                            <MenuItem value="Dg Cement">D.G Cement</MenuItem>
                                            <MenuItem value="Falcon Cement">Falcon</MenuItem>
                                            <MenuItem value="Meaple Leaf">Meaple Leaf</MenuItem>
                                        </Select>
                                        <FormHelperText>{errors.brand && touched.brand ? errors.brand : null}</FormHelperText>
                                    </FormControl>
                                </div>

                                <div className="brands_div mt-20">
                                    <FormLabel component="legend">Brand Type</FormLabel>
                                    <div className="radioBtn">
                                        <label className="ml-5"><Field type="radio" name="brandType" value="OPC" /> OPC</label>
                                        <label className="ml-5"><Field type="radio" name="brandType" value="SRC" /> SRC</label>
                                        <label className="ml-5"><Field type="radio" name="brandType" value="OPC-Loose" /> OPC-Loose</label>
                                        <label className="ml-5"><Field type="radio" name="brandType" value="SRC-Loose" /> SRC-Loose</label>
                                        <label className="ml-5"><Field type="radio" name="brandType" value="White" /> White</label>
                                    </div>
                                    {errors.brandType ? (<div className="error">
                                        {errors.brandType}
                                    </div>) : null}

                                </div>
                            </div>
                            <div className="modal_Inputs1 mt-10">
                                <MyInputText
                                    name="contactPerson"
                                    type="text"
                                    label="Contact Person Name"
                                    fullWidth={true}
                                    onChange={handleChange}
                                    error={errors.contactPerson && touched.contactPerson ? true : false}
                                    helperText={errors.contactPerson && touched.contactPerson ? errors.contactPerson : null}
                                />
                            </div>
                            <div className="modal_Inputs1 mt-10">
                                <MyInputText
                                    name="contactNum"
                                    type="number"
                                    label="Contact Person Number"
                                    fullWidth={true}
                                    onChange={handleChange}
                                    error={errors.contactNum && touched.contactNum ? true : false}
                                    helperText={errors.contactNum && touched.contactNum ? errors.contactNum : null}
                                />
                            </div>
                            <div className="modalFooter mt-10">
                                <BasicButtons className="modalBtn" disabled={loading} type="submit">{loading ? "Loading..." : "Save"}</BasicButtons>
                                <BasicButtons className="modalBtn" onClick={props.onHide}>Close</BasicButtons>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>

        </Modal>
    );
}

export default function Orders() {
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
                    <div className="mt-20 myOrderBtn">
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
