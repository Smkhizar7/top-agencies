import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom'
import { signInWithEmailAndPassword, auth,onAuthStateChanged } from '../../confiq/Firebase';
import "./css/style.css"
import Swal from "sweetalert2"
import { BasicButtons, Catergory, MyInputText, NavBar } from "../../components"

let Login = () => {
    const history = useHistory();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            history.push('/dashboard')
        } else {
            console.log("teri Maa ki ankh")
        }
    });
    return (
        <>
        <NavBar/>
        {/* <Catergory/> */}
        <div className="myContainer mt-20">
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
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
                    setTimeout(() => {
                        
                        signInWithEmailAndPassword(auth, values.email, values.password)
                            .then((res) => {
                                // setLoading(false)
                                Swal.fire(
                                    'Sign In!',
                                    'User as been sign in successfully!',
                                    'success'
                                )
                                history.push('/dashboard')
                            })
                            .catch((error) => {
                                console.log(error.message)
                            })
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
                            <h1 className="my_Heading">Login In</h1>
                            </div>
                        
                        <div className="inputs_fields mt-20">
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
                        <div className="inputs_fields mt-20">
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
                            <BasicButtons type="submit" variant="contained" disabled={isSubmitting} fullWidth= "true" >Login</BasicButtons>                             </div>
                        <div className="myBtn">
                            <Link className="link" to="/signup">Register Now</Link>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    </>
    )
}

export default Login;