import { DessertsProps } from "../App";
import { formatCurrency } from "../utils/formatCurrency";
import { AddToCartButton } from "./AddToCartButton";
import { SelectedProductButton } from "./SelectedProductButton";

interface ProductCardProps {
    product: DessertsProps;
    cartItems: ProductCartProps[];
    setCartItems: (newCart: ProductCartProps[]) => void;
}

export interface ProductCartProps {
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export function ProductCard({
    product,
    cartItems,
    setCartItems,
}: ProductCardProps) {
    return (
        <article className="w-full max-w-md min-lg:max-h-80">
            <div className="relative mb-7">
                <picture>
                    <source
                        media="(min-width: 64rem)"
                        srcSet={product.image.desktop}
                    />
                    <img
                        className={`rounded-lg shadow-xs ${
                            cartItems.some(
                                (item) => item.name === product.name
                            ) === true
                                ? "border-2 border-pro-red"
                                : ""
                        }`}
                        src={product.image.mobile}
                        alt={product.name}
                    />
                </picture>
                {cartItems.some((item) => item.name === product.name) ? (
                    <SelectedProductButton
                        product={product}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                ) : (
                    <AddToCartButton
                        product={product}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                )}
            </div>
            <span className="text-pro-rose-500 text-sm">
                {product.category}
            </span>
            <h2 className="font-semibold">{product.name}</h2>
            <p className="font-semibold text-pro-red">
                {formatCurrency(product.price)}
            </p>
        </article>
    );
}
