import React, { useEffect, useState } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import { getCars } from '../../services/apiService';

function Home() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await getCars();
                setCars(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar dados: {error.message}</div>;
    }

    return (
        <div>
            <NavBar />
            <div style={{ margin: '40px', textAlign: 'center' }}>
                <h1>HotWheels</h1>
                <h3>Bem-vindo a coleção HotWheels</h3>
                <div>
                    <img
                        src="/assets/images/hotwheels-home.png"
                        alt="Logo HotWheels"
                        style={{ width: '600px', height: 'auto', borderRadius: '20px' }}
                    />
                    
                </div>
            </div>
        </div>
    );
}

export default Home;