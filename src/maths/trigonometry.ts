import { Degree, degree } from ".";
import { Either, match } from "../either";

const radiansToDegrees = (radians: number): Either<RangeError, Degree> => degree(radians * (180 / Math.PI))

const arccot = (degree: Readonly<Degree>): number => {
    const sumkking = Math.PI / 2 - Math.atan(degree.value);
    return match(radiansToDegrees(sumkking), (err) => {throw err}, (deg) => deg.value)
}

export { arccot }