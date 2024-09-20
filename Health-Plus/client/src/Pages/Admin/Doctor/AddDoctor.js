import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { upsertDoctor } from '../../../Services/apiService'; // Import upsertDoctor from apiService
import doctorImage from '../../../Assets/doctor.png'; // Import default doctor image
import { useAuth } from '../../../contexts/AuthContext'; // Import useAuth from AuthContext
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

function AddDoctor() {
    const [name, setName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(doctorImage); // Default preview image
    const navigate = useNavigate();
    const { user } = useAuth(); // Get current user's information

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !specialization) {
            toast.error('Please fill in all mandatory fields.');
            return;
        }

        const formData = new FormData();
        formData.append('id', '0'); // Append id with value 0
        formData.append('name', name);
        formData.append('specialization', specialization);
        formData.append('createdBy', user?.email || 'default@example.com'); // Use the current user's email
        formData.append('modifiedBy', user?.email || 'default@example.com'); // Use the current user's email
        formData.append('createdOn', new Date().toISOString()); // Current date and time
        formData.append('modifiedOn', new Date().toISOString()); // Current date and time
        if (image) formData.append('image', image); // Append image file

        try {
            // Send request to add doctor
            await upsertDoctor(formData);
            // Display success message
            toast.success('Doctor added successfully!');
            // Clear form data
            setName('');
            setSpecialization('');
            setImage(null);
            setPreview(doctorImage); // Reset to default image
            navigate('/admin/doctors'); // Navigate after adding
        } catch (error) {
            // Display error message
            toast.error('Failed to add doctor.');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Update preview
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-4">Add Doctor</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label>Name <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Specialization <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={specialization}
                                    onChange={(e) => setSpecialization(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Upload Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div className="form-group mb-3 d-flex">
                                <button type="submit" className="btn btn-primary btn-sm me-2">
                                    <FontAwesomeIcon icon={faSave} className="me-2" /> Add Doctor
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => navigate('/admin/doctors')}
                                >
                                    <FontAwesomeIcon icon={faTimes} className="me-2" /> Close
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="image-preview-frame">
                            <img
                                src={preview}
                                alt="Doctor Preview"
                                className="img-fluid shadow"
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    objectFit: 'cover',
                                    borderRadius: '10px',
                                    border: '2px solid #ddd'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddDoctor;
