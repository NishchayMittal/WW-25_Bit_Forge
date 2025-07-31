"use client";

import { useEffect } from "react";

export default function Bot() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.defer = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://files.bpcontent.cloud/2025/07/31/14/20250731145421-4E07K7SA.js";
    script2.defer = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null;
}
