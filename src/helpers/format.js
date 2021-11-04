function formatMoney(amount, currency) {
    if (currency) {
        return new Intl.NumberFormat("th-TH", { style: "currency", currency: currency }).format(amount);
    } else {
        return;
    }
}

function formatMonthStringToNumber(monthString) {
    const month = {
        JAN: "01",
        FEB: "02",
        MAR: "03",
        APR: "04",
        MAY: "05",
        JUN: "06",
        JUL: "07",
        AUG: "08",
        SEP: "09",
        OCT: "10",
        NOV: "11",
        DEC: "12",
    };
    return month[monthString];
}

function formatMonthNumberToString(monthNumber) {
    const month = {
        "01": "JAN",
        "02": "FEB",
        "03": "MAR",
        "04": "APR",
        "05": "MAY",
        "06": "JUN",
        "07": "JUL",
        "08": "AUG",
        "09": "SEP",
        "10": "OCT",
        "11": "NOV",
        "12": "DEC",
    };
    return month[monthNumber];
}

export { formatMoney, formatMonthStringToNumber, formatMonthNumberToString };
