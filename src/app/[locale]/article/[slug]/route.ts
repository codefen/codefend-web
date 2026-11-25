import { NextResponse } from "next/server";
import { articleBySlug, articleTranslationSlug } from "@/lib/db";
import { renderArticlePage } from "@/lib/renderArticlePage";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Params = { locale: string; slug: string };

export async function GET(
  _req: Request,
  ctx: { params: Promise<Params> }
): Promise<Response> {
  const { locale: rawLocale, slug } = await ctx.params;
  const locale = rawLocale === "es" || rawLocale === "en" ? rawLocale : null;
  if (!locale || !slug) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const article = await articleBySlug(locale, decodeURIComponent(slug));
    if (!article) {
      return new NextResponse(
        locale === "es" ? "Artículo no encontrado." : "Article not found.",
        { status: 404 }
      );
    }
    const otherLocale = locale === "es" ? "en" : "es";
    const otherSlug = await articleTranslationSlug(
      article.translation_group_id,
      otherLocale
    );
    const html = renderArticlePage({ locale, article, otherSlug });
    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Language": locale,
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (err) {
    console.error("[article]", err);
    return new NextResponse(
      locale === "es"
        ? "Base de artículos no disponible."
        : "Articles database unavailable.",
      { status: 503 }
    );
  }
}
