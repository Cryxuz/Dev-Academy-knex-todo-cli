import db from './db.js'
import { test, expect } from 'vitest'

test('test correct length', async () => {
  const todos = await db.getTodos()
  console.log(todos)
  expect(todos).toHaveLength(3)
})

// IM GETTING AN ERROR =(
