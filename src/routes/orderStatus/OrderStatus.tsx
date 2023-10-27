import { useOrder, useOrderTrackingActions } from 'stores/orderTrackingStore';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ArticleList from './ArticleList';
import Checkpoints from './Checkpoints';
import MainFrame from 'components/MainFrame';
import Card from 'components/Card';
import logoFullWhite from 'images/parcelab-logo-white.svg';
import Button from 'components/Button';
import { LockClosedIcon as LogoutIcon } from '@heroicons/react/20/solid';
import PickupLocation from './PickupLocation';

export default function OrderStatus() {
    const { flushOrder } = useOrderTrackingActions();
    const order = useOrder();
    const navigate = useNavigate();

    if (!order) {
        return <Navigate to="/" replace />;
    }

    const signOut = () => {
        flushOrder();
        navigate('/', { replace: true });
    };

    const latestCheckpoint = order.checkpoints[0];
    const isReadyForCollection =
        latestCheckpoint.status === 'Ready for collection';
    return (
        <MainFrame>
            <header className="px-2 sm:px-0 py-4 flex items-center justify-between">
                <Link to="/">
                    <img
                        className="bg-blue-950 px-4 py-2 h-18 w-auto rounded"
                        src={logoFullWhite}
                        alt="parcelLab"
                    />
                </Link>

                <div>
                    <Button
                        type="button"
                        className="flex items-center justify-center gap-2"
                        onClick={signOut}
                    >
                        <LogoutIcon className="w-4 h-4" /> Logout
                    </Button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-stretch">
                {isReadyForCollection ? (
                    <Card>
                        <PickupLocation
                            address={latestCheckpoint.meta}
                            status={{
                                name: latestCheckpoint.status,
                                details: latestCheckpoint.status_details,
                            }}
                        />
                    </Card>
                ) : null}
                <Card>
                    <Checkpoints items={order.checkpoints} />
                </Card>
                <Card>
                    <ArticleList items={order.delivery_info.articles} />
                </Card>
            </div>
        </MainFrame>
    );
}
