export default (x: number, y: number, epsilon: number = 1.1e-13): boolean => {
  if (x === y) {
    return true
  }

  if (isNaN(x) || isNaN(y)) {
    return false
  }

  if (isFinite(x) && isFinite(y)) {
    const diff = Math.abs(x - y)
    if (diff < Number.EPSILON) {
      return true
    } else {
      return diff <= Math.max(Math.abs(x), Math.abs(y)) * epsilon
    }
  }

  return false
}
