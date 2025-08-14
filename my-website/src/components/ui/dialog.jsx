import React, { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';

const DialogContext = createContext({ open: false, setOpen: () => {} });

export function Dialog({ children }) {
  const [open, setOpen] = useState(false);
  return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>;
}

export function DialogTrigger({ children }) {
  const { setOpen } = useContext(DialogContext);
  return React.cloneElement(children, {
    onClick: () => setOpen(true),
  });
}

export function DialogContent({ className = '', children }) {
  const { open, setOpen } = useContext(DialogContext);
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-bg/80" onClick={() => setOpen(false)} />
      <div className={cn('relative z-10 w-full max-w-lg rounded-md bg-bg p-6 shadow-lg', className)}>
        {children}
      </div>
    </div>,
    document.body
  );
}

export function DialogClose({ children }) {
  const { setOpen } = useContext(DialogContext);
  return React.cloneElement(children, {
    onClick: () => setOpen(false),
  });
}

export function DialogHeader({ className = '', ...props }) {
  return <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />;
}

export function DialogFooter({ className = '', ...props }) {
  return <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />;
}

export function DialogTitle({ className = '', ...props }) {
  return <h2 className={cn('text-lg font-semibold text-fg', className)} {...props} />;
}

export function DialogDescription({ className = '', ...props }) {
  return <p className={cn('text-sm text-fg/70', className)} {...props} />;
}
