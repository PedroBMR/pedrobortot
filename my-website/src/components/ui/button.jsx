import React from 'react';
import { cn } from '../../lib/utils';

const variants = {
  default: 'bg-accent text-bg hover:bg-accent/90',
  outline: 'border border-fg bg-bg text-fg hover:bg-fg/10',
};

const sizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-8 px-3',
  lg: 'h-12 px-8',
  icon: 'h-10 w-10',
};

export const Button = React.forwardRef(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      variants[variant],
      sizes[size],
      className
    );
    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = 'Button';
