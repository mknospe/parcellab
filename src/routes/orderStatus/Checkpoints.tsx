import * as Orders from 'types/orders';
import Checkpoint from './Checkpoint';
import Headline from 'components/Headline';

export default function Checkpoints({ items }: { items: Orders.Checkpoint[] }) {
    return (
        <div>
            <Headline>Shipping Updates</Headline>
            <ul className="divide-y divide-gray-100">
                {items.map((item, index) => {
                    return (
                        <Checkpoint
                            key={item.event_timestamp}
                            item={item}
                            totalItems={items.length}
                            index={index}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
