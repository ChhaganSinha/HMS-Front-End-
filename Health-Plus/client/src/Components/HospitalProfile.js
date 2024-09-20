import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../Styles/HospitalProfile.css"; // Ensure to create and link your CSS file



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


const HospitalProfileModal = ({ HospitalInfo, CloseHospitalProfile }) => {
  const points = [
    {
      lat: 51.505,
      lng: -0.09,
      name: "London Hospital",
      address: "123 Health St, London, UK",
    },
    // {
    //   lat: 48.8566,
    //   lng: 2.3522,
    //   name: "Paris Medical Center",
    //   address: "456 Wellness Ave, Paris, FR",
    // },
    // {
    //   lat: 40.7128,
    //   lng: -74.006,
    //   name: "New York Clinic",
    //   address: "789 Care Rd, New York, USA",
    // },
  ];

  return (
    <div className="modal-background">
      <div className="modal-container">
        {/* Hospital Image */}
        <div className="hospital-img-container">
          <img
            src={HospitalInfo.img}
            alt={`${HospitalInfo.name}`}
            className="hospital-img"
          />
          <img
            src={require("../Assets/icons8-close-window.gif")}
            alt="closemodalIcon"
            className="btn-close"
            style={{position:"absolute",top:"2%",right:"1%",width:"3%",height:"5%"}}
            onClick={CloseHospitalProfile}
          />
          {/* <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ outline: "none", border: "none",,color:"#9D2553" }}
              
            ></button> */}
        </div>

        {/* Hospital Info */}
        <div className="hospital-info">
          <div className="info-header">
            <div className="ht-NameSection">
              <h2 className="hospital-name">{HospitalInfo.name}</h2>
              <p className="hospital-location">{HospitalInfo.location}</p>
            </div>
            <div className="ht-ContactbtnSection">
              <button className="contact-btn">CONTACT HOSPITAL</button>
            </div>
          </div>
          <hr className="separator" />

          {/* About Section */}
          <div className="hospital-card">
            <h3 className="section-title">About the Hospital</h3>
            <p className="about-hospital">
              {HospitalInfo.name} is one of the leading healthcare facilities in{" "}
              {HospitalInfo.location}. Offering specialized services such as{" "}
              {HospitalInfo.services}. Our state-of-the-art infrastructure
              supports a patient-centric approach, ensuring excellent medical
              care.
            </p>
          </div>

          {/* Infrastructure Section */}
          <div className="hospital-card">
            <h3 className="section-title">Infrastructure</h3>
            <p>
              The hospital is equipped with modern medical technology, spacious
              rooms, and cutting-edge diagnostic tools. The infrastructure
              includes advanced surgery centers and specialized units for
              patient care.
            </p>
          </div>

          {/* Team and Specialities Section */}
          <div className="hospital-card">
            <h3 className="section-title">Team and Specialities</h3>
            <p>
              Our team comprises highly experienced doctors, specializing in
              fields like {HospitalInfo.services}. Each specialist is dedicated
              to providing the best care and ensuring patient satisfaction.
            </p>
          </div>

          {/* Accreditations and Awards Section */}
          <div className="hospital-card">
            <h3 className="section-title">Accreditations & Awards</h3>
            <ul>
              <li>
                Accredited by leading international healthcare organizations
              </li>
              <li>Awarded 'Best Healthcare Facility' multiple times</li>
              <li>
                Recognized for excellence in patient care and advanced medical
                treatments
              </li>
            </ul>
          </div>

          {/* location and Map Section */}
          <div
            className="col-12 row"
            style={{ display: "flex", justifyContent: "space-between",margin:"auto",backgroundColor:"#8da9ed",borderRadius:"10px",padding:"20px",boxShadow:"0,4px 10px rgba(0,0,0,0.1" }}
          >
            <div className="hospital-card col-6" style={{ width: "48%" }}>
              <h3
                className="section-title"
                style={{
                  fontSize: "24px",
                  // color: "#9D2553",
                  textAlign: "center",
                  // borderBottom: "2px solid #9D2553",
                  paddingBottom: "10px",
                }}
              >
                Location
              </h3>
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {points.map((point, index) => (
                  <li key={index} style={{ marginBottom: "15px" }}>
                    <strong>{point.name}:</strong> {point.address}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hospital-card col-6" style={{ width: "48%" }}>
              <MapContainer
                center={[51.505, -0.09]}
                zoom={7}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {points.map((point, index) => (
                  <Marker key={index} position={[point.lat, point.lng]}>
                    <Popup>{point.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
        <hr />
        <div
          className="modal-footer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
            style={{ marginBottom: "2%" }}
            onClick={CloseHospitalProfile}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalProfileModal;
