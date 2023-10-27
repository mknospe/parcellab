import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tracking from 'routes/tracking/Tracking';
import OrderStatus from 'routes/orderStatus/OrderStatus';
import OrderNotFound from 'routes/errors/OrderNotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Tracking />,
    },
    {
        path: '/order-status',
        element: <OrderStatus />,
    },
    {
        path: '/order-not-found',
        element: <OrderNotFound />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
