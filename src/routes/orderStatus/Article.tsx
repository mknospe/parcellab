import * as Orders from 'types/orders';
import { formatCurrency } from 'utils/currency';
import ArticleImage from './ArticleImage';

export default function Article({ item }: { item: Orders.Article }) {
    return (
        <li key={item.articleNo} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <div className="flex justify-center w-20">
                    <ArticleImage url={item.articleImageUrl} />
                </div>
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                        {item.quantity}x {item.articleName}
                    </p>
                    <p className="mt-1 flex text-xs leading-5 text-gray-500">
                        Article No: {item.articleNo}
                    </p>
                    <p className="mt-1 flex text-xs leading-5 text-gray-900">
                        {formatCurrency(item.price)}
                    </p>
                </div>
            </div>
        </li>
    );
}
