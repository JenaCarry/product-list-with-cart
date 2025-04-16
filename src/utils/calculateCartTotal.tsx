import { ProductCartProps } from "../components/ProductCard";

export const calculateCartTotal = (products: ProductCartProps[]): number => {
    return products.reduce((total, item) => {
        return total + (item.price || 0) * item.quantity;
    }, 0);
};
