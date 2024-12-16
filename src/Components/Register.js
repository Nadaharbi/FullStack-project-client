import React, { useState } from "react";
import { FormGroup, Button, Container, Row, Col, Label } from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Features/UserSlice";
import { userSchemaValidation } from "../Validations/UserValidation";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  const handleRegister = (data) => {
    const user = { uname: name, email, password };
    dispatch(addUser(user));
    alert("User registered successfully");
    navigate("/");
  };

  return (
    <Container fluid>
      <Row className="div-row">
        <Col className="div-col" lg="6">
          <form className="div-form">
            <FormGroup>
              
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name..."
                {...register("name", {
                  value: name,
                  onChange: (e) => setName(e.target.value),
                })}
              />
              <p className="error">{errors.name?.message}</p>
            </FormGroup>
            <FormGroup>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email..."
                {...register("email", {
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                })}
              />
              <p className="error">{errors.email?.message}</p>
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password..."
                {...register("password", {
                  value: password,
                  onChange: (e) => setPassword(e.target.value),
                })}
              />
              <p className="error">{errors.password?.message}</p>
            </FormGroup>
            <FormGroup>
              <Button
              color="success"
              className="form-control"
              onClick={submitForm(handleRegister)}
            >
              REGISTER
              </Button>
            </FormGroup>

          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
