// 서비스 바로가기용 라인 아이콘 (stroke: currentColor, 1.6px)
type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const VisitIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5.5 9.5V20h13V9.5" />
    <path d="M9.5 20v-5.5h5V20" />
  </svg>
);

export const RemoteIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
    <path d="M9 20h6M12 16.5V20" />
    <path d="m9.5 8.5 3 2-3 2z" />
  </svg>
);

export const OutdoorIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 9.5V20M8.5 20h7" />
    <circle cx="12" cy="8" r="1.8" />
    <path d="M7.8 12.2a6 6 0 0 1 0-8.4M16.2 3.8a6 6 0 0 1 0 8.4" />
    <path d="M5.3 14.7a9.5 9.5 0 0 1 0-13.4" opacity=".45" />
    <path d="M18.7 1.3a9.5 9.5 0 0 1 0 13.4" opacity=".45" />
  </svg>
);

export const RoomIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M6 11a6 6 0 0 0 12 0" />
    <path d="M12 17v4M8.5 21h7" />
  </svg>
);

export const RentalIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="7" width="13" height="11" rx="2" />
    <path d="m16 10.5 5-2.5v8l-5-2.5" />
    <circle cx="9.5" cy="12.5" r="2.5" />
  </svg>
);

export const EstimateIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8.5 7.5h7" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01" strokeWidth="2.2" />
  </svg>
);

export const DesignIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21a9 9 0 1 1 9-9c0 2.5-1.5 3.5-3 3.5h-2a2.5 2.5 0 0 0-2 4z" />
    <circle cx="7.5" cy="11" r="1" strokeWidth="2" />
    <circle cx="11" cy="7.5" r="1" strokeWidth="2" />
    <circle cx="15.5" cy="8.5" r="1" strokeWidth="2" />
  </svg>
);

export const SupportIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5z" />
    <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth="2.2" />
  </svg>
);
