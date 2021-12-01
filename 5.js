const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

const countVariants = function(stearsCount) {
  if (stearsCount == 1) return 1
  if (stearsCount == 2) return 2
  const count1 = countVariants(stearsCount - 1)
  const count2 = countVariants(stearsCount - 2)
  return count1 + count2
}

rl.question('', function(stearsCount) {
  console.log(countVariants(stearsCount))
  rl.close()
})
