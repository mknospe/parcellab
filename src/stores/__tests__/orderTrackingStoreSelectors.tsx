import { ReactNode, useEffect, useState } from 'react';
import { renderHook } from '@testing-library/react';
import { useOrder, useOrderTrackingActions } from '../orderTrackingStore';

const TestBed = ({ children }: { children: ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);
    const { setOrder } = useOrderTrackingActions();

    useEffect(() => {
        if (!isMounted) {
            setIsMounted(true);
            return;
        }

        setOrder({
            // @ts-ignore
            id: 1,
            status: 'Registered',
        });
    }, [isMounted, setOrder]);

    return <>{children}</>;
};

describe('orderTrackingStore Selectors', function () {
    test('should return the default value', () => {
        const { result } = renderHook(() => useOrder());
        expect(result.current).toBeNull();
    });

    test('should return the order', () => {
        const { result } = renderHook(() => useOrder(), { wrapper: TestBed });
        expect(result.current).toEqual({
            id: 1,
            status: 'Registered',
        });
    });
});
