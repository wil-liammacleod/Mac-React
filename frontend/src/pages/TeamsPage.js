import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import CSGOLogo from '../graphics/GameLogos/CSGOLogo.png';
import DotA2Logo from '../graphics/GameLogos/DotA2Logo.png';
import HSLogo from '../graphics/GameLogos/HSLogo.png';
import LoLLogo from '../graphics/GameLogos/LoLLogo.png';
import OWLogo from '../graphics/GameLogos/OWLogo.png';
import PUBGLogo from '../graphics/GameLogos/PUBGLogo.png';
import RLLogo from '../graphics/GameLogos/RLLogo.png';
import SC2Logo from '../graphics/GameLogos/SC2Logo.png';

var LogoWidth = '100px';

export default function TeamsPage() {
    return (
        <div className="content">
            <Navbar/>

            <Container>
                <Row>

                    <Col xs="300">
                        <img src={CSGOLogo} width={LogoWidth} />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            CSGO 
                        </div>
                        <div>
                            Coordinator: 
                        </div>
                        <div>
                            Discord: DatCrazyCracker#4548
                        </div>
                    </Col>
                
                    <Col xs="300">
                        <img src={DotA2Logo} width={LogoWidth} />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            DotA2 
                        </div>
                        <div>
                            Coordinator: Andrew 
                        </div>
                        <div>
                            Discord: pkandrewpk#5667
                        </div>
                    </Col>
                </Row>
                <Row>

                    <Col xs="300">
                        <img src={HSLogo} width={LogoWidth} />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            Hearthstone 
                        </div>
                        <div>
                            Coordinator:  
                        </div>
                        <div>
                            Discord: 
                        </div>
                    </Col>
                
                    <Col xs="300">
                        <img src={LoLLogo} width={LogoWidth} />
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
                <Row>

                    <Col xs="300">
                        <img src={OWLogo} width={LogoWidth} />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            Overwatch 
                        </div>
                        <div>
                            Coordinator: Ahmed 
                        </div>
                        <div>
                            Discord: ahmediy#7633
                        </div>
                    </Col>
                
                    <Col xs="300">
                        <img src={PUBGLogo} width={LogoWidth} />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            PUBG 
                        </div>
                        <div>
                            Coordinator: Paul
                        </div>
                        <div>
                            Discord: Oblivion (Paul)#7572
                        </div>
                    </Col>
                </Row>
                <Row>

                    <Col xs="300">
                        <img src={RLLogo} width={LogoWidth} />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            Rocket League
                        </div>
                        <div>
                            Coordinator: Zach 
                        </div>
                        <div>
                            Discord: HeavyUmlaut#8948
                        </div>
                    </Col>
                
                    <Col xs="300">
                        <img src={SC2Logo} width={LogoWidth} />
                    </Col>
                    <Col>
                        <div className='padded' className='black-title-text'>
                            Star Craft 2 
                        </div>
                        <div>
                            Coordinator:  
                        </div>
                        <div>
                            Discord: 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}