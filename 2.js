const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

const minSplit = function(amount) {
  const coins = [50, 20, 10, 5, 1]
  let split = 0
  for (const coin of coins) {
    let n = Math.trunc(amount / coin)
    amount -= n * coin
    split += n
  }
  return split
}

rl.question('', function(amount) {
  console.log(minSplit(amount))
  rl.close()
})
