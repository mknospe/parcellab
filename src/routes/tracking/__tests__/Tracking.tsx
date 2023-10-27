import Tracking from '../Tracking';
import { screen, render } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactNode } from 'react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { handlers } from '../../../mocks/handlers';

// something that should have moved to the setup file
// but for this test task I didn't want to eject the CRA to get access to it
const server = setupServer(...handlers);

const TestWrapper = ({ children }: { children: ReactNode }) => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Tracking />,
        },
    ]);
    return <RouterProvider router={router} />;
};

describe('Tracking', () => {
    beforeAll(() =>
        server.listen({
            onUnhandledRequest(req) {
                console.error(
                    'Found an unhandled %s request to %s',
                    req.method,
                    req.url
                );
            },
        })
    );

    afterEach(() => {
        server.resetHandlers();
    });

    afterAll(() => server.close());

    test('should not submit when input is invalid', async () => {
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
});
