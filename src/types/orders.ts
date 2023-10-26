export type CheckpointStatus =
    | 'Registered'
    | 'New delivery date set'
    | 'Ready for collection'
    | 'Failed delivery attempt'
    | 'In transit';

export type Courier = 'dhl' | 'ups';

export type CheckpointMeta = {
    pickup_address: string;
    pickup_address_link: string;
    pickup_address_map_url: string;
};

export type Checkpoint = {
    status_details: string;
    event_timestamp: string;
    status: CheckpointStatus;
    country_iso3: string;
    city: string;
    meta?: CheckpointMeta;
};

export type Article = {
    articleNo: string;
    articleName: string;
    articleImageUrl: string;
    quantity: number;
    price: number;
};

export type DeliveryInformation = {
    articles: Article[];
    orderNo: string;
    order_date: string;
    recipient: string;
    recipient_notification: string;
    email: string;
    street: string;
    city: string;
    region: string;
    timezone: string;
    announced_delivery_date: string;
};

export type Order = {
    _id: string;
    courier: Courier;
    tracking_number: string;
    created: string;
    updated: string;
    checkpoints: Checkpoint[];
    delivery_info: DeliveryInformation;
    destination_country_iso3: string;
    zip_code: string;
};
