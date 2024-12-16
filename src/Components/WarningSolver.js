import React from 'react';
import { Container, Row, Col, Button, Input, Label, Form, FormGroup } from 'reactstrap';
import { FaUpload } from 'react-icons/fa'; // Icon for upload (you can install react-icons if needed)

const WarningSolver = () => {
  return (
    <Container className=" w-container text-center ">
      {/* Title Section */}
      <Row className="r1 ">
        <Col>
          <h1>Welcome to WarningSolver</h1>
        </Col>
      </Row>

      {/* Upload Section */}
      <Row className='r2'>
        <Col>
          <Form>
            <FormGroup>
              <Label for="fileUpload" className="d-block mb-2">
                <FaUpload size={30} /> {/* Upload Icon */}
                <span className="ml-2">Upload Image</span>
              </Label>
              <Input type="file" name="file" id="fileUpload" />
            </FormGroup>
          </Form>
          <p>Click the icon or select a file to upload an image and proceed.</p>
        </Col>
      </Row>
      <Label  style={{ display: 'flex', gap: '10px' }}>
      <Button href="/home" color="success" className="mr-2">Back To Home Page</Button>
      </Label>
    </Container>
  );
};

export default WarningSolver;
