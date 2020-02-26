describe('Madhab angles for Asr', () => {
  test('returns the inverse cotangent of t + tangent of latitude subtracted by declination of the sun', () => {
    const t = 1
    const latitudeInRadians = 0.890118
    const declinationOfTheSunInRadians = -0.158736427
    const expected = Math.PI / 2 - Math.atan(t + Math.tan(latitudeInRadians - declinationOfTheSunInRadians))
    const angle = asrAngle()
    expect(angle).toEqual(expected)
  })
})
