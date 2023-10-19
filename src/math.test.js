const { subtract, subtractAsync, sum, sumAsync } = require("./math")

it('should sum two numbers', () => {
  const result = sum(1, 2)
  expect(result).toBe(3)
})

it('should throw if minuend is smaller', () => {
  expect(() => subtract(1, 2)).toThrow()
})

it('should subtract two numbers', () => {
  const result = subtract(5, 1)
  expect(result).toBe(4)
})

it('should sum two numbers asynchronously', async () => {
  const result = await sumAsync(5, 2)
  expect(result).toBe(7)
})

it('should subtract two numbers asynchronously', async () => {
  const result = await subtractAsync(10, 4)
  expect(result).toBe(6)
})

