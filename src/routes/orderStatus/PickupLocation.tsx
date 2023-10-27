import * as Orders from 'types/orders';
import Headline from 'components/Headline';

export default function PickupLocation({
    address,
    status,
}: {
    address: Orders.PickupAddress;
    status: {
        name: Orders.CheckpointStatus['status'];
        details: Orders.Checkpoint['status_details'];
    };
}) {
    return (
        <div>
            <Headline>{status.name}</Headline>
            <p className="mb-4">{status.details}</p>
            <p className="mb-2 font-medium">
                Location:{' '}
                <a
                    className="underline"
                    href={address.pickup_address_link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {address.pickup_address}
                </a>
            </p>
            <a
                href={address.pickup_address_link}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={address.pickup_address_map_url}
                    className="w-full rounded border border-gray-200"
                    alt="Pickup Location Map"
                />
            </a>
        </div>
    );
}
