import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarList from './CarList';
import { getCars } from './ApiService';

jest.mock('./ApiService');

const mockCars = [
    { name: 'Corolla', brand: 'Toyota', color: 'Branco', year: 2020 },
    { name: 'Honda', brand: 'Civic', color: 'Preto', year: 2022 },
];

describe('CarList', () => {
    test('deve renderizar a lista de carros', async () => {
        getCars.mockResolvedValue(mockCars);

        render(<CarList />);

        expect(screen.getByText('Lista de Carros')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Toyota - Corolla - 2020')).toBeInTheDocument();
            expect(screen.getByText('Honda - Civic - 2019')).toBeInTheDocument();
        });
    });

    test('deve mostrar uma mensagem de erro quando a API falhar', async () => {
        getCars.mockRejectedValue(new Error('Erro ao buscar carros'));

        render(<CarList />);
        await waitFor(() => {
            expect(screen.getByText('Erro ao buscar carros:')).toBeInTheDocument();
        });
    });
});
