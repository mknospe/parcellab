import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tracking from 'routes/tracking/Tracking';
import Order from 'routes/order/Order';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Tracking />,
    },
    {
        path: '/order',
        element: <Order />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
