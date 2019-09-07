import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';



export default function PartnersPage() {
    return (
        <div className="content">
            <Navbar/>

            <Container>
                <Row className="navbar-color">
                    <Col>
                        <img src='http://carleton.gg/wp-content/uploads/2018/06/TespaBlack.png' height='200px' />
                    </Col>
                    <Col>
                        <div>
                            Tesla is the leader in collegiate esports on campus and on the competitive stage. 
                            Promoting healthy competition and building connections among enthusiastic gamers is Tespa's mission for college esports. 
                            With Tespa, you can meet up with other students and schools who embrace the gaming lfiestyle. 
                            The power to participate in events or even run your own tournament is only a click away
                        </div>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        <Button color="primary">VIEW SITE</Button>{' '}
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <ButtonGroup>
                                            <Button></Button>
                                            <Button>Middle</Button>
                                            <Button>Right</Button>
                                        </ButtonGroup>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        
                    </Col>
                
                </Row>
            </Container>        
        </div>
    )
}