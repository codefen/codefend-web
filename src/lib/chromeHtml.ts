import { readFileSync } from "fs";
import path from "path";
import { escapeHtml } from "./articles";

type ServiceItem = { name: string; slug: string };

let cachedServices: { es: ServiceItem[]; en: ServiceItem[] } | null = null;

function loadServices(): { es: ServiceItem[]; en: ServiceItem[] } {
  if (cachedServices) return cachedServices;
  const file = path.join(process.cwd(), "public", "data", "services.json");
  const raw = JSON.parse(readFileSync(file, "utf8")) as {
    es: ServiceItem[];
    en: ServiceItem[];
  };
  cachedServices = {
    es: raw.es.map((s) => ({ name: s.name, slug: s.slug })),
    en: raw.en.map((s) => ({ name: s.name, slug: s.slug })),
  };
  return cachedServices;
}

function mega(
  label: string,
  parentHref: string,
  isCurrent: boolean,
  items: { label: string; href: string }[],
  footerLabel?: string,
  footerHref?: string,
  megaClass = ""
): string {
  const list = items
    .map(
      (i) =>
        `<li><a href="${escapeHtml(i.href)}">${escapeHtml(i.label)}</a></li>`
    )
    .join("");
  const footer =
    footerLabel && footerHref
      ? `<a class="nav-mega-all" href="${escapeHtml(footerHref)}">${escapeHtml(footerLabel)} <span aria-hidden="true">↗</span></a>`
      : "";
  return `<div class="nav-item has-mega" role="listitem">
      <a class="nav-link-parent" href="${escapeHtml(parentHref)}"${isCurrent ? ' aria-current="page"' : ""} aria-expanded="false" aria-haspopup="true">${escapeHtml(label)} <span class="nav-chevron" aria-hidden="true"></span></a>
      <div class="nav-mega${megaClass ? ` ${megaClass}` : ""}" hidden>
        <div class="nav-mega-inner">
          <div class="nav-mega-col">
            <p class="nav-mega-heading">${escapeHtml(label)}</p>
            <ul class="nav-mega-list">${list}</ul>
            ${footer}
          </div>
        </div>
      </div>
    </div>`;
}

