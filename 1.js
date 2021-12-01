const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

const isPalindrom = function(text) {
  for (let i = 0; i < Math.trunc(text.length / 2); i++) {
    let j = text.length - 1 - i
    if (text[i] !== text[j]) {
      return false
    }
  }
  return true
}

rl.question('', function(text) {
  console.log(isPalindrom(text))
  rl.close()
})
