import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, Label, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";
import { getService, updateService, deleteService } from "../Features/ServiceSlice";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { services = [], isLoading, isError, errorMessage } = useSelector((state) => state.services || {});

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({
    mobileNumber: "",
    stationName: "",
    location: "",
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleUpdateClick = (service) => {
    setSelectedService(service);
    setUpdatedDetails({
      mobileNumber: service.mobileNumber,
      stationName: service.stationName,
      location: `${service.lat}, ${service.lng}`, // Combine lat and lng as a string
    });
    toggleModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateService = () => {
    if (selectedService) {
      const [lat, lng] = updatedDetails.location.split(",").map((val) => parseFloat(val.trim()));
      const updatedData = {
        mobileNumber: updatedDetails.mobileNumber,
        stationName: updatedDetails.stationName,
        lat,
        lng,
      };
      dispatch(updateService({ id: selectedService._id, updatedData }));
    }
    toggleModal();
  };

  const handleDeleteService = (id) => {
    dispatch(deleteService(id));
  };

  return (
    <Container fluid className="forum-page">
      <h2 className="text-center mt-4">Admin Dashboard</h2>
      {isLoading && <p>Loading services...</p>}
      {isError && <p>Error: {errorMessage}</p>}
      <Row>
        {services.map((service) => {
          if (service.lat && service.lng) {
            return (
              <Col md="4" className="mb-3" key={service._id}>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{service.stationName}</CardTitle>
                    <CardText>
                      <strong>Mobile:</strong> {service.mobileNumber}
                      <br />
                      <strong>Location:</strong> {service.lat}, {service.lng}
                    </CardText>

                    <MapContainer
                      center={[service.lat, service.lng]} // Use lat/lng for map center
                      zoom={13} // Zoom level
                      style={{ height: "200px", width: "100%" }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap TileLayer
                      />
                      <Marker position={[service.lat, service.lng]}>
                        <Popup>{service.stationName}</Popup>
                      </Marker>
                    </MapContainer>

                    <Label style={{ display: "flex", gap: "10px" }}>
                      <Button color="success" onClick={() => handleUpdateClick(service)}>
                        Update
                      </Button>
                      <Button color="danger" onClick={() => handleDeleteService(service._id)}>
                        Delete
                      </Button>
                    </Label>
                  </CardBody>
                </Card>
              </Col>
            );
          } else {
            return (
              <Col md="4" className="mb-3" key={service._id}>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{service.stationName}</CardTitle>
                    <CardText>
                      <strong>Mobile:</strong> {service.mobileNumber}
                      <br />
                      <strong>Location:</strong> Location data unavailable.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          }
        })}
      </Row>

      <Row>
        <Button
          color="success"
          size="sm"
          href="/addSers"
          className="small-button"
          style={{ width: "auto", padding: "5px 10px" }}
        >
          Add Service
        </Button>
      </Row>

      {/* Modal for updating service */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Update Service</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="stationName">Station Name</label>
              <Input
                type="text"
                id="stationName"
                name="stationName"
                value={updatedDetails.stationName}
                onChange={handleInputChange}
                placeholder="Station Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <Input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={updatedDetails.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location (Lat, Lng)</label>
              <Input
                type="text"
                id="location"
                name="location"
                value={updatedDetails.location}
                onChange={handleInputChange}
                placeholder="Location (Lat, Lng)"
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdateService}>
            Update Service
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
