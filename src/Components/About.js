import React from 'react';
import LOGO4 from '../Images/car.png';
import { Button, Container} from 'reactstrap';
import LOGO2 from '../Images/s3.png';
 
 
const About = () => {
  return (
<div className="ab text-white text-center">
<Container fluid="md" className='rounded'>
<div><img src={LOGO4} alt="AutoAid logo" width='95px' height='100px'/></div>
<div>
<h1 className="display-3">Welcome to AutoAid!</h1>
<p className="lead">Your one-stop solution for roadside assistance and vehicle services.</p>
</div>
 
                
<div className="pretty-div">
<h1 className="div-title">About AutoAid</h1>
<p className="div-content"> AutoAid is a web-based platform designed to streamline roadside assistance services for drivers. 
                  The system enables users to quickly find and connect with service providers in emergencies like vehicle breakdowns, flat tires, or accidents.
                   Through a user-friendly interface and location-based services, AutoAid reduces response times and improves the user experience in critical situations.
                   The AutoAid system aims to create a user-friendly platform that connects drivers in need of services with reliable service providers, 
                   enhancing the overall experience of roadside assistance.</p>
                   <Button href="/home" color="success" className='form-control'> Back To Home Page</Button>
</div>
<div className="pretty-div">
<div><img src={LOGO2} alt="AutoAid logo" width='95px' height='100px'/></div>
<p className="div-content">The platform helps diverse service requests, consisting of</p>
<div>
<p>Roadside Assistance</p>
<p>Towing Service</p>
<p>Vehicle Repair</p>
<p>Battery Jump-Start</p>
<p>Tire Change</p>
</div>
</div>
</Container>      
</div>

  );
};
 
export default About;