export function renderNav(
  locale: "es" | "en",
  current: "resources" | "services" | string,
  localeSwitchHref: string
): string {
  const es = locale === "es";
  const labels = es
    ? {
        services: "Servicios",
        platform: "Pentest platform",
        ai: "AI",
        industries: "Industrias",
        resources: "Resources",
        about: "Nosotros",
        acceso: "Acceso",
        menu: "Menú",
        close: "Cerrar menú",
        all_services: "Ver todos los servicios",
        ai_models: "Modelos",
        ai_cameras: "Cámaras",
      }
    : {
        services: "Services",
        platform: "Pentest platform",
        ai: "AI",
        industries: "Industries",
        resources: "Resources",
        about: "About",
        acceso: "Access",
        menu: "Menu",
        close: "Close menu",
        all_services: "View all services",
        ai_models: "Models",
        ai_cameras: "Cameras",
      };

  const services = loadServices()[locale].map((s) => ({
    label: s.name,
    href: `services/${s.slug}`,
  }));
  const aiItems = [
    { label: labels.ai_models, href: "models" },
    { label: labels.ai_cameras, href: "cameras" },
  ];
  const switchToEs = locale !== "es";
  const flagSvg = es
    ? `<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#AA151B"/><rect y="10" width="60" height="20" fill="#F1BF00"/></svg>`
    : `<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#012169"/><path d="M0,0 60,40 M60,0 0,40" stroke="#fff" stroke-width="8"/><path d="M0,0 60,40 M60,0 0,40" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v40 M0,20 h60" stroke="#fff" stroke-width="12"/><path d="M30,0 v40 M0,20 h60" stroke="#C8102E" stroke-width="6"/></svg>`;

  return `<nav class="site-nav wrap" aria-label="${es ? "Navegación principal" : "Main navigation"}">
      <a class="brand" href="index#inicio" aria-label="Codefend, ${es ? "inicio" : "home"}">
        <img class="brand-wordmark brand-wordmark--on-dark" src="/assets/brand/wordmark-on-dark.svg" width="168" height="27" alt="" decoding="async">
        <img class="brand-wordmark brand-wordmark--on-light" src="/assets/brand/wordmark-on-light.svg" width="168" height="27" alt="" decoding="async">
      </a>
      <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="nav-panel" aria-label="${escapeHtml(labels.menu)}">
        <span class="nav-toggle-bars" aria-hidden="true"><i></i><i></i><i></i></span>
      </button>
      <div id="nav-panel" class="nav-panel">
        <div class="nav-panel-top">
          <span class="nav-panel-brand">codefend</span>
          <button type="button" class="nav-panel-close" aria-label="${escapeHtml(labels.close)}">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </div>
        <div class="navlinks" role="list">
          ${mega(labels.services, "services", current === "services", services, labels.all_services, "services")}
          <a role="listitem" href="software"${current === "platform" ? ' aria-current="page"' : ""}>${escapeHtml(labels.platform)}</a>
          ${mega(labels.ai, "models", current === "ai", aiItems, undefined, undefined, "nav-mega--compact")}
          <a role="listitem" href="industries"${current === "industries" ? ' aria-current="page"' : ""}>${escapeHtml(labels.industries)}</a>
          <a role="listitem" href="articles"${current === "resources" ? ' aria-current="page"' : ""}>${escapeHtml(labels.resources)}</a>
          <a role="listitem" href="about"${current === "about" ? ' aria-current="page"' : ""}>${escapeHtml(labels.about)}</a>
          <a role="listitem" href="/user-panel/user/access">${escapeHtml(labels.acceso)}</a>
        </div>
      </div>
      <div class="nav-actions">
        <a class="flag-btn" href="${escapeHtml(localeSwitchHref)}" hreflang="${switchToEs ? "es" : "en"}" lang="${switchToEs ? "es" : "en"}" aria-label="${switchToEs ? "Español" : "English"}" title="${switchToEs ? "Español" : "English"}">
          ${flagSvg}
        </a>
        <button type="button" class="theme-cycle" id="theme-cycle" data-label-auto="${es ? "Sistema" : "System"}" data-label-light="${es ? "Claro" : "Light"}" data-label-dark="${es ? "Oscuro" : "Dark"}" title="${es ? "Sistema" : "System"}" aria-label="${es ? "Apariencia" : "Appearance"}: ${es ? "Sistema" : "System"}">
          <svg class="theme-cycle-ico" data-theme-ico="auto" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 3.8A8.2 8.2 0 0 1 12 20.2Z" fill="currentColor"/></svg>
          <svg class="theme-cycle-ico" data-theme-ico="light" viewBox="0 0 24 24" fill="none" aria-hidden="true" hidden><circle cx="12" cy="12" r="3.6" stroke="currentColor" stroke-width="1.7"/><path d="M12 2.8v2.2M12 19v2.2M2.8 12H5M19 12h2.2M5.1 5.1l1.6 1.6M17.3 17.3l1.6 1.6M18.9 5.1l-1.6 1.6M6.7 17.3l-1.6 1.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
          <svg class="theme-cycle-ico" data-theme-ico="dark" viewBox="0 0 24 24" fill="none" aria-hidden="true" hidden><path d="M20.2 14.2A7.8 7.8 0 0 1 9.8 3.8 6.6 6.6 0 1 0 20.2 14.2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </nav>
    <div class="nav-backdrop" hidden></div>`;
}

