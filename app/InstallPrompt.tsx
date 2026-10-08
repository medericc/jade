"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

export default function InstallPrompt() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();

      setInstallPrompt(event as BeforeInstallPromptEvent);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();

    const { outcome } = await installPrompt.userChoice;

    if (outcome === "accepted") {
      setShow(false);
    }

    setInstallPrompt(null);
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="
        fixed
        bottom-5
        left-1/2
        z-[9999]
        w-[calc(100%-2rem)]
        max-w-md
        -translate-x-1/2
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-[var(--gold-500)]
          bg-[#1d0b2f]
          px-5
          py-4
          shadow-[0_15px_50px_rgba(0,0,0,0.55)]
        "
      >
        {/* Halo décoratif */}
        <div
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-32
            w-32
            rounded-full
            bg-[var(--gold-500)]
            opacity-10
            blur-2xl
          "
        />

        <div className="relative flex items-center gap-4">
          {/* Icône */}
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--gold-500)]
              bg-[#2a0c45]
              text-2xl
              shadow-[0_0_20px_rgba(255,215,0,0.15)]
            "
          >
            🏀
          </div>

          {/* Texte */}
          <div className="min-w-0 flex-1">
            <p className="text-base font-bold text-white">
              Installer l’application
            </p>

            <p className="mt-1 text-sm leading-snug text-white/70">
              Jade, Béarn, Monde directement sur votre écran d’accueil.
            </p>
          </div>

          {/* Fermer */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fermer"
            className="
              absolute
              -right-1
              -top-2
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              text-white/50
              transition
              hover:bg-white/10
              hover:text-white
            "
          >
            ×
          </button>
        </div>

        {/* Bouton */}
        <button
          type="button"
          onClick={handleInstall}
          className="
            relative
            mt-4
            w-full
            rounded-xl
            bg-[var(--gold-500)]
            px-4
            py-3
            font-bold
            text-[#1d0b2f]
            shadow-[0_5px_20px_rgba(255,215,0,0.2)]
            transition
            hover:brightness-110
            active:scale-[0.98]
          "
        >
          Installer maintenant
        </button>
      </div>
    </div>
  );
}
