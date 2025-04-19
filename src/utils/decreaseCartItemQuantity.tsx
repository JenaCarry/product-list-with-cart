import { DessertsProps } from "../App";
import { ProductCartProps } from "../components/ProductCard";

export const decreaseCartItemQuantity = (
    product: DessertsProps,
    cartItems: ProductCartProps[]
) => {
    const itemIndex = cartItems.findIndex((item) => item.name === product.name);
    const updateCart: ProductCartProps[] = [...cartItems];
    if (updateCart[itemIndex].quantity > 1) {
        updateCart[itemIndex].quantity -= 1;
    } else {
        updateCart.splice(itemIndex, 1);
    }
    return updateCart;
};
