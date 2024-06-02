import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Carslist() {
    const navigate = useNavigate();
    let cars = JSON.parse(localStorage.getItem('cars')) || [];

    const handleAddCarClick = () => {
        navigate('/addCar');
    };

    const handleDeleteCarClick = (car) => {
        const updatedCars = cars.filter(c => c !== car);
        localStorage.setItem('cars', JSON.stringify(updatedCars));
        window.location.reload();
    };

    return (
        <div>
            <NavBar />
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <h1>Lista de Carros</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Cor</th>
                            <th>Ano</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{car.nome}</td>
                                <td>{car.marca}</td>
                                <td>{car.cor}</td>
                                <td>{car.ano}</td>
                                <td><Button variant="danger" onClick={() => handleDeleteCarClick(car)}>Excluir</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <Button variant="primary" onClick={handleAddCarClick}>
                Adicionar Carro
            </Button>
        </div>
    );
}

export default Carslist;