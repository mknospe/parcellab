import parcelLabLogo from 'images/parcellab_logo.jpeg';
import Headline from 'components/Headline';
import Input from 'components/Input';
export default function Tracking() {
    return (
        <div className="bg-gradient-to-b from-blue-100 from-10% to-white">
            <div className="flex h-screen flex-1 flex-col justify-center items-center sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-24 w-auto rounded"
                        src={parcelLabLogo}
                        alt="parcelLab Logo"
                    />
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded sm:px-12">
                        <Headline text="Track your order" />
                        <p className="text-gray-500 mb-6">
                            Enter your order number and zip code combination to
                            see the order details and shipping updates.
                        </p>

                        <form className="space-y-6" action="#" method="POST">
                            <Input
                                name="orderId"
                                type="text"
                                label="Order Number"
                            />
                            <Input
                                name="zipCode"
                                type="text"
                                label="Zip Code"
                            />

                            <button
                                type="submit"
                                className="flex w-full justify-center rounded bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Track
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
