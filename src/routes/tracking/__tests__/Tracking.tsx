import Tracking from '../Tracking';
import { screen, render, waitFor } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
jest.mock('axios', () => {
    return {
        get: jest.fn(),
    };
});

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

const TestWrapper = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Tracking />,
        },
    ]);
    return <RouterProvider router={router} />;
};

describe('Tracking', () => {
    test('should show input errors and should not submit when input is invalid', async () => {
        // @ts-ignore
        axios.get.mockResolvedValue('ok');
        render(<Tracking />, { wrapper: TestWrapper });

        await screen.findByText('Track your order');

        const orderNumberInput = await screen.findByRole('textbox', {
            name: 'Order Number',
        });
        const zipCodeInput = await screen.findByRole('textbox', {
            name: 'Zip Code',
        });
        const submitButton = await screen.findByRole('button', {
            name: 'Track',
        });

        expect(orderNumberInput).not.toHaveValue();
        expect(zipCodeInput).not.toHaveValue();
        expect(
            screen.queryByText('Please provide a valid Order Number')
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Please provide a valid Zip Code')
        ).not.toBeInTheDocument();

        await userEvent.click(submitButton);

        expect(
            await screen.findByText('Please provide a valid Order Number')
        ).toBeInTheDocument();
        expect(
            await screen.findByText('Please provide a valid Zip Code')
        ).toBeInTheDocument();
    });

    test('should submit and redirect, when a corresponding order was found', async () => {
        // @ts-ignore
        axios.get.mockResolvedValue('ok');
        render(<Tracking />, { wrapper: TestWrapper });

        await screen.findByText('Track your order');

        const orderNumberInput = await screen.findByRole('textbox', {
            name: 'Order Number',
        });
        const zipCodeInput = await screen.findByRole('textbox', {
            name: 'Zip Code',
        });
        const submitButton = await screen.findByRole('button', {
            name: 'Track',
        });

        await userEvent.type(orderNumberInput, '74328923203');
        await userEvent.type(zipCodeInput, '81371');
        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(mockNavigate).toBeCalledWith('/order-status');
        });
    });

    test('should submit and redirect to the error route, when a no order was found', async () => {
        // @ts-ignore
        axios.get.mockRejectedValueOnce('Error');
        render(<Tracking />, { wrapper: TestWrapper });

        await screen.findByText('Track your order');

        const orderNumberInput = await screen.findByRole('textbox', {
            name: 'Order Number',
        });
        const zipCodeInput = await screen.findByRole('textbox', {
            name: 'Zip Code',
        });
        const submitButton = await screen.findByRole('button', {
            name: 'Track',
        });

        await userEvent.type(orderNumberInput, 'ABC-123');
        await userEvent.type(zipCodeInput, '12345');
        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(mockNavigate).toBeCalledWith('/order-not-found');
        });
    });
});
