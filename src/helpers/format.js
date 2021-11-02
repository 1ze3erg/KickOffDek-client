function formatMoney(amount, currency) {
    return new Intl.NumberFormat("th-TH", { style: "currency", currency: currency }).format(amount);
}

export { formatMoney }