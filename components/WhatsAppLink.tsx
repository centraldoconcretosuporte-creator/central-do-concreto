// prop de URL = href (NÃO customUrl)
"use client";

import { gtagEvent } from "@/lib/gtag";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  href: string;
  source: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function WhatsAppLink({ href, source, children, target, rel, ...rest }: Props) {
  return (
    <a
      href={href}
      data-source={source}
      target={target ?? "_blank"}
      rel={rel ?? "noopener noreferrer"}
      onClick={() => gtagEvent("whatsapp_click", { source, destination: "cc" })}
      {...rest}
    >
      {children}
    </a>
  );
}
