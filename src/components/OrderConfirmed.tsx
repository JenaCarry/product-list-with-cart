import { formatCurrency } from "../utils/formatCurrency";
import { OrderConfirmedIcon } from "./Icons/OrderConfirmedIcon";
import { ProductCartProps } from "./ProductCard";

interface OrderConfirmedProps {
    cartItems: ProductCartProps[];
    orderTotal: number;
    setCartItems: (newCart: ProductCartProps[]) => void;
    setShowModal: (show: boolean) => void;
}

export function OrderConfirmed({
    cartItems,
    setCartItems,
    orderTotal,
    setShowModal,
}: OrderConfirmedProps) {
    const generateNewOrder = () => {
        setCartItems([]);
        setShowModal(false);
    };

    return (
        <div className="fixed inset-0 grid place-content-center grid-cols-[minmax(0,_32rem)] bg-black/40 p-2.5 z-50">
            <div className="w-full custom-scroll bg-white px-4 py-7 min-md:px-7 rounded-lg grid gap-5 min-md:gap-6 text-sm">
                <OrderConfirmedIcon />
                <div>
                    <h2 className="text-4xl font-bold">Order Confirmed</h2>
                    <p className="text-pro-rose-400">
                        We hope you enjoy your food!
                    </p>
                </div>

                <div className="bg-pro-rose-50 rounded-lg p-4 min-md:p-5">
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3.5">
                                    <img
                                        className="w-16 h-16 rounded-lg"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <div>
                                        <h3 className=" truncate max-w-24 min-[23rem]:max-w-32 min-[26rem]:max-w-full">
                                            {item.name}
                                        </h3>
                                        <p className="flex gap-4">
                                            <span className="text-pro-red font-semibold">
                                                {item.quantity}x
                                            </span>{" "}
                                            <span className="text-pro-rose-500">
                                                @ {formatCurrency(item.price)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <p className="font-semibold text-base">
                                    {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                            <hr className="border-pro-rose-100 my-4" />
                        </div>
                    ))}
                    <h4 className="flex items-center justify-between">
                        Order Total{" "}
                        <span className="font-bold text-2xl">
                            {formatCurrency(orderTotal)}
                        </span>
                    </h4>
                </div>
                <button
                    onClick={generateNewOrder}
                    className="w-full bg-pro-red text-white text-center text-base px-5 py-2.5 rounded-3xl cursor-pointer transition hover:bg-pro-red hover:brightness-90"
                >
                    Start New Order
                </button>
            </div>
        </div>
    );
}
