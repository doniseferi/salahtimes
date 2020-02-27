import { arccot, tan, degree, Degree } from '../maths'
import { matchOrThrow } from '../either'

//angle = arccot(t + tan(L - D))
//L - D needs to n
//t Hanafi school says that Asr begins when the length of any object's shadow is twice the length of the object plus the length of that object's shadow at noon.
const asrAngle = (
    shadowLength: number,
    latitude: Readonly<Degree>,
    declinationOfTheSun: Readonly<Degree>): Readonly<Degree> =>
    arccot(matchOrThrow(
        degree(shadowLength + tan(matchOrThrow(
            degree(latitude.value - declinationOfTheSun.value))))))

export {
    asrAngle
}