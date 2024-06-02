import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import CarList from '../../components/CarList/CarList';

function Cars() {
    return (
        <div>
            <NavBar />
            <div style={{ margin: '40px', textAlign: 'center' }}>
                <h1>Lista de Carros</h1>
            </div>
            <CarList />
        </div>
    );
}

export default Cars;