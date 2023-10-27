import { create } from 'zustand';
import { Order } from '../types/orders';

export type OrderTrackingActions = {
    setOrder: (order: Order) => void;
    flushOrder: () => void;
};

export type OrderTrackingState = {
    order: Order | null;
};

type OrderTrackingStore = OrderTrackingState & {
    actions: OrderTrackingActions;
};

export const useOrderTrackingStore = create<OrderTrackingStore>((set) => ({
    order: null,
    actions: {
        setOrder: (order) => set({ order }),
        flushOrder: () => set({ order: null }),
    },
}));

// selectors
export const useOrder = (): Order | null =>
    useOrderTrackingStore((state) => state.order);

// actions
export const useOrderTrackingActions = (): OrderTrackingActions =>
    useOrderTrackingStore((state) => state.actions);
