import type { ArticleRow } from "./db";
import {
  articleSeoTags,
  categoryLabel,
  escapeHtml,
  formatDate,
  readingTime,
} from "./articles";
import { renderFooter, renderNav } from "./chromeHtml";

const PAGE_CSS = `
:root{color-scheme:dark;--bg:#17191b;--panel:#1d2022;--panel-soft:#222628;--line:#34393a;--muted:#9aa19f;--text:#f1f3ef;--lime:#72d7f5;--lime-dark:#152c35;--max:1180px;font-family:"Urbanist",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column}
a{color:inherit;text-decoration:none}.wrap{width:min(var(--max),calc(100% - 48px));margin-inline:auto}
.topline{height:3px;background:linear-gradient(90deg,var(--lime),#458db4 48%,transparent)}
header{border-bottom:1px solid rgba(255,255,255,.08)}
main{flex:1}.eyebrow{display:inline-flex;align-items:center;gap:9px;color:var(--lime);text-transform:uppercase;letter-spacing:1.7px;font-size:10px;font-weight:750}
.eyebrow:before{content:"";width:22px;height:1px;background:var(--lime)}
.article-read{padding:48px 0 88px}
.article-back{display:inline-flex;margin-bottom:22px;color:var(--lime);font-size:13px;font-weight:700}
.article-back:focus-visible{outline:2px solid var(--lime);outline-offset:3px}
.article-read-header h1{margin:18px 0 14px;font-size:clamp(34px,4.6vw,52px);line-height:1.08;letter-spacing:-2px;font-weight:620;max-width:820px}
.article-read-meta{display:flex;flex-wrap:wrap;gap:10px 18px;color:var(--muted);font-size:13px;margin-bottom:28px}
.article-media{margin:28px 0;padding:0;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--panel)}
.article-media img,.article-media video{display:block;width:100%;height:auto}
.article-read-body{max-width:760px;font-size:16px;line-height:1.75}
.article-read-body h2{margin:34px 0 12px;font-size:28px;letter-spacing:-.8px}
.article-read-body p,.article-read-body ul{margin:0 0 16px;color:var(--muted)}
.article-read-body ul{padding-left:20px}
.article-read-body a{color:var(--lime)}
:root[data-resolved-theme="light"]{--bg:#f4f8f9;--panel:#fff;--panel-soft:#eef3f5;--line:#d7e1e4;--muted:#5f6e75;--text:#1a2428;--lime:#096a8a;--lime-dark:#d7eef5}
`;

export function renderArticlePage(opts: {
  locale: "es" | "en";
  article: ArticleRow;
  otherSlug: string | null;
}): string {
  const { locale, article, otherSlug } = opts;
  const otherLocale = locale === "es" ? "en" : "es";
  const localeSwitchHref = otherSlug
    ? `../${otherLocale}/article/${encodeURIComponent(otherSlug)}`
    : `../${otherLocale}/articles`;
  const cat = categoryLabel(article.category, locale);
  const dateLabel = formatDate(article.published_at, locale);
  const readLabel = readingTime(article.body_html, locale);
  const backLabel = locale === "es" ? "Volver a artículos" : "Back to articles";
  const seo = articleSeoTags(article, locale, otherSlug);
  const featured =
    article.featured_path && article.featured_kind === "image"
      ? `<figure class="article-media" style="max-width:760px;margin:0 auto 28px"><img src="/uploads/media/${escapeHtml(article.featured_path)}" alt="${escapeHtml(article.title)}" loading="eager"></figure>`
      : "";
  const author = article.author_name
    ? `<span>${escapeHtml(article.author_name)}</span>`
    : "";
  const time = dateLabel
    ? `<time datetime="${escapeHtml(String(article.published_at))}">${escapeHtml(dateLabel)}</time>`
    : "";

  return `<!doctype html>
<html lang="${locale}" data-theme="auto" data-resolved-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#17191b" />
  <base href="/${locale}/" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  ${seo}
  <link rel="stylesheet" href="/assets/site-chrome.css" />
  <style>${PAGE_CSS}</style>
</head>
<body>
  <div class="topline"></div>
  <header>
    ${renderNav(locale, "resources", localeSwitchHref)}
  </header>
  <main id="contenido">
    <article class="article-read">
      <div class="wrap">
        <a class="article-back" href="articles">← ${escapeHtml(backLabel)}</a>
        <header class="article-read-header">
          <div class="eyebrow">${escapeHtml(cat)}</div>
          <h1>${escapeHtml(article.title)}</h1>
          <div class="article-read-meta">
            ${time}
            <span>${escapeHtml(readLabel)}</span>
            ${author}
          </div>
        </header>
        ${featured}
        <div class="article-read-body">
          ${article.body_html}
        </div>
      </div>
    </article>
  </main>
  ${renderFooter(locale)}
  <script src="/assets/site-theme.js" defer></script>
</body>
</html>`;
}
