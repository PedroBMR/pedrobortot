import { ui, defaultLocale, type Locale } from "./ui";

export type { Locale };

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "en") return "en";
  return defaultLocale;
}

export function useTranslations(lang: Locale) {
  return function t<K extends keyof (typeof ui)[typeof defaultLocale]>(
    section: K
  ): (typeof ui)[typeof defaultLocale][K] {
    return ui[lang][section] ?? ui[defaultLocale][section];
  };
}

export function localizedPath(path: string, lang: Locale): string {
  if (lang === defaultLocale) return path;
  return `/${lang}${path}`;
}
