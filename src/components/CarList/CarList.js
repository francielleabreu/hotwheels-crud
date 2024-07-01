import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { deleteCar, getCars, updateCar } from '../../services/apiService';

function CarList() {
    const navigate = useNavigate();
    const [cars, setCars] = useState(null);
    const [editIndex, setEditIndex] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        brand: '',
        color: '',
        year: ''
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
        deleteCar(index + 1).then(() => {
            const updatedCars = cars.filter((_, i) => i !== index);
            setCars(updatedCars);
        })
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setEditFormData({ ...editFormData, [id]: value });
    };

    const handleSaveClick = (index) => {
        const updatedCars = [...cars];
        updatedCars[index] = editFormData;
        setCars(updatedCars);
        updateCar(editFormData)
        setEditIndex(null);
    };

    useEffect(() => {
        getCars()
            .then(response => {
                setCars(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

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
                        {cars?.map((car, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            id="name"
                                            value={editFormData.name}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        car.name
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            id="brand"
                                            value={editFormData.brand}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        car.brand
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            id="color"
                                            value={editFormData.color}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        car.color
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="number"
                                            id="year"
                                            value={editFormData.year}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        car.year
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <>
                                            <Button
                                                variant="success"
                                                onClick={() => handleSaveClick(index)}
                                                style={{ marginLeft: '25px', marginRight: '15px' }}
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