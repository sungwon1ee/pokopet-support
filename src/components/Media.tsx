import { useEffect, useRef } from 'react';
import { asset } from '../i18n';

/*
 * Native muted autoplay: the `autoplay muted playsinline` attributes make the
 * clip start on its own on desktop and default iOS Safari — no scrolling, no
 * tap. The only case the browser still refuses is iOS Low Power Mode, which
 * blocks all autoplay; for that we keep an invisible safety net that starts
 * every clip on the visitor's first touch/tap anywhere on the page.
 */
const clips = new Set<HTMLVideoElement>();
let armed = false;
const GESTURES = ['touchstart', 'pointerdown', 'click', 'keydown'];

function armFirstGesture() {
  if (armed || typeof window === 'undefined') return;
  armed = true;
  const fire = () => {
    clips.forEach((v) => {
      v.muted = true;
      v.play().catch(() => {});
    });
    GESTURES.forEach((e) => window.removeEventListener(e, fire));
  };
  GESTURES.forEach((e) => window.addEventListener(e, fire, { passive: true }));
}

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
    el.muted = true; // iOS checks the muted *property*, which React doesn't always set
    clips.add(el);
    armFirstGesture();
    el.play().catch(() => {}); // nudge, in case the attribute alone didn't start it
    return () => {
      clips.delete(el);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={asset(poster)}
      src={asset(src)}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={alt}
    />
  );
}
