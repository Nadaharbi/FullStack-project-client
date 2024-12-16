import React, { useState, useEffect } from 'react';
import { Col, Container, FormGroup, Row, Label, Button } from 'reactstrap';
import 'animate.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../Features/UserSlice'; 
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaValidation } from "../Validations/UserValidation";
import axios from 'axios';

function Profile() {
  const user = useSelector((state) => state.counter.user); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const msg = useSelector((state) => state.counter.message); // Get the message from redux state

  const [name, setName] = useState(user.uname);
  const [password, setPassword] = useState("");
  const [currentpassword, setCurrentPassword] = useState("");

  const {
    register,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  // Handle form submission (Edit button clicked)
  const handleEdit = (data) => {
    console.log('Submitting Form:', data); // Add this line to see if the form is being submitted
    if (currentpassword === user.password) {
      const updatedUser = { uname: name, password: password };
      console.log('Dispatching updateUser action:', updatedUser); // Log the data you're dispatching
      dispatch(updateUser(updatedUser));
      navigate('/home'); 
    } else {
      alert("Current password is not matching.");
    }
  };
  

  return (
    <Container fluid className="profile">
      <Row className="div-row">
        <Col className="div-col" md="6">
          <form className="div-form">
            <h1 className="h1-login animate__animated animate__fadeIn animate__delay-1s">
              User Profile
            </h1>

            <FormGroup>
              <Label>Username</Label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field animate__animated animate__fadeIn animate__delay-2s"
              />
            </FormGroup>

            <FormGroup>
              <Label>Current Password</Label>
              <input
                type="password"
                id="currentPassword"
                placeholder="Enter your Current Password"
                value={currentpassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="input-field animate__animated animate__fadeIn animate__delay-4s"
              />
            </FormGroup>

            <FormGroup>
              <Label>New Password</Label>
              <input
                type="password"
                id="Password"
                placeholder="Enter your New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field animate__animated animate__fadeIn animate__delay-4s"
              />
            </FormGroup>

            <FormGroup>
              <Button
                type="submit"
                color="success"
                className="form-control animate__animated animate__zoomIn animate__delay-5s"
                onClick={submitForm(handleEdit)}
              >
                Edit
              </Button>
              <p className="error">{msg}</p>
            </FormGroup>
          </form>
        </Col>

        {/* Back to Home Button */}
        <Row>
          <Label style={{ display: 'flex', gap: '10px' }}>
            <Button
              href="/home"
              color="success"
              className="mr-2 animate__animated animate__fadeIn animate__delay-7s"
            >
              Back To Home Page
            </Button>
          </Label>
        </Row>
      </Row>
    </Container>
  );
}

export default Profile;
