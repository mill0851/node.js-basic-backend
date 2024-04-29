import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import '../scss/RegisterForm.scss';
import register from '../services/registerService'

const RegisterForm = () => {

    // This State variable will store the form data
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleInputChange = (event) => {
        const newState = { ...formState }; // Copy the current state
        newState[event.target.id] = event.target.value; // Update the value
        setFormState(newState); // Update the state

        //TODO: Remove the console.log statement
        console.log(formState); // Check that the event handler is updating the state variable correctly  (delete later)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await register(formState);
        console.log(result)
    }

    return (
        <Row className="d-flex justify-content-center">
            <Col xs={12} sm={8} md={6} lg={4}>
                <Form>
                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        className="custom-form" 
                        onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="password" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        className="custom-form" 
                        onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="confirmPassword" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        className="custom-form" 
                        onChange={handleInputChange}/>
                    </Form.Group>

                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

export default RegisterForm;