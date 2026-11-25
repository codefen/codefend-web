import mysql, { Pool, RowDataPacket } from "mysql2/promise";

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DATABASE_HOST || "127.0.0.1",
      port: Number(process.env.DATABASE_PORT || 3306),
      user: process.env.DATABASE_USER || "codefend_web",
      password: process.env.DATABASE_PASSWORD || "",
      database: process.env.DATABASE_NAME || "codefend_web",
      waitForConnections: true,
      connectionLimit: 5,
      namedPlaceholders: true,
    });
  }
  return pool;
}

export type ArticleRow = RowDataPacket & {
  id: number;
  translation_group_id: string;
  locale: "es" | "en";
  slug: string;
  title: string;
  excerpt: string;
  body_html: string;
  category: string;
  status: string;
  is_featured: number;
  seo_title: string | null;
  seo_description: string | null;
  published_at: Date | string | null;
  featured_path?: string | null;
  featured_kind?: string | null;
  og_path?: string | null;
  author_name?: string | null;
};

export async function articlesPublished(locale: string): Promise<ArticleRow[]> {
  const [rows] = await getPool().query<ArticleRow[]>(
    `SELECT a.*,
            m.storage_path AS featured_path,
            m.kind AS featured_kind,
            og.storage_path AS og_path,
            u.name AS author_name
     FROM articles a
     LEFT JOIN media m ON m.id = a.featured_media_id
     LEFT JOIN media og ON og.id = a.og_image_media_id
     LEFT JOIN admin_users u ON u.id = a.author_id
     WHERE a.status = 'published' AND a.locale = :locale
     ORDER BY a.is_featured DESC, a.published_at DESC, a.id DESC`,
    { locale }
  );
  return rows;
}

export async function articleBySlug(
  locale: string,
  slug: string
): Promise<ArticleRow | null> {
  const [rows] = await getPool().query<ArticleRow[]>(
    `SELECT a.*,
            m.storage_path AS featured_path,
            m.kind AS featured_kind,
            og.storage_path AS og_path,
            u.name AS author_name
     FROM articles a
     LEFT JOIN media m ON m.id = a.featured_media_id
     LEFT JOIN media og ON og.id = a.og_image_media_id
     LEFT JOIN admin_users u ON u.id = a.author_id
     WHERE a.status = 'published' AND a.locale = :locale AND a.slug = :slug
     LIMIT 1`,
    { locale, slug }
  );
  return rows[0] ?? null;
}

export async function articleTranslationSlug(
  groupId: string,
  locale: string
): Promise<string | null> {
  const [rows] = await getPool().query<RowDataPacket[]>(
    `SELECT slug FROM articles
     WHERE translation_group_id = :groupId AND locale = :locale AND status = 'published'
     LIMIT 1`,
    { groupId, locale }
  );
  return (rows[0]?.slug as string) ?? null;
}
