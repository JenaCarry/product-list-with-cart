import { useState } from "react";
import { calculateItemsTotal } from "../utils/calculateItemsTotal";
import { formatCurrency } from "../utils/formatCurrency";
import { RemoveItemIcon } from "./Icons/RemoveItemIcon";
import { ProductCartProps } from "./ProductCard";
import { OrderConfirmed } from "./OrderConfirmed";

export interface CartProps {
    cartItems: ProductCartProps[];
    orderTotal: number;
    setCartItems: (newCart: ProductCartProps[]) => void;
}

export function Cart({ cartItems, setCartItems, orderTotal }: CartProps) {
    const [showModal, setShowModal] = useState<boolean>(false);

    const removeItemCart = (index: number) => {
        const updateCart: ProductCartProps[] = [...cartItems];
        updateCart.splice(index, 1);
        setCartItems(updateCart);
    };

    return (
        <>
            <h3 className="text-2xl font-bold text-pro-red my-5">
                Your Cart ({calculateItemsTotal(cartItems)})
            </h3>
            {cartItems.length > 0 ? (
                <div className="grid gap-5 text-sm">
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <div className="flex items-center justify-between">
                                    <div className="grid gap-1">
                                        <h4 className="font-semibold">
                                            {item.name}
                                        </h4>
                                        <div>
                                            <p className="flex gap-2">
                                                <span className="text-pro-red font-semibold">
                                                    {item.quantity}x
                                                </span>{" "}
                                                <span className="text-pro-rose-400">
                                                    @{" "}
                                                    {formatCurrency(item.price)}
                                                </span>{" "}
                                                <span className="text-pro-rose-500 font-semibold">
                                                    {formatCurrency(
                                                        item.price *
                                                            item.quantity
                                                    )}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItemCart(index)}
                                        className="w-5 h-5 border border-pro-rose-400 rounded-full grid place-content-center cursor-pointer group transition hover:border-pro-rose-500"
                                    >
                                        <RemoveItemIcon className="text-pro-rose-300 group-hover:text-pro-rose-400" />
                                    </button>
                                </div>
                                <hr className="border-pro-rose-100 my-4" />
                            </li>
                        ))}
                    </ul>
                    <h4 className="flex items-center justify-between">
                        Order Total{" "}
                        <span className="font-bold text-2xl">
                            {formatCurrency(orderTotal)}
                        </span>
                    </h4>
                    <div className="flex gap-1.5 items-center justify-center bg-pro-rose-50 rounded-lg px-2 py-3">
                        <img
                            src="/assets/images/icon-carbon-neutral.svg"
                            alt="Carbon Neutral"
                        />
                        <p>
                            This is a{" "}
                            <span className="font-semibold">
                                carbon-neutral
                            </span>{" "}
                            delivery
                        </p>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="w-full bg-pro-red text-base text-white text-center px-5 py-2.5 rounded-3xl mb-5 cursor-pointer transition hover:bg-pro-red hover:brightness-90"
                    >
                        Confirm Order
                    </button>
                    {showModal && (
                        <OrderConfirmed
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            orderTotal={orderTotal}
                            setShowModal={setShowModal}
                        />
                    )}
                </div>
            ) : (
                <div>
                    <img
                        className="mx-auto"
                        src="/assets/images/illustration-empty-cart.svg"
                        alt="Empty Cart"
                    />
                    <p className="font-semibold text-pro-rose-400 text-sm mt-4 mb-6 text-center">
                        Your added items will appear here
                    </p>
                </div>
            )}
        </>
    );
}
