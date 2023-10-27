import { rest } from 'msw';
import ordersMock from 'mocks/data/orders.json';
import { Order } from 'types/orders';

export const handlers = [
    rest.get('https://api.prcl.dev/orders/:orderNumber', (req, res, ctx) => {
        const url = new URL(req.url);
        const zipCode = url.searchParams.get('zipCode');
        const orderNumber = req.params.orderNumber as string | null;

        const matchingOrder = (ordersMock as Order[]).find((order) => {
            return (
                order.tracking_number === orderNumber &&
                order.zip_code === zipCode
            );
        });

        if (matchingOrder) {
            return res(ctx.json(matchingOrder));
        }

        return res(ctx.status(404, 'Order not found'));
    }),
];
