import { ProductCartProps } from "../components/ProductCard";

export const calculateItemsTotal = (cartItems: ProductCartProps[]): number => {
    return cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
};
