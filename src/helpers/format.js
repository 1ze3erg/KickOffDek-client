function formatMoney(amount, currency) {
    if (currency) {
        return new Intl.NumberFormat("th-TH", { style: "currency", currency: currency }).format(amount);
    } else {
        return;
    }
}

export { formatMoney };
