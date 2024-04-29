import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import CustomNavbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';
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
                <RegisterForm />
        </Container>
    );
}

export default Home;