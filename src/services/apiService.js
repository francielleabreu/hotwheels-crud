import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/cars';

export const getCars = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar carros", error);
        throw error;
    }
};

export const createCar = async (car) => {
    try {
        const response = await axios.post(API_BASE_URL, car);
        return response.data;
    } catch (error) {
        console.error("Erro ao cadastrar carro", error);
        throw error;
    }
};

export const updateCar = async (car) => {
    try {
        const response = await axios.put(API_BASE_URL, car);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar carro", error);
        throw error;
    }
};

export const deleteCar = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar carro", error);
        throw error;
    }
};