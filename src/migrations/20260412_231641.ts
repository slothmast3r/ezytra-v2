import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_posts_status" AS ENUM('published', 'coming-soon', 'draft');
  ALTER TABLE "posts" ADD COLUMN "status" "enum_posts_status" DEFAULT 'published' NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" DROP COLUMN "status";
  DROP TYPE "public"."enum_posts_status";`)
}
