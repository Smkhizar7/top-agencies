import "./css/style.css"
import { Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom'
import { InputText } from "../../components"


let Login = () => {
    return (
        <Container fluid>
            <Col className="main">
                <div className="justify-content-around mt-auto">
                    <InputText type="email" className="myInput" Label="Email" title="email" />
                    <InputText type="password" className="myInput" Label="Password" title="password" />

                    <div className="myBtn">
                        <button >Login</button>
                    </div>
                    <div>
                        <h1>
                            Register
                        </h1>
                    </div>
                </div>
            </Col>
        </Container >
    )
}

export default Login;