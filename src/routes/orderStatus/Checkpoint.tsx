import * as Orders from 'types/orders';
import {
    ClipboardDocumentCheckIcon,
    ExclamationTriangleIcon,
    TruckIcon,
    CalendarDaysIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { formatDateTime } from 'utils/dateTime';

const statusIconMap = {
    Registered: ClipboardDocumentCheckIcon,
    'In transit': TruckIcon,
    'Failed delivery attempt': ExclamationTriangleIcon,
    'New delivery date set': CalendarDaysIcon,
    'Ready for collection': CheckCircleIcon,
};

export default function Checkpoint({
    item,
    totalItems,
    index,
}: {
    item: Orders.Checkpoint;
    totalItems: number;
    index: number;
}) {
    const StatusIcon = statusIconMap[item.status];

    return (
        <li>
            <div className="relative pb-8">
                {index < totalItems - 1 ? (
                    <span
                        className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                    />
                ) : null}
                <div className="relative flex space-x-3">
                    <div>
                        <span className="bg-white h-10 w-10 flex items-center justify-center ring-8 ring-white">
                            <StatusIcon
                                className="h-8 w-8 text-gray-600"
                                aria-hidden="true"
                            />
                        </span>
                    </div>
                    <div className="flex min-w-0 flex-1 text-sm justify-between space-x-4 pt-1.5">
                        <div>
                            <p className="text-gray-900 font-medium leading-6">
                                {item.status}
                            </p>
                            <p className="text-gray-500">
                                {item.status_details}
                            </p>
                        </div>
                        <div className="whitespace-nowrap text-sm text-right text-gray-900">
                            {formatDateTime(item.event_timestamp)}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
