import {
  getTodos,
  close,
  deleteTodo,
  addTodo,
  updateTodo,
  searchTask,
} from './db.js'

export async function list() {
  try {
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function del(id) {
  try {
    await deleteTodo(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function add(something) {
  try {
    await addTodo({ task: something })
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function update(id, updateTask) {
  try {
    await updateTodo(id, { task: updateTask })
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

// I had to use AI to get the solution for search

export async function search(searchTask) {
  try {
    const todos = await getTodos()
    const filteredTodos = todos.filter((todo) => {
      return todo.task.includes(searchTask)
    })
    printTodos(filteredTodos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
