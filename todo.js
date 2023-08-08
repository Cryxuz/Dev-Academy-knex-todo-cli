#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
console.log(userInputs)
switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'del':
    await commands.del(userInputs[3])
    console.log('delete')
    break
  case 'add':
    await commands.add(userInputs[3])
    break
  case 'update':
    await commands.update(userInputs[3], userInputs[4])
    break
  case 'search':
    await commands.search(userInputs[3])
    break
  case 'changeStatus':
    await commands.changeStatus(userInputs[3], userInputs[4])
    break
  case 'completed':
    await commands.filterByStatus('completed')
    break
  case 'uncomplete':
    await commands.filterByStatus('uncomplete')
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
