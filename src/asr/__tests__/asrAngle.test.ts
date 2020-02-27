import { degree } from '../../maths'
import { asrAngle } from '../asrAngle';
import { matchOrThrow } from '../../either';

describe('Madhab angles for Asr', () => {
  test('returns the inverse cotangent of t + tangent of latitude subtracted by declination of the sun', () => {
    const t = 1
    const l = matchOrThrow(degree(51))
    const d = matchOrThrow(degree(-9.094927348779462))
    const actual = asrAngle(t, l, d)
    expect(actual.value).toEqual(20.059015375480953)
  })
})
