import { useEffect, useRef, useState } from 'react';
import { asset } from '../i18n';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * A muted, looping clip that plays while it's on screen — so we never download
 * or decode video the visitor can't see (kind to mobile data/battery).
 *
 * Mobile autoplay is fussy: iOS only allows it when the element is *actually*
 * muted + playsinline, and refuses entirely in Low Power Mode. React's `muted`
 * prop doesn't always stick, so we force the property on the DOM node, and if
 * play() is still rejected we reveal a tap-to-play button as a fallback.
 */
export function AutoVideo({
  src,
  poster,
  alt,
  className = '',
}: {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true; // iOS checks the muted *property*, not just the attribute
    if (prefersReducedMotion()) return;

    const tryPlay = () => {
      el.preload = 'auto';
      el.muted = true;
      const p = el.play();
      if (p)
        p.then(() => setNeedsTap(false)).catch(() => setNeedsTap(true));
    };
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? tryPlay() : el.pause()),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onTap = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    el.play().then(() => setNeedsTap(false)).catch(() => {});
  };

  return (
    <>
      <video
        ref={ref}
        className={className}
        poster={asset(poster)}
        src={asset(src)}
        muted
        loop
        playsInline
        preload="none"
        aria-label={alt}
      />
      {needsTap && (
        <button className="tap-play" onClick={onTap} aria-label={alt}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </>
  );
}
