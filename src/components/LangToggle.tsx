import { useLayoutEffect, useRef, useState } from 'react';
import { useLang } from '../LangProvider';
import { LANGS } from '../i18n';

export default function LangToggle() {
  const { lang, setLang } = useLang();
  const btns = useRef<(HTMLButtonElement | null)[]>([]);
  const [thumb, setThumb] = useState({ x: 0, w: 0 });

  const active = LANGS.findIndex((l) => l.code === lang);

  useLayoutEffect(() => {
    const move = () => {
      const el = btns.current[active];
      if (el) setThumb({ x: el.offsetLeft, w: el.offsetWidth });
    };
    move();
    window.addEventListener('resize', move);
    // labels are CJK/Latin — reposition once web fonts settle so widths are right
    document.fonts?.ready.then(move).catch(() => {});
    return () => window.removeEventListener('resize', move);
  }, [active]);

  return (
    <div className="lang" role="group" aria-label="Language">
      <span
        className="lang-thumb"
        aria-hidden="true"
        style={{ transform: `translateX(${thumb.x}px)`, width: thumb.w, opacity: thumb.w ? 1 : 0 }}
      />
      {LANGS.map((l, i) => (
        <button
          key={l.code}
          ref={(el) => {
            btns.current[i] = el;
          }}
          className={lang === l.code ? 'active' : ''}
          aria-pressed={lang === l.code}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
