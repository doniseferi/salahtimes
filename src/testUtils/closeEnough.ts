export default (x: number, y: number, epsilon: number = 1e-2): boolean => {
  if (x === y) {
    return true
  }

  if (isNaN(x) || isNaN(y)) {
    return false
  }

  if (isFinite(x) && isFinite(y)) {
    const diff = Math.abs(x - y)
    if (diff < epsilon) {
      return true
    } else {
      return diff <= Math.max(Math.abs(x), Math.abs(y)) * epsilon
    }
  }
  return false
}
