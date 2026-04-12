import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ADD COLUMN "slug" varchar;
  ALTER TABLE "projects" ADD COLUMN "type" varchar;
  ALTER TABLE "projects" ADD COLUMN "year" varchar;
  ALTER TABLE "projects" ADD COLUMN "featured" boolean DEFAULT false;
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "projects_slug_idx";
  ALTER TABLE "projects" DROP COLUMN "slug";
  ALTER TABLE "projects" DROP COLUMN "type";
  ALTER TABLE "projects" DROP COLUMN "year";
  ALTER TABLE "projects" DROP COLUMN "featured";`)
}
