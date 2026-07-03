import { useEffect, useRef } from 'react';
import { asset } from '../i18n';

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/*
 * iOS autoplay is allowed for muted+inline video EXCEPT in Low Power Mode or
 * when Safari's per-site setting is "Never Auto-Play" — there, muted autoplay
 * is refused until the first user gesture. But a single gesture *anywhere*
 * unlocks playback for the whole page. So we keep a shared registry of clips
 * and, on the first touch/tap/scroll, kick off every one that's on screen —
 * no per-video play button required.
 */
const clips = new Set<HTMLVideoElement>();
let armed = false;

const GESTURES = ['touchstart', 'pointerdown', 'click', 'keydown'];

function playIfVisible(v: HTMLVideoElement) {
  const r = v.getBoundingClientRect();
  if (r.bottom > 0 && r.top < (window.innerHeight || document.documentElement.clientHeight)) {
    v.muted = true;
    v.play().catch(() => {});
  }
}

function armFirstGesture() {
  if (armed || typeof window === 'undefined') return;
  armed = true;
  const fire = () => {
    clips.forEach(playIfVisible);
    GESTURES.forEach((e) => window.removeEventListener(e, fire));
  };
  GESTURES.forEach((e) => window.addEventListener(e, fire, { passive: true }));
}

/**
 * Muted, looping clip that plays while on screen. Tries to autoplay right away
 * (works on desktop and default mobile Safari); if the browser blocks it, the
 * visitor's first interaction with the page starts it — see the note above.
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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true; // iOS checks the muted *property*, not just the attribute
    if (reduceMotion()) return;

    clips.add(el);
    armFirstGesture();

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.muted = true;
          el.preload = 'auto';
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clips.delete(el);
    };
  }, []);

  return (
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
  );
}
