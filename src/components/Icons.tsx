/** Ícones SVG (stroke 1.75, estilo consistente). Sem emojis. */
type P = React.SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconTarget = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
);

export const IconGrowth = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>
);

export const IconHandshake = (p: P) => (
  <svg {...base(p)}>
    <path d="M11 6l3 3 4-4 3 3-6 6-3-3" />
    <path d="M3 9l4-3 4 4-3 3-2-2" />
    <path d="M8 15l3 3 2-2" />
  </svg>
);

export const IconTrophy = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 4h10v4a5 5 0 01-10 0V4z" />
    <path d="M7 5H4v2a3 3 0 003 3M17 5h3v2a3 3 0 01-3 3" />
    <path d="M12 13v4M9 21h6M10 17h4l1 4H9l1-4z" />
  </svg>
);

export const IconMegaphone = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 11v2a1 1 0 001 1h2l4 4V6L6 10H4a1 1 0 00-1 1z" />
    <path d="M14 8a4 4 0 010 8M18 5a8 8 0 010 14" />
  </svg>
);

export const IconChart = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 20V4M20 20H4" />
    <rect x="7" y="12" width="3" height="5" rx="0.5" />
    <rect x="12" y="8" width="3" height="9" rx="0.5" />
    <rect x="17" y="5" width="3" height="12" rx="0.5" />
  </svg>
);

export const IconFunnel = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 5h16l-6 7v6l-4 2v-8L4 5z" />
  </svg>
);

export const IconPen = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 4l6 6-11 11H3v-6L14 4z" />
    <path d="M12 6l6 6" />
  </svg>
);

export const IconLayers = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5M3 17l9 5 9-5" />
  </svg>
);

export const IconSearch = (p: P) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4-4" />
  </svg>
);

export const IconRocket = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 15c-1 1-1 4-1 4s3 0 4-1M14 4c3 1 6 4 6 4s-1 6-6 11l-4-1-4-4-1-4C10 5 14 4 14 4z" />
    <circle cx="14.5" cy="9.5" r="1.5" />
  </svg>
);

export const IconGear = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const IconArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconWhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.6-1.5-.9-2-.2-.5-.4-.4-.6-.5H8c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 5 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.2-.2-.5-.3z" />
    <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.9.9-2.8-.2-.3A8.2 8.2 0 1112 20.2z" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.9 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
