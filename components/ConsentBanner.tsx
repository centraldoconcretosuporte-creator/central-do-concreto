"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cc_consent";

// Espelha o Consent Mode v2 da BJ: aceitar libera só analytics_storage;
// ad_* permanecem denied. Recusar mantém tudo denied.
function updateConsent(analytics: "granted" | "denied") {
  if (typeof window === "undefined") return;
  window.gtag?.("consent", "update", {
    analytics_storage: analytics,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setShow(true);
    } else if (stored === "granted") {
      updateConsent("granted");
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "granted");
    updateConsent("granted");
    setShow(false);
  };

  const deny = () => {
    localStorage.setItem(STORAGE_KEY, "denied");
    updateConsent("denied");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-cc-black text-white border-t-2 border-cc-orange shadow-2xl"
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="max-w-7xl mx-auto p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm md:text-base flex-1 leading-relaxed text-cc-gray-200">
          Usamos cookies para entender como você navega e melhorar nosso site. Você decide se aceita.
        </p>
        <div className="flex gap-2 w-full md:w-auto">
          <button
            onClick={deny}
            className="px-4 py-2 text-sm font-medium border border-cc-gray-400 text-white rounded hover:bg-cc-gray-800 transition flex-1 md:flex-none"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-semibold text-white rounded bg-cc-whatsapp hover:bg-cc-whatsapp-hover transition flex-1 md:flex-none"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
