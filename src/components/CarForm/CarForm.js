import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CarForm() {
    const [formData, setFormData] = useState({
        nome: '',
        marca: '',
        cor: '',
        ano: ''
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
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.push(formData);
        localStorage.setItem('cars', JSON.stringify(cars));
        navigate('/carsList');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label htmlFor="nome">Nome:</Form.Label>
            <Form.Control
                type="text"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
            />

            <Form.Label htmlFor="marca">Marca:</Form.Label>
            <Form.Control
                type="text"
                id="marca"
                value={formData.marca}
                onChange={handleChange}
            />

            <Form.Label htmlFor="cor">Cor:</Form.Label>
            <Form.Control
                type="text"
                id="cor"
                value={formData.cor}
                onChange={handleChange}
            />

            <Form.Label htmlFor="ano">Ano:</Form.Label>
            <Form.Control
                type="number"
                id="ano"
                value={formData.ano}
                onChange={handleChange}
            />

            <Button variant="primary" type="submit">Adicionar</Button>{' '}
            <Button variant="secondary" type="button">Cancelar</Button>{' '}
        </Form>
    );
}

export default CarForm;