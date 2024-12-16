import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import {Container, Row, Col, Label, Button} from 'reactstrap';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Forum(){
    //  let email=useSelector((state)=>state.counter.user.email);
    //  const navigate = useNavigate();
    // useEffect(()=>{
    //     if(!email)
    //     {
    //         navigate('/');
    //     }
    // },[email]);

    return(
        <Container fluid className='forum-page'>
          <Row>
                    <Label  style={{ display: 'flex', gap: '10px' }}>
                        <Button href="/home" color="success" className="mr-2">Back To Home Page</Button>

                    </Label>
          </Row>
          
        </Container>
    );
}
export default Forum;