const containsNullMembers = <T>(target: T): boolean => getNullMembers(target).length > 0

const getNullMembers = <T>(target: T): string[] => {
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

const throwErrorOnNull = <T>(target: T): void => {
  const nullMembers = getNullMembers(target)
  if (nullMembers.length > 0) {
    throw new ReferenceError(
      `${nullMembers.join(',')} are null or undefined. Please provide a value for ${nullMembers.join(',')}`)
  }
}

export {
  getNullMembers,
  throwErrorOnNull,
  containsNullMembers
}
