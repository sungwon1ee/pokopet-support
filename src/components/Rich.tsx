import { Fragment, type ReactNode } from 'react';

/** Splits **bold** spans within a plain string. */
function withBold(text: string, keyBase: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={`${keyBase}-b${i}`}>{part}</strong> : (
      <Fragment key={`${keyBase}-t${i}`}>{part}</Fragment>
    ),
  );
}

/**
 * Minimal rich-text renderer supporting `**bold**` and `[label](href)` links.
 * Used for privacy copy so translations stay plain strings in i18n.ts.
 */
export default function Rich({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = linkRe.exec(text)) !== null) {
    if (match.index > last) nodes.push(...withBold(text.slice(last, match.index), `p${i}`));
    nodes.push(
      <a key={`l${i}`} href={match[2]}>
        {match[1]}
      </a>,
    );
    last = linkRe.lastIndex;
    i += 1;
  }
  if (last < text.length) nodes.push(...withBold(text.slice(last), `p${i}`));

  return <>{nodes}</>;
}
