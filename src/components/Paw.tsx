/**
 * Single paw print — mirrors the app's menu-bar icon (SF Symbol `pawprint.fill`):
 * four toe beans over one heel pad. Sized to the surrounding text (1em).
 */
export default function Paw({ className }: { className?: string }) {
  return (
    <svg
      className={`paw${className ? ` ${className}` : ''}`}
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <ellipse cx="116" cy="220" rx="41" ry="53" transform="rotate(-12 116 220)" />
      <ellipse cx="205" cy="150" rx="43" ry="57" transform="rotate(-5 205 150)" />
      <ellipse cx="307" cy="150" rx="43" ry="57" transform="rotate(5 307 150)" />
      <ellipse cx="396" cy="220" rx="41" ry="53" transform="rotate(12 396 220)" />
      <path d="M256 250c-74 0-128 50-128 112 0 43 36 70 78 70 22 0 34-9 50-9s28 9 50 9c42 0 78-27 78-70 0-62-54-112-128-112z" />
    </svg>
  );
}
