interface Degree {
    value: Number
}

const degree = (value: number): Degree => {
    if (value < -360)
        throw new RangeError(errorMessage(value))

        if (value > 360)
        throw new RangeError(errorMessage(value))

    return { value }
}

const errorMessage = (value: number) => (
    `Out of range error.
    Attempted value: ${value}. 
    Please provide a value within the range of -360 to 360.`);

export {
    degree,
    Degree
}