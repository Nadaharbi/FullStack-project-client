import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { addService, getService } from "../Features/ServiceSlice"; 

const AddSers = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [stationName, setStationName] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [responseMsg, setResponseMsg] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      const geoSuccess = (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      };

      const geoError = (error) => {
        setResponseMsg("Failed to get location.");
        console.error("Geolocation error: ", error);
      };

      navigator.geolocation.watchPosition(geoSuccess, geoError);
    } else {
      setResponseMsg("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleAddService = () => {
    if (!mobileNumber || !stationName || !lat || !lng) {
      setResponseMsg("All fields are required.");
      return;
    }

    const serviceData = { mobileNumber, stationName, lat, lng };

    dispatch(addService(serviceData))
      .then(() => {
        setResponseMsg("Service added successfully!");
        setMobileNumber("");
        setStationName("");
        dispatch(getService()); // Re-fetch the services after adding a new one
      })
      .catch(() => setResponseMsg("Failed to add service."));
};


  return (
    <Container fluid className="forum-page">
      <h2 className="text-center mt-4">Add Service</h2>
      <Form>
        <FormGroup>
          <Label for="mobileNumber">Mobile Number</Label>
          <Input id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="stationName">Station Name</Label>
          <Input id="stationName" value={stationName} onChange={(e) => setStationName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Button color="danger" onClick={() => {}}>
            Location: {lat}, {lng}
          </Button>
        </FormGroup>
        <FormGroup>
          <Button color="success" onClick={handleAddService}>
            Add Service
          </Button>
        </FormGroup>
        <FormGroup>
          <Label>
            <Button color="success" href="/AdminDashboard">
              Back to Admin Dashboard
            </Button>
          </Label>
        </FormGroup>
      </Form>
      {responseMsg && <p className="mt-3">{responseMsg}</p>}
    </Container>
  );
};

export default AddSers;
