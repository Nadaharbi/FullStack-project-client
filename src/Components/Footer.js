import React from 'react';
import { Container, Row, Col } from 'reactstrap';
 
const Footer = () => {
  return (
<footer className="footer bg-dark text-white mt-5 p-3">
<Container>
<Row>
<Col md="4">
<h5>AutoAid</h5>
<p>&copy; {new Date().getFullYear()} AutoAid. All rights reserved.</p>
</Col>
<Col md="7">
<h5>Quick Links</h5>
<ul className="list-unstyled">
<li><a href="/about" className="text-white">About Us</a></li>
<li><a href="/login" className="text-white">Login</a></li>
</ul>
</Col>
</Row>
</Container>
</footer>
  );
};
 
export default Footer;