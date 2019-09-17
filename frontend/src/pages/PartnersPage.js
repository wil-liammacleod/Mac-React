import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import TespaBlack from '../graphics/TespaBlack.png';



export default function PartnersPage() {
    return (
        <div className="content">
            <Navbar />
            <div className="navbar-color">
                <Container >
                    <Row >
                        <Col xs="300">
                            <img src={TespaBlack} width='355px' />
                        </Col>
                        <Col>
                            <div className='padded'>
                                Tespa is the leader in collegiate esports on campus and on the competitive stage.
                                Promoting healthy competition and building connections among enthusiastic gamers is Tespa's mission for college esports.
                                With Tespa, you can meet up with other students and schools who embrace the gaming lifestyle.
                                The power to participate in events or even run your own tournament is only a click away
                            </div>
                            <Container>
                                <Row className='padded'>
                                    <Col>
                                        <div>
                                            <Button color="primary" href="https://tespa.org/">VIEW SITE</Button>{' '}
                                        </div>
                                    </Col>
                                    <Col>
                                        <div>
                                            <ButtonGroup>
                                                <Button>Twitter</Button>
                                                <Button>Facebook</Button>
                                                <Button>Discord</Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}