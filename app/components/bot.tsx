"use client";

import { useEffect } from "react";

export default function Bot() {
  useEffect(() => {
    // Avoid reinjecting if already present
    if (document.getElementById("botpress-webchat-script")) return;

    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    injectScript.id = "botpress-webchat-script";
    injectScript.defer = true;

    const configScript = document.createElement("script");
    configScript.src =
      "https://files.bpcontent.cloud/2025/07/31/14/20250731145421-4E07K7SA.js";
    configScript.id = "botpress-config-script";
    configScript.defer = true;

    // Append injectScript first, then configScript
    injectScript.onload = () => {
      document.body.appendChild(configScript);
    };

    document.body.appendChild(injectScript);

    // Cleanup
    return () => {
      const injected = document.getElementById("botpress-webchat-script");
      const config = document.getElementById("botpress-config-script");

      if (injected) document.body.removeChild(injected);
      if (config) document.body.removeChild(config);

      // Remove chat container if needed
      const bpContainer = document.querySelector("#bp-web-widget-container");
      if (bpContainer) bpContainer.remove();
    };
  }, []);

  return null;
}
