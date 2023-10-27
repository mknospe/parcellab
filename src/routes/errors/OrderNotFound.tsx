import MainFrame from 'components/MainFrame';
import parcelLabLogo from 'images/parcellab_logo.jpeg';
import Card from 'components/Card';
import Headline from 'components/Headline';
import { Link } from 'react-router-dom';

export default function OrderNotFound() {
    return (
        <MainFrame>
            <div className="flex h-screen flex-1 flex-col justify-center items-center sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
                    <img
                        className="mx-auto h-24 w-auto rounded"
                        src={parcelLabLogo}
                        alt="parcelLab Logo"
                    />
                </div>

                <Card className="sm:max-w-[480px]">
                    <Headline>Order not found!</Headline>
                    <p className="text-gray-500 mb-6">
                        The requested order was not found. This can have several
                        reasons like a typo or an outdated order number.
                    </p>

                    <Link
                        to="/"
                        className="bg-green-400 font-medium p-2 rounded block text-center"
                    >
                        Track another parcel
                    </Link>
                </Card>
            </div>
        </MainFrame>
    );
}
