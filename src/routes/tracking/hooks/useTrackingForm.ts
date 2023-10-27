import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { z } from 'zod';

export type TrackingFormValues = {
    orderNumber: string;
    zipCode: string;
};

function useTrackingForm() {
    const schema = useMemo(() => {
        return z.object({
            orderNumber: z
                .string()
                .min(1, { message: 'Please provide a valid Order Number' }),
            zipCode: z
                .string()
                .min(1, { message: 'Please provide a valid Zip Code' }),
        });
    }, []);

    return useForm<TrackingFormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            orderNumber: '', // TODO remove defaults
            zipCode: '',
        },
    });
}

export default useTrackingForm;
