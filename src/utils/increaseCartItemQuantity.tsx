import { DessertsProps } from "../App";
import { ProductCartProps } from "../components/ProductCard";

export const increaseCartItemQuantity = (
    product: DessertsProps,
    cartItems: ProductCartProps[]
) => {
    const itemIndex = cartItems.findIndex((item) => item.name === product.name);
    const updateCart: ProductCartProps[] = [...cartItems];
    updateCart[itemIndex].quantity += 1;
    return updateCart;
};
