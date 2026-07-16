// prop de URL = href (NÃO customUrl)
"use client";

import { gtagEvent } from "@/lib/gtag";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type Props = {
  href: string;
  source: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function WhatsAppLink({ href, source, children, target, rel, onClick, ...rest }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    gtagEvent("whatsapp_click", { source, destination: "cc" });
    onClick?.(e);
  };
  return (
    <a
      href={href}
      data-source={source}
      target={target ?? "_blank"}
      rel={rel ?? "noopener noreferrer"}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}
