import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Contact() {
    return (
        <CardDeck className="contact">
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="phone-call (1).png" />
                            <Card.Body>

                                <Card.Text>
                                    <Button variant="info" size="lg"><a target="_blank" href="tel:7022036562">Call</a></Button>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="email.png" />
                            <Card.Body>

                                <Card.Text>
                                    <Button variant="info" size="lg"><a target="_blank" href="mailto:saipurciful@gmail.com">Email</a></Button>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="github (1).png" />
                            <Card.Body>

                                <Card.Text>
                                    <Button variant="info" size="lg"><a target="_blank" href="https://github.com/Saipurciful">Github</a></Button>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>

                        <Card>
                            <Card.Img variant="top" src="linkedin-logo.png" />
                            <Card.Body>

                                <Card.Text>
                                    <Button variant="info" size="lg"><a target="_blank" href="https://www.linkedin.com/in/suthunya-purciful-59956a18b/">Linkedin</a></Button>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>

                        <Card>
                            <Card.Img variant="top" src="line.png" />
                            <Card.Body>

                                <Card.Text>
                                    <Button variant="info" size="lg"><a>Line: QR code</a></Button>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </CardDeck>

    )
}

export default Contact
