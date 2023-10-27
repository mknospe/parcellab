import { act, renderHook } from '@testing-library/react';
import { useOrderTrackingStore } from '../orderTrackingStore';

describe('orderTrackingStore', () => {
    test('should first set the order and then flush it', () => {
        const { result } = renderHook(() => useOrderTrackingStore());

        expect(result.current.order).toBeNull();

        act(() => {
            // I hope it's fine to ignore a properly typed value for this test task
            result.current.actions.setOrder({
                // @ts-ignore
                id: 1,
                status: 'Registered',
            });
        });

        expect(result.current.order).toEqual({
            id: 1,
            status: 'Registered',
        });

        act(() => {
            result.current.actions.flushOrder();
        });

        expect(result.current.order).toBeNull();
    });
});
