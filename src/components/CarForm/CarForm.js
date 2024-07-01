import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createCar } from '../../services/apiService';

function CarForm() {
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        color: '',
        year: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            createCar(formData);
            navigate('/cars');
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        }
    };

    return (
        <div style={{ margin: '40px', alignItems: 'center' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    id="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                />

                <Form.Control
                    type="text"
                    id="brand"
                    placeholder="Marca"
                    value={formData.brand}
                    onChange={handleChange}
                />

                <Form.Control
                    type="text"
                    id="color"
                    placeholder="Cor"
                    value={formData.color}
                    onChange={handleChange}
                />

                <Form.Control
                    type="number"
                    id="year"
                    placeholder="Ano"
                    value={formData.year}
                    onChange={handleChange}
                />

                <div style={{ margin: '40px', alignItems: 'center' }}>
                    <Button variant="primary" type="submit">Adicionar</Button>{' '}
                    <Button variant="secondary" type="button">Cancelar</Button>{' '}
                </div>
            </Form>
        </div>
    );
}

export default CarForm;