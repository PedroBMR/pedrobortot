import React from 'react';

export default function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 shadow bg-[var(--bg)] text-[var(--fg)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
