import React, { useEffect } from 'react';
import { Container, Button, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LOGO3 from '../Images/s1.jpeg';
import LOGO1 from '../Images/s2.jpeg';
import LOGO4 from '../Images/car.png';
import backgroundImage from '../Images/bg1.jpg'; 
import backgroundImage1 from '../Images/bk.jpg'; 


function Home() {
  let email = useSelector((state) => state.counter.user.email);
  const navigate = useNavigate();
  
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="home" >
      {/* Hero Section */}
      <div className="hero-section text-white text-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '40vh' }}>
        <Container fluid="md" className="rounded">
          {/* <div className="hero-logo">
            <img src={LOGO4} alt="AutoAid logo" width="95px" height="100px" />
          </div> */}
          <h1 className="display-3 animate__animated animate__fadeIn">Welcome to AutoAid!</h1>
          <p className="lead text-black animate__animated animate__fadeIn animate__delay-1s">Your one-stop solution for roadside assistance and vehicle services.</p>
          <Button color="success" size="lg" href="/about" className="animate__animated animate__fadeIn animate__delay-2s">Learn More</Button>
        </Container>
      </div>

      {/* Dropdown Menu */}
      <Container className="dropdown-section">
        <Row className="text-center mb-3">
          <Col md="3" className="Dropdown-Col" >
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="animate__animated animate__fadeIn">
              <DropdownToggle caret color="success">
                Check Out
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => navigate('/warningSolver')}>Warning Solver</DropdownItem>
                <DropdownItem onClick={() => navigate('/forum')}>Forum</DropdownItem>
                <DropdownItem onClick={() => navigate('/profile')}>Profile</DropdownItem>
                <DropdownItem onClick={() => navigate('/about')}>About US</DropdownItem>
                <DropdownItem onClick={() => navigate('/services')}>Services</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="features-section" >
        <h2 className="text-center mb-4 text-white animate__animated animate__fadeIn">Get To Know Our Services</h2>
        <Row className="row d-flex justify-content-center" style={{ backgroundImage: `url(${backgroundImage1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '40vh' }}>
          <Col md="4" className="mb-4">
            <Card className="service-card animate__animated animate__zoomIn">
              <CardImg top width="100%" height="100px" src={LOGO3} alt="Roadside Assistance" />
              <CardBody>
                <CardTitle tag="h5">Roadside Assistance</CardTitle>
                <CardText className="text-white">Get help on the road anytime, anywhere with our 24/7 roadside assistance service.</CardText>
                <Button color="success">
                  <Link to="/services" className="link-home text-white">Learn More</Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="service-card animate__animated animate__zoomIn animate__delay-1s">
              <CardImg top width="100%" height="100px" src={LOGO1} alt="Towing Service" />
              <CardBody>
                <CardTitle tag="h5">Towing Service</CardTitle>
                <CardText className="text-white">Need a tow? Our reliable towing service will get you and your vehicle where you need to go.</CardText>
                <Button color="success">
                  <Link to="/services" className="text-white">Learn More</Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
