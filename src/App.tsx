import { useEffect, useRef, useState } from "react";
import { ProductCard, ProductCartProps } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { Loading } from "./components/Loading";
import { getItem, setItem } from "./utils/storage";
import { calculateCartTotal } from "./utils/calculateCartTotal";

interface ImageProps {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface DessertsProps {
    image: ImageProps;
    name: string;
    category: string;
    price: number;
}

function App() {
    const firstRender = useRef<boolean>(true);
    const [data, setData] = useState<DessertsProps[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [cartItems, setCartItems] = useState<ProductCartProps[]>([]);
    const [orderTotal, setOrderTotal] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json");

                if (!response.ok) {
                    throw new Error(
                        `Erro na requisição: ${response.statusText}`
                    );
                }

                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao carregar JSON: ", error);
            }
        };
        fetchData();
        getAllOrder();
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        setItem("@Order", cartItems);
        setOrderTotal(calculateCartTotal(cartItems));
    }, [cartItems]);

    const getAllOrder = () => {
        const orderProduct = getItem("@Order");
        try {
            if (orderProduct) {
                setCartItems(orderProduct);
            }
        } catch (error) {
            console.error("Erro ao carregar os pedidos!", error);
        }
    };

    return (
        <main className="w-full my-10">
            {loading ? (
                <Loading />
            ) : (
                <div className="w-full grid place-content-center gap-5 min-lg:grid-cols-[1fr_22rem] min-lg:items-start min-lg:gap-7">
                    <div>
                        <h1 className="text-4xl font-bold mb-7">Desserts</h1>
                        <section className="grid gap-6 min-lg:grid-cols-[repeat(3,_minmax(0,_14rem))]">
                            <h2 className="sr-only">dessert side</h2>
                            {data?.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    product={product}
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                />
                            ))}
                        </section>
                    </div>
                    <section className="px-6 bg-white rounded-lg min-xl:mb-0 shadow-xs">
                        <Cart
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            orderTotal={orderTotal}
                        />
                    </section>
                </div>
            )}
        </main>
    );
}

export default App;
