import React, { useEffect, useState } from "react";
import { Col, Container, FormGroup, Row, Label, Button } from "reactstrap";
import LOGO from "../Images/car.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../Features/UserSlice";
import { LoginValidation } from "../Validations/LoginValidation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const isSuccess = useSelector((state) => state.counter.isSuccess);
  const isError = useSelector((state) => state.counter.isError);
  const user = useSelector((state) => state.counter.user);

  const {
    register,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginValidation) });

  const handleLogin = () => {
    const user = { email, password };
    dispatch(getUser(user));
  };

  useEffect(() => {
    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/AdminDashboard");
    } else if (user && isSuccess) {
      navigate("/home");
    } else if (isError) {
      navigate("/");
    }
  }, [isSuccess, isError, user]);

  return (
    <Container fluid className='forum-page'>
      <Row className="div-row">
        <Col className="div-col" md="6">
          <form className="div-form">
            <div className="div-logo">
              <img src={LOGO} width="200px" height="100px" alt="logo" className="animate__animated animate__fadeInLeft"/>
            </div>
            <h1 className="h1-login animate__animated animate__fadeIn animate__delay-1s">Login</h1>

            <FormGroup>
              <Label>Email</Label>
              <input
                type="email"
                className="form-control animate__animated animate__fadeIn animate__delay-1s"
                {...register("email", {
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                })}
              />
              <p className="error">{errors.email?.message}</p>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <input
                type="password"
                className="form-control animate__animated animate__fadeIn animate__delay-2s"
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
                className="form-control animate__animated animate__zoomIn animate__delay-3s"
                onClick={submitForm(handleLogin)}
              >
                SIGN IN
              </Button>
            </FormGroup>
            <FormGroup>
              <Label>
                No Account? <Link to="/register">Sign Up Now</Link>
              </Label>
            </FormGroup>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
