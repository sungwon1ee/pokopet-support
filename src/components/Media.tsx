import { useEffect, useRef } from 'react';
import { asset } from '../i18n';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * A muted, looping clip that plays only while it's on screen — so we never
 * download or decode video the visitor can't see (kind to mobile data/battery).
 * The poster shows until the clip is ready; reduced-motion users just keep it.
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
    if (!el || prefersReducedMotion()) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.preload = 'auto';
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
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
