import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import CarForm from '../../components/CarForm/CarForm';

function AddCar() {
    return (
        <div>
            <NavBar />
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <h1>Adicionar Carro</h1>
            </div>
            <CarForm />
        </div>
    );
}

export default AddCar;