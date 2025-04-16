import { ProductCartProps } from "../components/ProductCard";

export function setItem(key: string, value: ProductCartProps[]) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}
