import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function CarList() {
    const navigate = useNavigate();
    const [cars, setCars] = useState(JSON.parse(localStorage.getItem('cars')) || []);
    const [editIndex, setEditIndex] = useState(null);
    const [editFormData, setEditFormData] = useState({
        nome: '',
        marca: '',
        cor: '',
        ano: ''
    });

    const handleAddCarClick = () => {
        navigate('/addCar');
    };

    const handleEditCarClick = (index) => {
        setEditIndex(index);
        const car = cars[index];
        setEditFormData(car);
    };

    const handleDeleteCarClick = (index) => {
        const updatedCars = cars.filter((_, i) => i !== index);
        setCars(updatedCars);
        localStorage.setItem('cars', JSON.stringify(updatedCars));
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setEditFormData({ ...editFormData, [id]: value });
    };

    const handleSaveClick = (index) => {
        const updatedCars = [...cars];
        updatedCars[index] = editFormData;
        setCars(updatedCars);
        localStorage.setItem('cars', JSON.stringify(updatedCars));
        setEditIndex(null);
    };

    return (
        <div>
            <div style={{ margin: '40px', alignItems: 'center' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Cor</th>
                            <th>Ano</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            id="nome"
                                            value={editFormData.nome}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        car.nome
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            id="marca"
                                            value={editFormData.marca}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        car.marca
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            id="cor"
                                            value={editFormData.cor}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        car.cor
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="number"
                                            id="ano"
                                            value={editFormData.ano}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        car.ano
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <>
                                            <Button
                                                variant="success"
                                                onClick={() => handleSaveClick(index)}
                                                style={{ marginLeft: '25px', marginRight: '15px'}}
                                            >
                                                Salvar
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                onClick={() => setEditIndex(null)}
                                            >
                                                Cancelar
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                variant="secondary"
                                                onClick={() => handleEditCarClick(index)}
                                                style={{ marginLeft: '25px', marginRight: '15px' }}
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => handleDeleteCarClick(index)}
                                            >
                                                Excluir
                                            </Button>
                                        </>
                                    )}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button variant="primary" onClick={handleAddCarClick}>
                    Adicionar Carro
                </Button>
            </div>
        </div>
    );
}

export default CarList;