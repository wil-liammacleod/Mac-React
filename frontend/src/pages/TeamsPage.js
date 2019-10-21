import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import LoLLogo from '../graphics/LoLL4eva.png';


export default function TeamsPage() {
    return (
        <div className="content">
            <Navbar/>

            <Container>
                <Row >
                    <Col xs="300">
                        <img src={LoLLogo} width='150px' />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            League of Legends 
                        </div>
                        <div>
                            Coordinator: Alex Kournya 
                        </div>
                        <div>
                            Discord: Fox#9667
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col xs="300">
                        <img src={LoLLogo} width='150px' />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            League of Legends 
                        </div>
                        <div>
                            Coordinator: Alex Kournya 
                        </div>
                        <div>
                            Discord: Fox#9667
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col xs="300">
                        <img src={LoLLogo} width='150px' />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            League of Legends 
                        </div>
                        <div>
                            Coordinator: Alex Kournya 
                        </div>
                        <div>
                            Discord: Fox#9667
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                Rocket Leauge
            </div>
            <div>
                CSGO
            </div>

        </div>
    )
}