import { arccot, tan, degree, Degree } from '../maths'
import { matchOrThrow } from '../either'

//angle = inverse cotangent(lengthOfShadow + tangent(latitude - declinationOfTheSun))
//t Hanafi school says that Asr begins when the length of any object's shadow is twice the length of the object plus the length of that object's shadow at noon.
const asrAngle = (
    shadowLength: Readonly<Degree>,
    latitude: Readonly<Degree>,
    declinationOfTheSun: Readonly<Degree>): Readonly<Degree> => {
    const lsubd = latitude.value - declinationOfTheSun.value
    const lsubdegree = matchOrThrow(degree(lsubd))
    const tanlSsubdeg = tan(lsubdegree)
    const toBeArccotted = matchOrThrow(degree(shadowLength.value + tanlSsubdeg))
    const result = arccot(toBeArccotted)
    return matchOrThrow(result)
}

export {
    asrAngle
}