import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { Users } from "./collections/Users.ts";
import { Media } from "./collections/Media.ts";
import { Cases } from "./collections/Cases.ts";
import { Posts } from "./collections/Posts.ts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const databaseUri = process.env.DATABASE_URI || "file:./payload.db";

// 운영(Forge/Vultr)은 Postgres, 로컬 개발은 SQLite 파일로 동작
const db = databaseUri.startsWith("postgres")
  ? postgresAdapter({ pool: { connectionString: databaseUri } })
  : sqliteAdapter({ client: { url: databaseUri } });

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
  },
  collections: [Users, Media, Cases, Posts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "dev-only-secret-change-me",
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  db,
  sharp,
});
