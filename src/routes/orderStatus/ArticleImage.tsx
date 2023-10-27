import { GiftIcon } from '@heroicons/react/24/outline';

export default function ArticleImage({ url }: { url: string | null }) {
    return url ? (
        <img
            className="h-auto w-20 flex-none rounded bg-gray-50"
            src={url}
            alt="Product"
        />
    ) : (
        <div className="h-20 w-20 flex justify-center items-center text-gray-500">
            <GiftIcon className="w-16 h-16" />
        </div>
    );
}
