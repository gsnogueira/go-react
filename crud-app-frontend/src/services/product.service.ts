import axios from 'axios';

const API_URL = `http://localhost:8080/api/products`;


export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching products', error);
        throw error;
    }
};

export const getProductById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with id ${id}`, error);
        throw error;
    }
};

export const createProduct = async (product: any) => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data;
    } catch (error) {
        console.error('Error creating product', error);
        throw error;
    }
};

export const updateProduct = async (id: string, product: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data;
    } catch (error) {
        console.error(`Error updating product with id ${id}`, error);
        throw error;
    }
};

export const deleteProduct = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting product with id ${id}`, error);
        throw error;
    }
};