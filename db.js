import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex.default(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export function close() {
  db.destroy()
}

export function deleteTodo(id) {
  return db('todos').where('id', id).del()
}

export function addTodo(todo) {
  return db('todos').insert(todo)
}
export function updateTodo(id, updateTask) {
  return db('todos').where('id', id).update(updateTask)
}
export function searchTask(task) {
  return db('todos').where('task', task).search(searchTask)
}
