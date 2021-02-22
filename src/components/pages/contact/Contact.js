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
                    <h1>Contact</h1>
                    <Row>
                        <Col>
                            <Tilt className="containerLogin">
                                <div className="cardS">
                                    <div className="contentCard">
                                        <div>
                                            <img src={Phone} alt="" />
                                        </div>
                                        <button><a target="_blank" href="tel:7022036562">Phone</a></button>
                                    </div>
                                </div>
                            </Tilt >

                        </Col>
                        <Col>
                            <Tilt className="containerLogin">
                                <div className="cardS">
                                    <div className="contentCard">
                                        <div>
                                            <img src={Email} alt="" />
                                        </div>
                                        <button><a target="_blank" href="mailto:saipurciful@gmail.com">Email</a></button>
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
                                        <img src={Github} alt="" />
                                        <button><a target="_blank" href="https://github.com/Saipurciful">Github</a></button>
                                    </div>
                                </div>
                            </Tilt >

                        </Col>
                        <Col>
                            <Tilt className="containerLogin">
                                <div className="cardS">
                                    <div className="contentCard">
                                        <img src={LinkedIn} alt="" />
                                        <button><a target="_blank" href="https://www.linkedin.com/in/suthunya-purciful-59956a18b/">Linkedin</a></button>
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