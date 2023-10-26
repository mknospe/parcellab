import { http, HttpResponse } from 'msw';
import ordersMock from 'mocks/data/orders.json';
import { Order } from 'types/orders';

export const handlers = [
    http.get(
        'https://api.prcl.dev/orders/:orderNumber',
        ({ request, params }) => {
            const url = new URL(request.url);
            const zipCode = url.searchParams.get('zipCode');
            const orderNumber = params.orderNumber as string | null;

            const matchingOrder = (ordersMock as Order[]).find((order) => {
                return (
                    order.tracking_number === orderNumber &&
                    order.zip_code === zipCode
                );
            });

            if (matchingOrder) {
                return HttpResponse.json(matchingOrder);
            }

            return new HttpResponse(null, {
                status: 404,
            });
        }
    ),
];
