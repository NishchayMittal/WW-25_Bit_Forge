"use client";

import { useEffect } from "react";

export default function Bot() {
  useEffect(() => {
    const loadBot = async () => {
      const script1 = document.createElement("script");
      script1.src = "https://cdn.botpress.cloud/webchat/v3.1/inject.js";
      script1.async = true;
      document.body.appendChild(script1);

      script1.onload = () => {
        const script2 = document.createElement("script");
        script2.src =
          "https://files.bpcontent.cloud/2025/07/10/16/20250710161048-3WXS4PPU.js";
        script2.async = true;
        document.body.appendChild(script2);
      };
    };

    loadBot();
  }, []);

  return null;
}
