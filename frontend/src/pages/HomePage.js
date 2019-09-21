import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import ReactPlayer from 'react-player'
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import CommunityIcon from "../graphics/Community.png";
import CompetitiveIcon from "../graphics/Competitive.png";
import { Link } from 'react-router-dom'


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
                                <CardImg top width="20%" src={CommunityIcon} alt="Card image cap" />
                                <CardBody>
                                    <Button tag={Link} to="/Community" >Community</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="20%" src={CompetitiveIcon} alt="Card image cap"/>
                                <CardBody>
                                    <CardTitle>Competitive</CardTitle>
                                    <Button></Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>


            </div>

            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

        </main>


    )
}