import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom'
import { createUserWithEmailAndPassword, auth, db, collection, doc, setDoc, onAuthStateChanged } from '../../confiq/Firebase';
import "./css/style.css"
import Swal from "sweetalert2"
import { MyInputText, BasicButtons, NavBar,} from "../../components"
import { useState } from "react";


let SignUp = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            history.push('/dashboard')
        } else {
      
        }
    });
    return (
        <>
            <NavBar />
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
                        else if (!values.contactPerson) {
                            errors.contactPerson = 'Required';
                        }
                        else if (!values.contactNum) {
                            errors.contactNum = 'Required';
                        }
                        else if (
                            !/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/g.test(values.contactNum)
                        ) {
                            errors.contactNum = 'example: 03001234567';
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
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        createUserWithEmailAndPassword(auth, values.email, values.password)
                            .then(async (res) => {
                                const users = doc(collection(db, "users"));
                                setLoading(true);
                                await setDoc(users, {
                                    userId: res.user.uid,
                                    ...values
                                })
                                    .then(() => {
                                        setLoading(false);
                                        setSubmitting(false);
                                        Swal.fire(
                                            'Registration Complete!',
                                            'User as been register successfully!',
                                            'success'
                                        )

                                    })
                                    .catch((err) => {
                                        alert("Err==>" + err);
                                    });
                                history.push('/')
                            })
                            .catch((error) => {
                                setErrorMsg(true)
                            })
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
                                    error={errors.companyName ? true : false}
                                    type="text"
                                    label="Company Name"
                                    name="companyName"
                                    helperText={errors.companyName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.companyName}
                                    fullWidth={true}
                                />
                            </div>
                            <div className="inputs_fields mt-10">
                                <MyInputText
                                    type="text"
                                    fullWidth={true}
                                    error={errors.ownerName}
                                    helperText={errors.ownerName}
                                    label="Owner Name"
                                    name="ownerName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.ownerName}
                                />
                            </div>
                            <div className="inputs_fields mt-10">
                                <MyInputText
                                    type="text"
                                    fullWidth={true}
                                    error={errors.contactPerson}
                                    helperText={errors.contactPerson}
                                    label="Contact Person Name"
                                    name="contactPerson"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contactPerson}
                                />
                            </div>
                            <div className="inputs_fields mt-10">
                                <MyInputText
                                    type="text"
                                    fullWidth={true}
                                    error={errors.contactNum}
                                    helperText={errors.contactNum}
                                    label="Contact Person Number"
                                    name="contactNum"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contactNum}
                                />
                            </div>
                            <div className="inputs_fields mt-10">
                                <MyInputText
                                    error={errors.email}
                                    type="email"
                                    fullWidth={true}
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
                                    fullWidth={true}
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
                                {errorMsg ? <div className="error">Email is already exist</div> : null}
                                <BasicButtons type="submit" variant="contained" disabled={isSubmitting} fullWidth="true" >{loading ? "Loading..." : "Register"}</BasicButtons>
                            </div>
                            <div className="myBtn">
                                <Link className="link" to="/">Login In</Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>

        </>
    )
}

export default SignUp;