import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="inline-block w-8 h-px bg-cc-coral" aria-hidden="true" />
      <span className="text-xs font-medium tracking-widest text-cc-coral uppercase">
        {children}
      </span>
    </div>
  );
}
