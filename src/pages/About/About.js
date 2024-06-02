import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Card from 'react-bootstrap/Card';

function About() {
    return (
        <div>
            <NavBar />
            <div style={{ margin: '40px', textAlign: 'center' }}>
                <h1>Sobre a coleção HotWheels</h1>
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src="/assets/images/hotwheels-about.png" alt="Logo HotWheels" />
                        <Card.Body>
                            <Card.Text>
                                <p>Essa é uma aplicação para um CRUD de carros HotWheels.</p>
                                <p>Elaborada na Disciplina Desenvolvimento de Sistemas Frontend e desenvolvida por Francielle Abreu.</p>
                                <p>Do curso de Graduação online da PUCRS.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;