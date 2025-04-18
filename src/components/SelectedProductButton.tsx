import { DessertsProps } from "../App";
import { increaseCartItemQuantity } from "../utils/increaseCartItemQuantity";
import { DecrementIcon } from "./Icons/DecrementIcon";
import { IncrementIcon } from "./Icons/IncrementIcon";
import { ProductCartProps } from "./ProductCard";

interface SelectedProductButtonProps {
    product: DessertsProps;
    cartItems: ProductCartProps[];
    setCartItems: (newCart: ProductCartProps[]) => void;
}

export function SelectedProductButton({
    product,
    cartItems,
    setCartItems,
}: SelectedProductButtonProps) {
    const itemIndex = cartItems.findIndex((item) => item.name === product.name);
    return (
        <div className="flex items-center justify-between w-40 bg-pro-red text-pro-rose-50 px-4 py-2.5 rounded-3xl absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
            <button className="w-5 h-5 border border-pro-rose-50 rounded-full grid place-content-center cursor-pointer group hover:bg-pro-rose-50 transition">
                <DecrementIcon
                    className={"text-pro-rose-50 group-hover:text-pro-red"}
                />
            </button>
            <p>{cartItems[itemIndex].quantity}</p>
            <button
                onClick={() =>
                    setCartItems(increaseCartItemQuantity(product, cartItems))
                }
                className="w-5 h-5 border border-pro-rose-50 rounded-full grid place-content-center cursor-pointer group hover:bg-pro-rose-50 transition"
            >
                <IncrementIcon
                    className={"text-pro-rose-50 group-hover:text-pro-red"}
                />
            </button>
        </div>
    );
}
