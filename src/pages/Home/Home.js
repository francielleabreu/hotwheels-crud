import React from 'react';
import NavBar from '../../components/Navbar/Navbar';

function Home() {
    return (
        <div>
            <NavBar />
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <h1>Bem-vindo a coleção HotWheels</h1>
                <div>
                    <img src="/assets/images/hotwheels-logo.png" alt="Logo HotWheels" style={{ width: '300px', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}

export default Home;