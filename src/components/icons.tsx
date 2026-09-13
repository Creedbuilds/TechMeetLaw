import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 2L18 6V14L10 18L2 14V6L10 2Z" stroke="#FFD600" strokeWidth="2" fill="none" />
      <path d="M10 5L15 7.5V12.5L10 15L5 12.5V7.5L10 5Z" fill="#FFD600" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" />
    </svg>
  );
}

export function ArrowUp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" {...props}>
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...baseProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16.65 16.65" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...baseProps} {...props}>
      <path d="M3 6H21" />
      <path d="M3 12H21" />
      <path d="M3 18H21" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5A1.94 1.94 0 116.94 4.6a1.94 1.94 0 010 3.9ZM5 9.8h3.88V19H5V9.8Zm6.34 0h3.72v1.27h.05c.52-.98 1.8-2 3.7-2 3.95 0 4.68 2.6 4.68 5.98V19h-3.88v-17.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.78V19h-3.88V9.8Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...baseProps} {...props}>
      <path d="M7.2 9.6L12 14.4L16.8 9.6" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 12 14" fill="currentColor" {...props}>
      <path d="M0 0L12 7L0 14V0Z" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...baseProps} {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 34 24" fill="none" {...props}>
      <path d="M9.7 12.8C9.7 8.8 11.7 6.5 15.4 5.6V0C7.5 1.4 2.8 5.8 2.8 13.4v10.6h12.3V12.8H9.7Zm18 0C27.7 8.8 29.7 6.5 33.4 5.6V0C25.5 1.4 20.8 5.8 20.8 13.4v10.6h12.3V12.8h-5.4Z" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 9 7" fill="none" {...props}>
      <path d="M1 3L3.5 5.5L8 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...baseProps} {...props}>
      <path d="M4 6H20" />
      <path d="M8 12H16" />
      <path d="M10 18H14" />
    </svg>
  );
}

export function LocationPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...baseProps} {...props}>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...baseProps} {...props}>
      <path d="M6 2.5V5a1 1 0 0 0 1 1h2.5" />
      <path d="M6 2.5h6.5A1.5 1.5 0 0 1 14 4v12a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 16V4a1.5 1.5 0 0 1 1.5-1.5Z" />
      <path d="M7 9.5h6M7 12.5h6" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14.25 12" fill="currentColor" {...props}>
      <path d="M13.8 0L0 5.7l4.08 1.35L10.5 3.2l-5.1 5.3 3.42 1.58L13.8 0Z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 18" fill="currentColor" {...props}>
      <path d="M23.5 5.5c-.3-1.2-1.2-2.1-2.4-2.4C19.5 2.5 12 2.5 12 2.5s-7.5 0-9.1.6C1.7 3.4.8 4.3.5 5.5.5 7.1.5 9 .5 9s0 1.9.5 3.5c.3 1.2 1.2 2.1 2.4 2.4 1.6.6 9.1.6 9.1.6s7.5 0 9.1-.6c1.2-.3 2.1-1.2 2.4-2.4.5-1.6.5-3.5.5-3.5s0-1.9-.5-3.5ZM9.8 12.2V5.8L15.8 9l-6 3.2Z" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12H21" />
      <path d="M12 3a15.5 15.5 0 0 1 0 18" />
      <path d="M12 3a15.5 15.5 0 0 0 0 18" />
    </svg>
  );
}
