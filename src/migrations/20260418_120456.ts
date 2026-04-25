import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload: _payload, req: _req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  -- Drop existing tables to ensure clean recreation with new schema
  DROP TABLE IF EXISTS "projects_blocks_overview" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_challenge_constraints" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_challenge" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_process_steps" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_process" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_results_stats" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_results" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_text_section" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_image_block" CASCADE;
  DROP TABLE IF EXISTS "authors" CASCADE;

  CREATE TYPE "public"."enum_projects_blocks_image_block_size" AS ENUM('small', 'large', 'full');
  
  CREATE TABLE "projects_blocks_overview" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"brief" jsonb NOT NULL,
  	"my_role" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_challenge_constraints" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "projects_blocks_challenge" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL
  );
  
  CREATE TABLE "projects_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_results_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "projects_blocks_results" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_text_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar,
  	"size" "enum_projects_blocks_image_block_size" DEFAULT 'large',
  	"block_name" varchar
  );
  
  CREATE TABLE "authors" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"bio" varchar,
  	"photo_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  -- Handle existing data migration/conflicts
  DROP INDEX IF EXISTS "projects_slug_idx";
  ALTER TABLE "projects" ALTER COLUMN "slug" SET NOT NULL;
  
  -- Use conditional add column pattern if they might exist
  DO $$ 
  BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='projects' AND column_name='has_case_study') THEN
      ALTER TABLE "projects" ADD COLUMN "has_case_study" boolean DEFAULT true;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='projects' AND column_name='meta_title') THEN
      ALTER TABLE "projects" ADD COLUMN "meta_title" varchar;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='projects' AND column_name='meta_description') THEN
      ALTER TABLE "projects" ADD COLUMN "meta_description" varchar;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='posts' AND column_name='author_id') THEN
      ALTER TABLE "posts" ADD COLUMN "author_id" integer;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='posts' AND column_name='meta_title') THEN
      ALTER TABLE "posts" ADD COLUMN "meta_title" varchar;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='posts' AND column_name='meta_description') THEN
      ALTER TABLE "posts" ADD COLUMN "meta_description" varchar;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='payload_locked_documents_rels' AND column_name='authors_id') THEN
      ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "authors_id" integer;
    END IF;
  END $$;

  ALTER TABLE "projects_blocks_overview" ADD CONSTRAINT "projects_blocks_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_challenge_constraints" ADD CONSTRAINT "projects_blocks_challenge_constraints_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_challenge"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_challenge" ADD CONSTRAINT "projects_blocks_challenge_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_process_steps" ADD CONSTRAINT "projects_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_process" ADD CONSTRAINT "projects_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_results_stats" ADD CONSTRAINT "projects_blocks_results_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_results"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_results" ADD CONSTRAINT "projects_blocks_results_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_text_section" ADD CONSTRAINT "projects_blocks_text_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_image_block" ADD CONSTRAINT "projects_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_blocks_image_block" ADD CONSTRAINT "projects_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "authors" ADD CONSTRAINT "authors_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  
  CREATE INDEX IF NOT EXISTS "projects_blocks_overview_order_idx" ON "projects_blocks_overview" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_blocks_overview_parent_id_idx" ON "projects_blocks_overview" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_blocks_overview_path_idx" ON "projects_blocks_overview" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "projects_blocks_challenge_constraints_order_idx" ON "projects_blocks_challenge_constraints" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_blocks_challenge_constraints_parent_id_idx" ON "projects_blocks_challenge_constraints" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_blocks_challenge_order_idx" ON "projects_blocks_challenge" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_blocks_challenge_parent_id_idx" ON "projects_blocks_challenge" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_blocks_challenge_path_idx" ON "projects_blocks_challenge" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "projects_blocks_process_steps_order_idx" ON "projects_blocks_process_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_blocks_process_steps_parent_id_idx" ON "projects_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_blocks_process_order_idx" ON "projects_blocks_process" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_blocks_process_parent_id_idx" ON "projects_blocks_process" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_blocks_process_path_idx" ON "projects_blocks_process" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "projects_blocks_results_stats_order_idx" ON "projects_blocks_results_stats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_blocks_results_stats_parent_id_idx" ON "projects_blocks_results_stats" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_blocks_results_order_idx" ON "projects_blocks_results" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_blocks_results_parent_id_idx" ON "projects_blocks_results" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_blocks_results_path_idx" ON "projects_blocks_results" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "projects_blocks_text_section_order_idx" ON "projects_blocks_text_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_blocks_text_section_parent_id_idx" ON "projects_blocks_text_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_blocks_text_section_path_idx" ON "projects_blocks_text_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "projects_blocks_image_block_order_idx" ON "projects_blocks_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_blocks_image_block_parent_id_idx" ON "projects_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_blocks_image_block_path_idx" ON "projects_blocks_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "projects_blocks_image_block_image_idx" ON "projects_blocks_image_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "authors_photo_idx" ON "authors" USING btree ("photo_id");
  CREATE INDEX IF NOT EXISTS "authors_updated_at_idx" ON "authors" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "authors_created_at_idx" ON "authors" USING btree ("created_at");
  
  -- Handle posts table columns safely
  DO $$ 
  BEGIN 
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='posts' AND column_name='author_id') THEN
      ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_authors_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."authors"("id") ON DELETE set null ON UPDATE no action;
    END IF;
  END $$;

  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  
  CREATE INDEX IF NOT EXISTS "posts_author_idx" ON "posts" USING btree ("author_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_authors_id_idx" ON "payload_locked_documents_rels" USING btree ("authors_id");
  
  -- Final cleanup
  ALTER TABLE "posts" DROP COLUMN IF EXISTS "date";
  ALTER TABLE "posts" DROP COLUMN IF EXISTS "author_name";
  ALTER TABLE "posts" DROP COLUMN IF EXISTS "author_role";
  ALTER TABLE "posts" DROP COLUMN IF EXISTS "author_bio";`)
}

export async function down({ db, payload: _payload, req: _req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE IF EXISTS "projects_blocks_overview" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_challenge_constraints" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_challenge" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_process_steps" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_process" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_results_stats" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_results" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_text_section" CASCADE;
  DROP TABLE IF EXISTS "projects_blocks_image_block" CASCADE;
  DROP TABLE IF EXISTS "authors" CASCADE;
  DROP TYPE IF EXISTS "public"."enum_projects_blocks_image_block_size";
  `)
}
