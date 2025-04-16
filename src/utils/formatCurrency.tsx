export const formatCurrency = (currency: number): string => {
    const formattedCurrency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return formattedCurrency.format(currency);
};
