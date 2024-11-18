import axios from 'axios';

const API_URL = `http://localhost:8080/api/offers`;

export const getOffers = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching offers', error);
        throw error;
    }
};