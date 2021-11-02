function calDiffDay(endDate) {
    return Math.floor(new Date(new Date(endDate) - new Date()) / (1000 * 3600 * 24));
}

export { calDiffDay }