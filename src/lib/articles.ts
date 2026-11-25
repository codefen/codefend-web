import type { ArticleRow } from "./db";

const CATEGORY: Record<string, Record<string, string>> = {
  es: { disclosure: "Divulgación", guide: "Guía", research: "Investigación" },
  en: { disclosure: "Disclosure", guide: "Guide", research: "Research" },
};

const MONTHS_ES = [
  "",
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

export function categoryLabel(category: string, locale: string): string {
  return CATEGORY[locale]?.[category] ?? category;
}

export function formatDate(
  datetime: Date | string | null | undefined,
  locale: string
): string {
  if (!datetime) return "";
  const d = datetime instanceof Date ? datetime : new Date(datetime);
  if (Number.isNaN(d.getTime())) return "";
  if (locale === "es") {
    return `${d.getUTCDate()} ${MONTHS_ES[d.getUTCMonth() + 1]} ${d.getUTCFullYear()}`;
  }
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function readingTime(html: string, locale: string): string {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = Math.max(1, text.split(/\s+/).filter(Boolean).length);
  const minutes = Math.max(1, Math.ceil(words / 200));
  return locale === "es" ? `${minutes} min de lectura` : `${minutes} min read`;
}

export function siteUrl(path = ""): string {
  const base = (process.env.SITE_URL || "https://codefend.com").replace(/\/$/, "");
  if (!path) return base;
  return `${base}/${path.replace(/^\//, "")}`;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function articleSeoTags(
  article: ArticleRow,
  locale: "es" | "en",
  otherSlug: string | null
): string {
  const title = article.seo_title || article.title;
  const desc = (article.seo_description || article.excerpt || "").slice(0, 300);
  const canonical = siteUrl(`${locale}/article/${encodeURIComponent(article.slug)}`);
  const otherLocale = locale === "es" ? "en" : "es";
  let ogImage = "";
  if (article.og_path) {
    ogImage = siteUrl(`uploads/media/${article.og_path}`);
  } else if (article.featured_path && article.featured_kind === "image") {
    ogImage = siteUrl(`uploads/media/${article.featured_path}`);
  }

  const tags: string[] = [
    `<title>${escapeHtml(title)} — Codefend</title>`,
    `<meta name="description" content="${escapeHtml(desc)}">`,
    `<link rel="canonical" href="${escapeHtml(canonical)}">`,
    `<link rel="alternate" hreflang="${locale}" href="${escapeHtml(canonical)}">`,
  ];

  if (otherSlug) {
    const otherUrl = siteUrl(`${otherLocale}/article/${encodeURIComponent(otherSlug)}`);
    tags.push(
      `<link rel="alternate" hreflang="${otherLocale}" href="${escapeHtml(otherUrl)}">`
    );
    const xDefaultSlug = locale === "es" ? article.slug : otherSlug;
    tags.push(
      `<link rel="alternate" hreflang="x-default" href="${escapeHtml(siteUrl(`es/article/${encodeURIComponent(xDefaultSlug)}`))}">`
    );
  }

  tags.push(`<meta property="og:type" content="article">`);
  tags.push(`<meta property="og:site_name" content="Codefend">`);
  tags.push(
    `<meta property="og:locale" content="${locale === "es" ? "es_AR" : "en_US"}">`
  );
  tags.push(`<meta property="og:title" content="${escapeHtml(title)}">`);
  tags.push(`<meta property="og:description" content="${escapeHtml(desc)}">`);
  tags.push(`<meta property="og:url" content="${escapeHtml(canonical)}">`);
  if (ogImage) {
    tags.push(`<meta property="og:image" content="${escapeHtml(ogImage)}">`);
    tags.push(`<meta name="twitter:card" content="summary_large_image">`);
    tags.push(`<meta name="twitter:image" content="${escapeHtml(ogImage)}">`);
  } else {
    tags.push(`<meta name="twitter:card" content="summary">`);
  }
  tags.push(`<meta name="twitter:title" content="${escapeHtml(title)}">`);
  tags.push(
    `<meta name="twitter:description" content="${escapeHtml(desc.slice(0, 200))}">`
  );

  if (article.published_at) {
    const iso = new Date(article.published_at).toISOString();
    tags.push(`<meta property="article:published_time" content="${escapeHtml(iso)}">`);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: desc,
    inLanguage: locale,
    mainEntityOfPage: canonical,
    datePublished: article.published_at
      ? new Date(article.published_at).toISOString()
      : null,
    author: {
      "@type": "Person",
      name: article.author_name || "Codefend",
    },
    publisher: {
      "@type": "Organization",
      name: "Codefend",
      url: siteUrl(""),
    },
    ...(ogImage ? { image: [ogImage] } : {}),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Codefend",
        item: siteUrl(`${locale}/index`),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "es" ? "Artículos" : "Articles",
        item: siteUrl(`${locale}/articles`),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonical,
      },
    ],
  };

  tags.push(
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  );
  tags.push(
    `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>`
  );

  return tags.join("\n  ");
}
