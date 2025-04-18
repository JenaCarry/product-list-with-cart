import { DessertsProps } from "../App";
import { addToCart } from "../utils/addToCart";
import { ProductCartProps } from "./ProductCard";

interface AddCartButtonProps {
    product: DessertsProps;
    cartItems: ProductCartProps[];
    setCartItems: (newCart: ProductCartProps[]) => void;
}

export function AddToCartButton({
    product,
    cartItems,
    setCartItems,
}: AddCartButtonProps) {
    return (
        <button
            onClick={() => setCartItems(addToCart(cartItems, product))}
            className="w-40 bg-white border border-pro-rose-400 rounded-3xl px-5 py-2.5 flex items-center justify-center gap-2 font-semibold text-sm absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 cursor-pointer hover:text-pro-red hover:border-pro-red transition"
        >
            <img src="/assets/images/icon-add-to-cart.svg" alt="Icon Cart" />
            Add to Cart
        </button>
    );
}
