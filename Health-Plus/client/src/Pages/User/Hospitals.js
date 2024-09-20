import React, { useState } from "react";
import DoctorCard from "../../Components/DoctorCard";
import profile1 from "../../Assets/hospital-sign.webp";
import profile2 from "../../Assets/modern-hospital-building (1).webp";
import profile3 from "../../Assets/modern-hospital-building.webp";
import profile4 from "../../Assets/profile-4.png";
import "../../Styles/Doctors.css";
import Navbar from "../../Components/Navbar"; // Import Navbar
import Footer from "../../Components/Footer"; // Import Footer
import HospitalProfile from "../../Components/HospitalProfile";

function Hospitals() {
  const [HospitalprofileModal,setHospitalprofileModal] = useState(false)
const [HospitalInfo, setHospitalInfo] = useState()

const [data, setdata] = useState([
  {
    img: profile1,
    name: "City General Hospital",
    location: "New York, NY",
    services: "Cardiology, Neurology, Pediatrics",
  },
  {
    img: profile2,
    name: "Green Valley Medical Center",
    location: "Los Angeles, CA",
    services: "Orthopedics, Emergency, Gynecology",
  },
  {
    img: profile3,
    name: "Sunrise Health Clinic",
    location: "Chicago, IL",
    services: "Dermatology, ENT, Radiology",
  },
  {
    img: profile3,
    name: "Sunrise Health Clinic",
    location: "Chicago, IL",
    services: "Dermatology, ENT, Radiology",
  },
]);
  const openHospitalProfile = (item) =>{
    // console.log("open doc profile modal")
    setHospitalprofileModal(true)
    setHospitalInfo(item)
  }
  const CloseHospitalProfile = () =>{
    
    setHospitalprofileModal(false)
    // setdocInfo(profile1)
  }


  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* <div className="doctor-section" id="doctors">
        <div className="dt-title-content">
          <h3 className="dt-title">
            <span>Meet Our Hospitals</span>
          </h3>

          <p className="dt-description">
            Meet our exceptional team of specialist doctors, dedicated to
            providing top-notch healthcare services at Health Plus. Trust in their
            knowledge and experience to lead you towards a healthier and happier
            life.
          </p>
        </div>

        <div className="dt-cards-content">
          <DoctorCard
            img={profile1}
            name="Dr. Kathryn Murphy"
            title="General Surgeons"
            stars="4.9"
            reviews="1800"
          />
          <DoctorCard
            img={profile2}
            name="Dr. Jacob Jones"
            title="Hematologists"
            stars="4.8"
            reviews="700"
          />
          <DoctorCard
            img={profile3}
            name="Dr. Jenny Wilson"
            title="Endocrinologists"
            stars="4.7"
            reviews="450"
          />
          <DoctorCard
            img={profile4}
            name="Dr. Albert Flores"
            title="Hematologists"
            stars="4.8"
            reviews="500"
          />
        </div>
      </div> */}
      <div
        className="doctor-section"
        id="hospitals"
        style={{ padding: "50px", backgroundColor: "#f8f9fa" }}
      >
        <div
          className="dt-title-content"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h3
            className="dt-title"
            style={{ fontSize: "32px", fontWeight: "bold" }}
          >
            <span>Meet Our Hospitals</span>
          </h3>
          <p
            className="dt-description"
            style={{ fontSize: "18px", color: "#777" }}
          >
            Discover our network of highly rated hospitals, committed to
            offering world-class healthcare services. With state-of-the-art
            facilities and expert healthcare professionals, your health is in
            good hands.
          </p>
        </div>

        <div
          className="dt-cards-content"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {data &&
            data.map((item) => {
              return (
                <div className="dt-card" style={{ cursor: "pointer" }} onClick={()=>openHospitalProfile(item)}>
                  <img src={item.img} alt={item.name} className="dt-card-img" />
                  <p className="dt-card-name">{item.name}</p>
                  <p className="dt-card-title">{item.location}</p>
                  <p className="dt-card-stars">
                    {/* <FontAwesomeIcon
                // icon={faStar}
                style={{ color: "#F7BB50", paddingRight: "6px" }}
              /> */}
                    {/* {item.stars} */}
                    <span className="dt-card-reviews"> ({item.services})</span>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      {/* Footer at the bottom */}
      <Footer />
      {HospitalprofileModal ? (
      <HospitalProfile
      HospitalInfo={HospitalInfo}
      CloseHospitalProfile={CloseHospitalProfile}/>
    ):null}
    </>
  );
}

export default Hospitals;
