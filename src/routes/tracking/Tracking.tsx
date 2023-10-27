import parcelLabLogo from 'images/parcellab_logo.jpeg';
import Headline from 'components/Headline';
import { SubmitHandler } from 'react-hook-form';
import useTrackingForm, {
    TrackingFormValues,
} from 'routes/tracking/hooks/useTrackingForm';
import Input from 'components/Input';
import { useNavigate } from 'react-router-dom';
import type * as Orders from 'types/orders';
import { useOrderTrackingActions } from 'stores/orderTrackingStore';
import MainFrame from 'components/MainFrame';
import Card from 'components/Card';
import Button from 'components/Button';

export default function Tracking() {
    const navigate = useNavigate();
    const { setOrder, flushOrder } = useOrderTrackingActions();
    const { formState, handleSubmit, register } = useTrackingForm();

    const onSubmit: SubmitHandler<TrackingFormValues> = async ({
        orderNumber,
        zipCode,
    }) => {
        try {
            const response = await fetch(
                `https://api.prcl.dev/orders/${orderNumber}?zipCode=${zipCode}`
            );
            const order = (await response.json()) as Orders.Order;

            setOrder(order);
            navigate('/order-status');
        } catch (e) {
            flushOrder();
            navigate('/order-not-found');
        }
    };

    return (
        <MainFrame>
            <div className="flex h-screen flex-1 flex-col justify-center items-center sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
                    <img
                        className="mx-auto h-24 w-auto rounded"
                        src={parcelLabLogo}
                        alt="parcelLab Logo"
                    />
                </div>

                <Card className="sm:max-w-[480px]">
                    <Headline>Track your order</Headline>
                    <p className="text-gray-500 mb-6">
                        Enter your order number and zip code combination to see
                        the order details and shipping updates.
                    </p>

                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Input
                            {...register('orderNumber')}
                            error={formState.errors.orderNumber?.message}
                            type="text"
                            label="Order Number"
                            autoComplete="off"
                        />
                        <Input
                            {...register('zipCode')}
                            error={formState.errors.zipCode?.message}
                            type="text"
                            label="Zip Code"
                            autoComplete="off"
                        />

                        <Button type="submit">Track</Button>
                    </form>
                </Card>
            </div>
        </MainFrame>
    );
}