export function renderFooter(locale: "es" | "en"): string {
  const es = locale === "es";
  const mail = es ? "hola@codefend.com" : "hello@codefend.com";
  const labels = es
    ? {
        contact: "Contacto",
        talk: "Hablemos",
        services: "Servicios",
        all_services: "Ver todos los servicios",
        explore: "Explorar",
        platform: "Pentest platform",
        industries: "Industrias",
        resources: "Resources",
        about: "Nosotros",
        ai: "AI",
        models: "Modelos",
        cameras: "Cámaras",
        access: "Acceso",
        signin: "Acceso a la plataforma",
        how: "Cómo trabajamos",
      }
    : {
        contact: "Contact",
        talk: "Talk with us",
        services: "Services",
        all_services: "View all services",
        explore: "Explore",
        platform: "Pentest platform",
        industries: "Industries",
        resources: "Resources",
        about: "About",
        ai: "AI",
        models: "Models",
        cameras: "Cameras",
        access: "Access",
        signin: "Platform access",
        how: "How we work",
      };
  const services = loadServices()[locale]
    .map(
      (s) =>
        `<li><a href="services/${escapeHtml(s.slug)}">${escapeHtml(s.name)}</a></li>`
    )
    .join("");

  return `<footer id="contacto" class="site-footer">
    <div class="wrap">
      <div class="site-footer-grid">
        <div class="site-footer-col site-footer-contact">
          <p class="site-footer-heading">${escapeHtml(labels.contact)}</p>
          <ul class="site-footer-contact-list">
            <li><a href="mailto:${mail}"><span class="site-footer-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z" stroke="currentColor" stroke-width="1.7"/><path d="m5 8 7 5 7-5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>${escapeHtml(labels.talk)}</span></a></li>
            <li><a href="tel:+16509808600"><span class="site-footer-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M8.2 4.8c.4-.9 1.5-1.2 2.3-.7l1.6 1c.7.4.9 1.3.5 2l-.7 1.3c-.2.4-.2.9.1 1.2l2.9 2.9c.3.3.8.3 1.2.1l1.3-.7c.7-.4 1.6-.2 2 .5l1 1.6c.5.8.2 1.9-.7 2.3l-1.4.6c-1 .4-2.1.2-3-.4-2.1-1.4-4-3.3-5.4-5.4-.6-.9-.8-2-.4-3l.6-1.4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg></span><span>+1 (650) 980-8600</span></a></li>
            <li><a href="mailto:${mail}"><span class="site-footer-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 6.8h16v10.4H4V6.8Z" stroke="currentColor" stroke-width="1.7"/><path d="m5.2 7.6 6.8 5.2 6.8-5.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>${mail}</span></a></li>
          </ul>
        </div>
        <div class="site-footer-col site-footer-services">
          <p class="site-footer-heading">${escapeHtml(labels.services)}</p>
          <ul class="site-footer-list site-footer-services-list">${services}</ul>
          <a class="site-footer-all" href="services">${escapeHtml(labels.all_services)} <span aria-hidden="true">↗</span></a>
        </div>
        <div class="site-footer-col">
          <p class="site-footer-heading">${escapeHtml(labels.explore)}</p>
          <ul class="site-footer-list">
            <li><a href="software">${escapeHtml(labels.platform)}</a></li>
            <li><a href="industries">${escapeHtml(labels.industries)}</a></li>
            <li><a href="articles">${escapeHtml(labels.resources)}</a></li>
            <li><a href="about">${escapeHtml(labels.about)}</a></li>
            <li><a href="models">${escapeHtml(labels.models)}</a></li>
            <li><a href="cameras">${escapeHtml(labels.cameras)}</a></li>
            <li><a href="index#metodo">${escapeHtml(labels.how)}</a></li>
          </ul>
        </div>
        <div class="site-footer-col">
          <p class="site-footer-heading">${escapeHtml(labels.access)}</p>
          <ul class="site-footer-list">
            <li><a class="site-footer-access" href="/user-panel/user/access">${escapeHtml(labels.signin)} <span aria-hidden="true">↗</span></a></li>
            <li><a href="services">${escapeHtml(labels.services)}</a></li>
            <li><a href="software">${escapeHtml(labels.platform)}</a></li>
            <li><a href="models">${escapeHtml(labels.ai)}</a></li>
          </ul>
        </div>
      </div>
      <div class="site-footer-bottom">
        <a class="brand footer-brand" href="index#inicio" aria-label="Codefend">
          <img class="brand-wordmark brand-wordmark--on-dark" src="/assets/brand/wordmark-on-dark.svg" width="168" height="27" alt="Codefend" decoding="async">
          <img class="brand-wordmark brand-wordmark--on-light" src="/assets/brand/wordmark-on-light.svg" width="168" height="27" alt="" decoding="async">
        </a>
        <span>© 2026 Codefend.</span>
      </div>
    </div>
  </footer>`;
}
