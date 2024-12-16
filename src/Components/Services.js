import React, { useEffect } from 'react';
import { Container, Row, Col, Label, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getService } from '../Features/ServiceSlice';

function Services() {
  const services = useSelector((state) => state.services.services); // Fetch services from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch services on component mount
  useEffect(() => {
    dispatch(getService());
  }, [dispatch]); // This ensures that services are fetched whenever the component is mounted

  return (
    <Container fluid className="p-container">
      <Row>
        {services && services.length > 0 ? (
          services.map((service) => (
            <Col md="4" key={service._id}>
              <Card className="card-body">
                <CardBody>
                  <CardTitle tag="h2" className="text-white">{service.stationName}</CardTitle>
                  <CardText>
                    <p className="text-black">Mobile Number: {service.mobileNumber}</p>
                    <p className="text-black">Station Name: {service.stationName}</p>
                    <p className="text-black">Location: {service.lat}, {service.lng}</p>
                  </CardText>
                  <Button
                    color="success"
                    href="service-details" >
                    Request
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <p>No services available at the moment.</p>
        )}
      </Row>

      <Row>
        <Label style={{ display: 'flex', gap: '10px' }}>
          <Button href="/home" color="success" className="mr-2">Back To Home Page</Button>
        </Label>
      </Row>
    </Container>
  );
}

export default Services;
