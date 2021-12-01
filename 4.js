const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

const isProperly = function(sequence) {
  let opens = 0
  for (const ch of sequence) {
    if (ch === '(') {
      opens++
    } else {
      if (opens > 0) {
        opens--
      } else {
        return false
      }
    }
  }
  return opens === 0
}

rl.question('', function(sequence) {
  console.log(isProperly(sequence))
  rl.close()
})
