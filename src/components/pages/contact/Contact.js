import React from 'react';
import './contact.css'
import Tilt from 'react-tilt'
import Phone from "./phone-call (1).png"
import Github from "./github (1).png"
import Email from "./email.png"
import LinkedIn from "./linkedin-logo.png"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Login = () => {


    return (
        <div>

            <div className="body">
                <Container>
                    <Row>
                        <Col>
                            <Tilt className="containerLogin">
                                <div className="cardS">
                                    <div className="contentCard">
                                        <img src={Phone} alt="" />
                                        <button><a target="_blank" href="tel:7022036562">Phone</a></button>
                                    </div>
                                </div>
                            </Tilt >

                        </Col>
                        <Col>
                            <Tilt className="containerLogin">
                                <div className="cardS">
                                    <div className="contentCard">

                                    </div>
                                </div>
                            </Tilt>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Tilt className="containerLogin">
                                <div className="cardS">
                                    <div className="contentCard">
                                        <img src={Phone} alt="" />
                                        <button><a target="_blank" href="tel:7022036562">Phone</a></button>
                                    </div>
                                </div>
                            </Tilt >

                        </Col>
                        <Col>
                            <Tilt className="containerLogin">
                                <div className="cardS">
                                    <div className="contentCard">

                                    </div>
                                </div>
                            </Tilt>
                        </Col>
                    </Row>


                </Container>
            </div>
        </div>
    )
}

export default Login;