import React from 'react';
import Card from './Card';

export default function CardExample() {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-bold">Card Example</h2>
      <p className="text-sm text-[var(--fg)]/80">
        This is a Tailwind card using custom tokens.
      </p>
    </Card>
  );
}
