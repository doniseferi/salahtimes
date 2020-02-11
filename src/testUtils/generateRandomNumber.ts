const generateRandomNumber = (min: number, max: number) =>
    Math.random() * (max - min) + min;

const generateRandomDate = (minYear: number, maxYear: number) => {
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    function randomDateAfterDate(start, days) { return new Date(start.getTime() + (Math.random() * days * 24 * 60 * 60 * 1000)); }

    randomDate(new Date(2012, 0, 1), new Date())

}
export {
    generateRandomNumber,
    generateRandomDate
}