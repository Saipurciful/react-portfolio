import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Phone from "../images/phone-call (1).png"
import Email from "../images/email.png"
import LinkedIn from "../images/linkedin-logo.png"
import Github from "../images/github (1).png"



function Contact() {
    return (

        < CardDeck className="contact" >
            <h1>Contact</h1>
            <Container>
                <Row>
                    <Col>
                        <Card className="conCard">
                            <Card.Img variant="top" src={Phone} />
                            <Card.Footer>
                                <Button variant="info" size="lg"><a target="_blank" href="tel:7022036562"> Call</a></Button>
                            </Card.Footer>
                        </Card>
                    </Col>


                    <Col>
                        <Card className="conCard">
                            <Card.Img variant="top" src={Email} />
                            <Card.Footer>
                                <Button variant="info" size="lg"><a target="_blank" href="mailto:saipurciful@gmail.com">Email</a></Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="conCard">
                            <Card.Img variant="top" src={LinkedIn} />
                            <Card.Footer>
                                <Button variant="info" size="lg"><a target="_blank" href="https://www.linkedin.com/in/suthunya-purciful-59956a18b/">Linkedin</a></Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>

                        <Card className="conCard">
                            <Card.Img variant="top" src={Github} />
                            <Card.Footer>
                                <Button variant="info" size="lg"><a target="_blank" href="https://github.com/Saipurciful">Github</a></Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </ CardDeck>

    )
}

export default Contact
