interface Angle {
    degrees: Number
}

const angle = (value: number): Angle => {
    if (value < 0)
        throw new RangeError(errorMessage(value))

        if (value > 360)
        throw new RangeError(errorMessage(value))

    return { degrees: value }
}

const errorMessage = (value: number) => (
    `Out of range error.
    Attempted value: ${value}. 
    Please provide a value within the range of -360 to 360.`);


export {
    angle,
    Angle
}