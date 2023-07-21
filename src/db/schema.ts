import { InferModel } from "drizzle-orm";
import { boolean, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users', {
  id: serial('id').primaryKey(),
  first_name: varchar('first_name', { length: 255 }).notNull(),
  last_name: varchar('last_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull()
});

export const todosTable = mysqlTable('todos', {
  id: serial('id').primaryKey(),
  content: varchar('content', { length: 256 }).notNull(),
  completed: boolean('completed').notNull().default(false),
});

export type Todo = InferModel<typeof todosTable>;

// New table

export const postsTable = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: varchar('content', { length: 256 }).notNull(),
});