import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { COPY, type Lang } from './i18n';

const SUPPORTED: Lang[] = ['ko', 'en', 'ja'];
const STORAGE_KEY = 'pokopet-lang';

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {
    /* localStorage unavailable */
  }
  const nav = (navigator.language || '').toLowerCase();
  if (nav.startsWith('ko')) return 'ko';
  if (nav.startsWith('ja')) return 'ja';
  return 'en';
}

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang);

  useEffect(() => {
    const c = COPY[lang];
    const title = `pokoPet — ${c.tagline}`;
    document.documentElement.lang = lang;
    document.title = title;

    // Localize the meta/OG tags for the browser experience. (Link-preview
    // crawlers read the static HTML without running JS, so they'll still see
    // the default-language tags — true per-language previews need SSR.)
    const setMeta = (selector: string, content: string) => {
      document.querySelector(selector)?.setAttribute('content', content);
    };
    setMeta('meta[name="description"]', c.intro.lead);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', c.intro.lead);

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within a LangProvider');
  return ctx;
}

/** Current-language copy. */
export function useCopy() {
  return COPY[useLang().lang];
}
