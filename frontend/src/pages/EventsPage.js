import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import Calender from "../components/Calender";
import { Container, Row, Col } from 'reactstrap';


export default function EventsPage() {
    return (
        <div className="content">
            <Navbar/>

            <Container>
                <Row>
                    <Col>
                        <Calender/>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>

        </div>
    )
}