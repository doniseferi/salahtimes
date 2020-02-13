const generateRandomNumber = (min: number, max: number): number =>
    Math.random() * (max - min) + min;

const generateRandomDate = (minYear: number, maxYear: number): Date => {
    const startDate = new Date(minYear, 0, 1, 0, 0, 0, 0);
    const endDate = new Date(maxYear, 11, 31, 23, 59, 59, 999);
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
}

export {
    generateRandomNumber,
    generateRandomDate
}