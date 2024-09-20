import React from 'react'
import '../../Styles/Procedure.css'

const MedicalProcedure = () => {

  const data = [
    { id: 1, name: 'Cardiac Surgery', description: 'Heart surgery to treat complications of heart diseases.', duration: '3-5 hours' },
    { id: 2, name: 'Knee Replacement', description: 'Surgical procedure to replace the weight-bearing surfaces of the knee joint.', duration: '2-3 hours' },
    { id: 3, name: 'Cataract Surgery', description: 'Procedure to treat clouding of the eye lens.', duration: '1-2 hours' },
    { id: 4, name: 'Liposuction', description: 'Cosmetic procedure to remove fat from specific areas of the body.', duration: '2-4 hours' },
    { id: 5, name: 'Kidney Transplant', description: 'Surgery to place a healthy kidney from a donor into a patient.', duration: '4-6 hours' },
    { id: 6, name: 'Kidney Transplant', description: 'Surgery to place a healthy kidney from a donor into a patient.', duration: '4-6 hours' },
    { id: 7, name: 'Kidney Transplant', description: 'Surgery to place a healthy kidney from a donor into a patient.', duration: '4-6 hours' },
    { id: 8, name: 'Kidney Transplant', description: 'Surgery to place a healthy kidney from a donor into a patient.', duration: '4-6 hours' },
    { id: 9, name: 'Kidney Transplant', description: 'Surgery to place a healthy kidney from a donor into a patient.', duration: '4-6 hours' },
    { id: 10, name: 'Kidney Transplant', description: 'Surgery to place a healthy kidney from a donor into a patient.', duration: '4-6 hours' },
  ];

  return (
    <div className="medical-procedures-container">
      <h2 className="page-title">Medical Procedures</h2>
      <div className="procedures-grid">
        {data.map((item) => (
          <div key={item.id} className="procedure-card">
            <div className="card-content">
              <h3 className="procedure-name">{item.name}</h3>
              <p className="procedure-description">{item.description}</p>
              <p className="procedure-duration"><strong>Duration:</strong> {item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicalProcedure