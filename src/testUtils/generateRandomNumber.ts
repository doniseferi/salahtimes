const generateRandomNumber = (min: number, max: number) =>
    Math.random() * (max - min) + min;

const generateRandomDate = () => new Date();

export {
    generateRandomNumber,
    generateRandomDate
}