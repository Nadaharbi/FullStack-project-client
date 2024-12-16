// request from servies.js
import React, { useState } from 'react';
import { Container, Row, Col, Label, Button, Input, Form, FormGroup } from 'reactstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function ServiceDetails() {
    const { state } = useLocation(); // Retrieve state passed from Services component
    const { serviceName, mobileNumber, stationName, location } = state;
    const [username, setUsername] = useState('');
    const [userMobile, setUserMobile] = useState('');
    const [userLocation, setUserLocation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission (could be an API call or navigation)
        console.log('Request submitted', { username, userMobile, userLocation });
        // Redirect back to services or confirmation page
        navigate('/services');
    };

    return (
        <Container fluid className='forum-page'>
            <Row>
                <Col md="6" className="mx-auto">
                    <h2 className="text-center">{serviceName} Request</h2>
                    <p>Mobile Number: {mobileNumber}</p>
                    <p>Station Name: {stationName}</p>
                    <p>Location: {location}</p>

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userMobile">Mobile Number</Label>
                            <Input
                                type="text"
                                id="userMobile"
                                value={userMobile}
                                onChange={(e) => setUserMobile(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userLocation">Location</Label>
                            <Input
                                type="text"
                                id="userLocation"
                                value={userLocation}
                                onChange={(e) => setUserLocation(e.target.value)}
                                required
                            />
                            
                                <Button>Share Location</Button>
                            
                        </FormGroup>
                        <Button color="success" type="submit">Submit Request</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ServiceDetails;
