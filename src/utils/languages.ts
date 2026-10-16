import { site } from '@config/site';

/** Resolve the equivalent translated page, falling back to the language homepage. */
export function languageHref(pathname: string, language: string): string {
  const relative = pathname.slice(site.base.length);
  const page = relative.replace(/^\/ja(?=\/|$)/, '') || '/';
  const translated =
    ['/', '/news/', '/publications/', '/presentations/', '/cv/'].includes(page) ||
    /^\/publications\/[^/]+\/$/.test(page);
  const home = site.languages.options.find((option) => option.code === language)?.href ?? '/';
  return `${site.base}${home}${translated ? page.slice(1) : ''}`;
}
