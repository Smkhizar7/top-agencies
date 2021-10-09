import { useState } from 'react';
import { Formik } from 'formik';
import { Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom'
import { createUserWithEmailAndPassword, auth } from '../../confiq/Firebase';
import "./css/style.css"
import Swal from "sweetalert2"
import { MyInputText } from "../../components"


let SignUp = () => {
    const history = useHistory();
    return (
        <div className="myContainer mt-20">
            <Formik
                initialValues={{ companyName: '', ownerName: '', email: '', password: '', contactPerson: '', contactNum: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.companyName) {
                        errors.companyName = 'Required';
                    }
                    else if (!values.ownerName) {
                        errors.ownerName = 'Required';
                    }
                    else if (!values.email) {
                        errors.email = 'Required';
                    }
                    else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    else if (!values.password) {
                        errors.password = 'Required';
                    }
                    else if (values.password.length < 6) {
                        errors.password = 'Password must be atleast 6 digits';
                    }
                    else if (!values.contactPerson) {
                        errors.contactPerson = 'Required';
                    }
                    else if (!values.contactNum) {
                        errors.contactNum = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        createUserWithEmailAndPassword(auth, values.email, values.password)
                            .then((res) => {
                                // setLoading(false)
                                Swal.fire(
                                    'Registration Complete!',
                                    'User as been register successfully!',
                                    'success'
                                )
                                console.log("agaya===>", res)
                                // history.push('/')
                            })
                            .catch((err) => {
                                // setLoading(false)
                                console.log("masla agaya==>", err)
                            })
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="inputs_fields mt-10">
                            <h1 className="my_Heading">Sign Up</h1>
                            </div>
                        <div className="inputs_fields mt-10">
                            <MyInputText
                                error={errors.companyName}
                                type="text"
                                label="Company Name"
                                name="company Name"
                                helperText={errors.companyName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.companyName}
                                fullWidth= {true}
                            />
                        </div>
                        <div className="inputs_fields mt-10">
                            <MyInputText
                                type="text"
                                fullWidth= {true}
                                error={errors.lastName}
                                helperText={errors.lastName}
                                label="Last Name"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                        </div>
                        <div className="inputs_fields mt-10">
                            <MyInputText
                                error={errors.email}
                                type="email"
                                fullWidth= {true}
                                helperText={errors.email}
                                label="Email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </div>
                        <div className="inputs_fields mt-10">
                            <MyInputText
                                type="password"
                                fullWidth= {true}
                                error={errors.password}
                                helperText={errors.password}
                                label="Password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </div>
                        <div className="myBtn">
                            <button type="submit" disabled={isSubmitting}>Register</button>                             </div>
                        <div>
                            {/* <Link to="/">Login</Link> */}
                        </div>
                    </form>
                )}
            </Formik>
        </div>


    )
}

export default SignUp;