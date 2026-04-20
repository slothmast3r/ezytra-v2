import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_status" AS ENUM('live', 'dev', 'completed', 'archived');
  ALTER TABLE "projects" ADD COLUMN "status" "enum_projects_status" DEFAULT 'live';
  ALTER TABLE "projects" DROP COLUMN "live";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ADD COLUMN "live" varchar;
  ALTER TABLE "projects" DROP COLUMN "status";
  DROP TYPE "public"."enum_projects_status";`)
}
