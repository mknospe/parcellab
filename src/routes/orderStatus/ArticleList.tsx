import * as Orders from 'types/orders';
import Article from './Article';
import Headline from 'components/Headline';

export default function ArticleList({ items }: { items: Orders.Article[] }) {
    return (
        <>
            <Headline>Articles</Headline>

            <ul className="divide-y divide-gray-100">
                {items.map((item) => {
                    return <Article key={item.articleNo} item={item} />;
                })}
            </ul>
        </>
    );
}
