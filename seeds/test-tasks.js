/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'learn database' },
    { id: 2, task: 'complete exercise' },
    { id: 3, task: 'do lightning talk' },
  ])
}
