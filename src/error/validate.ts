const isNullOrUndefined = <T>(target: T): boolean => getNullProperties(target).length > 0

const getNullProperties = <T>(target: T): string[] => {
  const nullOrUndefinedProperties: string[] = []
  if (target === null || target === undefined) {
    return ['target']
  }

  for (const key in target) {
    if (target[key] === null || target[key] === undefined) {
      nullOrUndefinedProperties.push(key)
    }
  }
  return nullOrUndefinedProperties
}

const throwErrorOnNullOrUndefined = <T>(target: T): void => {
  const properties = getNullProperties(target).join(',')
  if (properties.length > 0) {
    throw new ReferenceError(`${properties} are null or undefined. Please provide a value for ${null}`)
  }
}

export {
  getNullProperties,
  throwErrorOnNullOrUndefined,
  isNullOrUndefined
}
