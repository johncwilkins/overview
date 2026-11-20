CREATE TABLE `assets` (
	`id` text PRIMARY KEY NOT NULL,
	`project_id` text NOT NULL,
	`object_key` text NOT NULL,
	`mime` text NOT NULL,
	`size` integer NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`draft` text NOT NULL,
	`published` text,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`revision` integer DEFAULT 1 NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);
