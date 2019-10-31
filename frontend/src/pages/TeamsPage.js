import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import CSGOLogo from '../graphics/GameLogos/CSGOLogo.png';
import DotA2Logo from '../graphics/GameLogos/DotA2Logo.png';
import HSLogo from '../graphics/GameLogos/HSLogo.png';
import LoLLogo from '../graphics/GameLogos/LoLLogo.png';
import OWLogo from '../graphics/GameLogos/OWLogo.png';
import RLLogo from '../graphics/GameLogos/RLLogo.png';
import SC2Logo from '../graphics/GameLogos/SC2Logo.png';



export default function TeamsPage() {
    return (
        <div className="content">
            <Navbar/>

            <Container>
                <Row >
                    <Col xs="300">
                        <img src={CSGOLogo} width='150px' />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            CSGO 
                        </div>
                        <div>
                            Coordinator: 
                        </div>
                        <div>
                            Discord: 
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
                <Row >
                    <Col xs="300">
                        <img src={RLLogo} width='150px' />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            Rocket League
                        </div>
                        <div>
                            Coordinator: Zach 
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