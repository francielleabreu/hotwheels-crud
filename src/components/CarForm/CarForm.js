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
        navigate('/cars');
    };

    return (
        <div style={{ margin: '40px', alignItems: 'center' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                />

                <Form.Control
                    type="text"
                    id="marca"
                    placeholder="Marca"
                    value={formData.marca}
                    onChange={handleChange}
                />

                <Form.Control
                    type="text"
                    id="cor"
                    placeholder="Cor"
                    value={formData.cor}
                    onChange={handleChange}
                />

                <Form.Control
                    type="number"
                    id="ano"
                    placeholder="Ano"
                    value={formData.ano}
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