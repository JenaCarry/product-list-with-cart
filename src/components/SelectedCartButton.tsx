export function SelectedCartButton() {
    return (
        <button className="w-40 bg-white border border-pro-rose-400 rounded-3xl px-5 py-2.5 flex items-center justify-center gap-2 font-semibold text-sm absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 cursor-pointer">
            <img src="/assets/images/icon-add-to-cart.svg" alt="Icon Cart" />
            Add to Cart
        </button>
    );
}
