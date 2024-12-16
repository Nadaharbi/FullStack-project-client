import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Footer from './Components/Footer';
import {Container, Row} from 'reactstrap';
import Register from './Components/Register';
import Services from './Components/Services';
import About from './Components/About';
import Forum from './Components/Forum';
import AdminDashboard from './Components/AdminDashboard';
import AddSers from './Components/AddSers';
import WarningSolver from './Components/WarningSolver';
import { useSelector } from 'react-redux';
 import Profile from './Components/Profile';
 import ServiceDetails from './Components/ServiceDetails';
 import 'leaflet/dist/leaflet.css';
 import 'animate.css';


 
function App() {
  let email=useSelector((state)=>state.counter.user.email);
  return (
      <div>
        <Container fluid>
          <BrowserRouter>
          {/* <Row>
            {email?(<Header/>):null}
          </Row> */}
           <Row>
            <Header/>
          </Row>
            <Row>
                <Routes>
                  <Route path="/home" element={<Home/>}></Route>
                  <Route path="/" element={<Login/>}></Route>
                  <Route path="/register" element={<Register/>}></Route>
                  <Route path="/about" element={<About/>}></Route>
                  <Route path="/forum" element={<Forum/>}></Route>
                  <Route path="/adminDashboard" element={<AdminDashboard/>}></Route>
                  <Route path="/addSers" element={<AddSers/>}></Route>
                  <Route path="/warningSolver" element={<WarningSolver/>}></Route>
                  <Route path="services" element={<Services/>}></Route>
                  <Route path="profile" element={<Profile/>}></Route>
                  <Route path="/service-details" element={<ServiceDetails/>}></Route>
 
 
 
                 
                </Routes>
            </Row>
            <Row>
                <Footer/>
            </Row>
          </BrowserRouter>
        </Container>
      </div>
 
  );
}
 
export default App;