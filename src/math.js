const sum = (a, b) => a + b
const sumAsync = (a, b) => Promise.resolve(a + b)

const subtract = (a, b) => {
  if (a < b) throw new Error('Minuend cannot be smaller than subtrahend')
  return a - b
}
const subtractAsync = (a, b) => Promise.resolve(a - b)

module.exports = {
  sum,
  sumAsync,
  subtract,
  subtractAsync
}
