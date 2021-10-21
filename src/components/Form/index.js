import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { MyInputText } from '..';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import "./css/style.css"
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';



const OrderForm = () => {



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
        acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
    })

    const [brand, setBrand] = useState('');
    const handleChangeSelect = (event) => {
        setBrand(event.target.value);
    };

    return (
        <>
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
                    //   acceptedTerms: false, // added for our checkbox
                }}
                validationSchema={Sigma}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                // onSubmit={values => {
                //     // same shape as initial values
                //     console.log(values);
                // }}
            >
                {({ errors, touched, handleChange, }) => (
                    <Form>

                        <div className="brands">
                            <div className="brands_div mt-20">
                                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                                    <InputLabel id="labelBrand">Brand</InputLabel>
                                    <Select
                                        labelId="labelBrand"
                                        id="brand"
                                        value={brand}
                                        label="Brand"
                                        onChange={handleChangeSelect}
                                        error={errors.brand && touched.brand ? true : false}
                                    >
                                        <MenuItem disabled value="">
                                            <em>Placeholder</em>
                                        </MenuItem>
                                        <MenuItem value="Lucky Cement">Lucky Cement</MenuItem>
                                        <MenuItem value="Power Cement">Power Cement</MenuItem>
                                        <MenuItem value="Dg Cement">D.G Cement</MenuItem>
                                        <MenuItem value="Falcon Cement">Falcon</MenuItem>
                                        <MenuItem value="Meaple Leaf">Meaple Leaf</MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.brand && touched.brand ? errors.brand : null}</FormHelperText>
                                </FormControl>


                            </div>
                            {/* <div className="brands_div mt-20">
                                <FormLabel component="legend">Brand Type</FormLabel>
                                <RadioGroup className="radio"
                                    aria-label="gender"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="OPC" control={<Radio />} label="OPC" />
                                    <FormControlLabel value="SRC" control={<Radio />} label="SRC" />
                                    <FormControlLabel value="OPC-Loose" control={<Radio />} label="OPC-Loose" />
                                    <FormControlLabel value="SRC-Loose" control={<Radio />} label="SRC-Loose" />
                                    <FormControlLabel value="White" control={<Radio />} label="White" />
                                </RadioGroup>
                            </div> */}
                        </div>


                        <button type="submit">Submit</button>
                    </Form>
                )}


                {/* <Form>
                        <div className="modal_Inputs mt-10">
                            <MyInputText
                                type="text"
                                label="Project Name"
                                name="projectName"
                                fullWidth={true}
                                error={{ errors.projectName && touched.projectName ? true : false }}

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

                        <button type="submit">Submit</button>
                    </Form>
                )} */}
            </Formik>
        </>
    );
};

export default OrderForm;