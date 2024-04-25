import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import CustomNavbar from '../components/Navbar';
import '../scss/Home.scss';

const Home = () => {
    return (
        <Container fluid className="dark-mode">
            <CustomNavbar />
                <Row className="d-flex justify-content-center">
                    <Col sm={12} md={6} className="d-flex justify-content-center">
                        <h1>Register</h1>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="custom-form"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" className="custom-form"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" className="custom-form"/>
                            </Form.Group>

                            <Button variant="primary">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
        </Container>
    );
}

export default Home;