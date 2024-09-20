import axios from 'axios';

const API_BASE_URL = "https://localhost:7231/api/";

// Authentication endpoints (AccountController)
const AUTH_API_URL = `${API_BASE_URL}account/`;

export const register = async (email, password) => {
    try {
        const response = await axios.post(`${AUTH_API_URL}register`, { email, password });
        return response.data;
    } catch (error) {
        console.error("Registration error", error);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${AUTH_API_URL}login`, { email, password });
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        console.error("Login error", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await axios.post(`${AUTH_API_URL}logout`);
        localStorage.removeItem('token');
    } catch (error) {
        console.error("Logout error", error);
        throw error;
    }
};

// Application Data endpoints (AppController)
const APP_API_URL = `${API_BASE_URL}app/`;

// Utility function to get the token from localStorage
const getAuthToken = () => {
    return localStorage.getItem('token');
};

const getAuthHeaders = () => {
    const token = getAuthToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getDoctorById = async (id) => {
    try {
        const response = await axios.get(`${APP_API_URL}doctor/${id}`, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching doctor", error);
        throw error;
    }
};

export const getAllDoctors = async () => {
    try {
        const response = await axios.get(`${APP_API_URL}all-doctors`, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching all doctors", error);
        throw error;
    }
};

export const upsertDoctor = async (doctorData) => {
    try {
         // Log FormData entries
         for (let [key, value] of doctorData.entries()) {
            console.log(key, value);
        }

        const response = await axios.post(`${APP_API_URL}UpsertDoctorsDetails`, doctorData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                ...getAuthHeaders(), // Include the token in the headers
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error upserting doctor", error);
        throw error;
    }
};

export const deleteDoctor = async (id) => {
    try {
        const response = await axios.post(`${APP_API_URL}DeleteDoctor/${id}`, null, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting doctor", error);
        throw error;
    }
};


