const array = [-1, -7, 5, 0, 7, 1, 2, 3, 4] // input

const notContains = function(array) {
  const positives = array.filter(e => e > 0)
  const sortedPositives = positives.sort()
  let result = 1
  for (const x of sortedPositives) {
    if (x !== result) {
      break
    }
    result++
  }
  return result
}

const result = notContains(array)
console.log(result)
