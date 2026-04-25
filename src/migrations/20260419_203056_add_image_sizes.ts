import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload: _payload, req: _req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_project_card_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_project_card_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_project_card_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_project_card_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_project_card_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_project_card_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_journal_hero_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_journal_hero_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_journal_hero_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_journal_hero_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_journal_hero_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_journal_hero_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_case_study_detail_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_case_study_detail_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_case_study_detail_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_case_study_detail_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_case_study_detail_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_case_study_detail_filename" varchar;
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_project_card_sizes_project_card_filename_idx" ON "media" USING btree ("sizes_project_card_filename");
  CREATE INDEX "media_sizes_journal_hero_sizes_journal_hero_filename_idx" ON "media" USING btree ("sizes_journal_hero_filename");
  CREATE INDEX "media_sizes_case_study_detail_sizes_case_study_detail_fi_idx" ON "media" USING btree ("sizes_case_study_detail_filename");`)
}

export async function down({ db, payload: _payload, req: _req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx";
  DROP INDEX "media_sizes_project_card_sizes_project_card_filename_idx";
  DROP INDEX "media_sizes_journal_hero_sizes_journal_hero_filename_idx";
  DROP INDEX "media_sizes_case_study_detail_sizes_case_study_detail_fi_idx";
  ALTER TABLE "media" DROP COLUMN "sizes_thumbnail_url";
  ALTER TABLE "media" DROP COLUMN "sizes_thumbnail_width";
  ALTER TABLE "media" DROP COLUMN "sizes_thumbnail_height";
  ALTER TABLE "media" DROP COLUMN "sizes_thumbnail_mime_type";
  ALTER TABLE "media" DROP COLUMN "sizes_thumbnail_filesize";
  ALTER TABLE "media" DROP COLUMN "sizes_thumbnail_filename";
  ALTER TABLE "media" DROP COLUMN "sizes_project_card_url";
  ALTER TABLE "media" DROP COLUMN "sizes_project_card_width";
  ALTER TABLE "media" DROP COLUMN "sizes_project_card_height";
  ALTER TABLE "media" DROP COLUMN "sizes_project_card_mime_type";
  ALTER TABLE "media" DROP COLUMN "sizes_project_card_filesize";
  ALTER TABLE "media" DROP COLUMN "sizes_project_card_filename";
  ALTER TABLE "media" DROP COLUMN "sizes_journal_hero_url";
  ALTER TABLE "media" DROP COLUMN "sizes_journal_hero_width";
  ALTER TABLE "media" DROP COLUMN "sizes_journal_hero_height";
  ALTER TABLE "media" DROP COLUMN "sizes_journal_hero_mime_type";
  ALTER TABLE "media" DROP COLUMN "sizes_journal_hero_filesize";
  ALTER TABLE "media" DROP COLUMN "sizes_journal_hero_filename";
  ALTER TABLE "media" DROP COLUMN "sizes_case_study_detail_url";
  ALTER TABLE "media" DROP COLUMN "sizes_case_study_detail_width";
  ALTER TABLE "media" DROP COLUMN "sizes_case_study_detail_height";
  ALTER TABLE "media" DROP COLUMN "sizes_case_study_detail_mime_type";
  ALTER TABLE "media" DROP COLUMN "sizes_case_study_detail_filesize";
  ALTER TABLE "media" DROP COLUMN "sizes_case_study_detail_filename";`)
}
