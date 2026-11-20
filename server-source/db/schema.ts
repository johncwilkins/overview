import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const projects = sqliteTable('projects', {id:text('id').primaryKey(),draft:text('draft').notNull(),published:text('published'),sortOrder:integer('sort_order').notNull().default(0),revision:integer('revision').notNull().default(1),updatedAt:text('updated_at').notNull()});
export const assets = sqliteTable('assets', {id:text('id').primaryKey(),projectId:text('project_id').notNull(),objectKey:text('object_key').notNull(),mime:text('mime').notNull(),size:integer('size').notNull(),name:text('name').notNull()});
export const settings = sqliteTable('settings',{key:text('key').primaryKey(),value:text('value').notNull()});
