import { DessertsProps } from "../App";
import { ProductCartProps } from "../components/ProductCard";

export const handleAddCart = (
    cartItems: ProductCartProps[],
    product: DessertsProps
) => {
    const existingItemIndex = cartItems.findIndex(
        (item) => item.name === product.name
    );
    if (existingItemIndex !== -1) {
        const updateCart: ProductCartProps[] = [...cartItems];
        updateCart[existingItemIndex].quantity += 1;
        return updateCart;
    } else {
        const newItem: ProductCartProps = {
            name: product.name,
            price: product.price,
            image: product.image.thumbnail,
            quantity: 1,
        };
        return [...cartItems, newItem];
    }
};
