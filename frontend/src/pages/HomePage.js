import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import ReactPlayer from 'react-player'
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function HomePage() {
    return (

        <main className="content">
            <Navbar />
            <div style={{width: '100%', margin: 'auto'}} className='player-wrapper'>

                <ReactPlayer
                    url='https://www.youtube.com/watch?v=Vm-dIElJrdY'
                    playing
                    volume='0'
                    width='100%'
                    height='800px'
                />
                
            </div>

            <div>

                <h1 className='header'>What we do</h1>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardImg/>
                                <CardBody>
                                    <CardTitle> </CardTitle>
                                    <CardText> Community  </CardText>
                                    <Button></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg/>
                                <CardBody>
                                    <CardTitle> </CardTitle>
                                    <CardText> Competitive  </CardText>
                                    <Button></Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>


            </div>



        </main>


    )
}