import type { SVGProps } from 'react';

export function NeutronIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="50" cy="50" r="45" fill="#3B82F6" /> {/* Blue */}
      <text x="50" y="62" fontSize="40" fill="white" textAnchor="middle" fontWeight="bold">N</text>
    </svg>
  );
}
