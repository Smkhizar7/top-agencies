import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { MyInputText } from '..';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import "./css/style.css"

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

// And now we can use these
const OrderForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    projectName: '',
                    siteAddress: '',
                    plotSize: '',
                    brand: '', // added for our select
                    brandType: '', // added for our select
                    quantity: '',
                    rate: '',
                    contactPerson: '',
                    contactNum: '',
                    //   acceptedTerms: false, // added for our checkbox
                }}
                validationSchema={Yup.object({
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
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <div className="modal_Inputs mt-10">
                        <MyInputText
                            type="text"
                            label="Project Name"
                            name="projectName"
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
                    <div className="modal_Inputs1 mt-10">
                        <MyInputText
                            type="text"
                            label="Plot Size"
                            name="plotSize"
                            fullWidth={false}
                        />
                        <MyInputText
                            type="text"
                            label="Quantiy (Bags)"
                            name="quantity"
                            fullWidth={false}
                        />
                        <MyInputText
                            type="text"
                            label="Rate per Bag"
                            name="rate"
                            fullWidth={false}
                        />
                    </div>
                    <div className="brands">
                        <div className="brands_div mt-20">
                            <FormLabel component="legend">Brand</FormLabel>
                            <MySelect name="brand">
                                <option value="">Select a job type</option>
                                <option value="Lucky Cement">Lucky Cement</option>
                                <option value="Power Cement">Power Cement</option>
                                <option value="Dg Cement">D.G Cement</option>
                                <option value="Falcon Cement">Falcon</option>
                                <option value="Meaple Leaf">Meaple Leaf</option>
                            </MySelect>
                        </div>
                        <div className="brands_div mt-20">
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
                        </div>
                    </div>

                    <MyCheckbox name="acceptedTerms">
                        I accept the terms and conditions
                    </MyCheckbox>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default OrderForm;