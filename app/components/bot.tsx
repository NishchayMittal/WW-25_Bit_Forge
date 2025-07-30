"use client";

import { useEffect } from "react";

export default function Bot() {
  useEffect(() => {
    const loadBot = async () => {
      const script1 = document.createElement("script");
      script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
      script1.defer = true;
      document.body.appendChild(script1);

      script1.onload = () => {
        const script2 = document.createElement("script");
        script2.src =
          "https://files.bpcontent.cloud/2025/07/30/17/20250730173454-86P6JVN4.js";
        script2.defer = true;
        document.body.appendChild(script2);
      };
    };

    loadBot();
  }, []);

  return null;
}
