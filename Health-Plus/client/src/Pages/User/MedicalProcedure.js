import React, { useState } from "react";
import "../../Styles/Procedure.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MedicalProcedureModal from "./MedicalProcedureModal";

const MedicalProcedure = () => {
  const [medicalModal ,setmedicalModal] = useState(false) 
  const [proceduredata,setproceduredata] = useState({})
  const data = [
    {
      id: 1,
      name: "Cardiac Surgery",
      img: require("../../Assets/microsurgery.png"),
      description: "Heart surgery to treat complications of heart diseases.",
      duration: "3-5 hours",
    },
    {
      id: 2,
      name: "Knee Replacement",
      img: require("../../Assets/human.png"),
      description:
        "Surgical procedure to replace the weight-bearing surfaces of the knee joint.",
      duration: "2-3 hours",
    },
    {
      id: 3,
      name: "Cataract Surgery",
      img: require("../../Assets/reduce-freckles.png"),
      description: "Procedure to treat clouding of the eye lens.",
      duration: "1-2 hours",
    },
    {
      id: 4,
      name: "Hip Replacement",
      img: require("../../Assets/skeleton.png"),
      description:
        "Cosmetic procedure to remove fat from specific areas of the body.",
      duration: "2-4 hours",
    },
    {
      id: 5,
      name: "Brain Cancer",
      img: require("../../Assets/brain.png"),
      description:
        "Surgery to place a healthy kidney from a donor into a patient.",
      duration: "4-6 hours",
    },
    {
      id: 6,
      name: "Breast Cancer",
      img: require("../../Assets/breast.png"),
      description:
        "Surgery to place a healthy kidney from a donor into a patient.",
      duration: "4-6 hours",
    },
    {
      id: 7,
      name: "Hair Transplant",
      img: require("../../Assets/hair-transplant.png"),
      description:
        "Surgery to place a healthy kidney from a donor into a patient.",
      duration: "4-6 hours",
    },
    {
      id: 8,
      name: "Hysterectomy",
      img: require("../../Assets/hysterectomy.png"),
      description:
        "Surgery to place a healthy kidney from a donor into a patient.",
      duration: "4-6 hours",
    },
    {
      id: 9,
      name: "Kidney Transplant",
      img: require("../../Assets/kidney.png"),
      description:
        "Surgery to place a healthy kidney from a donor into a patient.",
      duration: "4-6 hours",
    },

  ];

  const handelProcedureModal =(item) =>{
    setmedicalModal(true)
    setproceduredata(item)
  }
  const closeProcedureModal =() =>{
    setmedicalModal(false)
  }

  return (
    <>
      <Navbar/>
      <div className="medical-procedures-container">
        <h2 className="page-title">Medical Procedures</h2>
        <div className="procedures-grid">
          {data.map((item) => (
            <div key={item.id} className="procedure-card" onClick={()=>handelProcedureModal(item)}>
              <div className="card-content">
                <div className="ProcedureImg">
                  <img src={item.img} />
                </div>
                <div className="ProcedureInfo">
                  <h3 className="procedure-name page-title">{item.name}</h3>
                  <p className="procedure-description">{item.description}</p>
                  <p className="procedure-duration">
                    <strong>Duration:</strong> {item.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {medicalModal && (<MedicalProcedureModal
        proceduredata={proceduredata}
        closeProcedureModal={closeProcedureModal}
        />)}
      </div>
      <Footer/>
    </>
  );
};

export default MedicalProcedure;
