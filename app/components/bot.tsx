"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    botpressWebChat?: any;
  }
}

export default function Bot() {
  useEffect(() => {
    // Check if scripts are already injected to avoid duplication
    const existingInject = document.getElementById("botpress-webchat-script");
    const existingConfig = document.getElementById("botpress-config-script");
    if (existingInject && existingConfig) return;

    // Create and configure scripts with optimal loading attributes
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    injectScript.id = "botpress-webchat-script";
    injectScript.async = true; // Non-blocking async load
    injectScript.setAttribute("data-resolve-collisions", "1"); // Prevent script collision

    const configScript = document.createElement("script");
    configScript.src =
      "https://files.bpcontent.cloud/2025/07/31/14/20250731145421-4E07K7SA.js";
    configScript.id = "botpress-config-script";
    configScript.async = true; // Non-blocking async load

    // Optimize loading sequence
    const loadConfig = () => document.body.appendChild(configScript);
    injectScript.onload = loadConfig; // Load config only after inject script is ready
    injectScript.onerror = () =>
      console.error("Failed to load Botpress inject script");

    // Append inject script to body
    document.body.appendChild(injectScript);

    // Cleanup function to remove scripts and container
    return () => {
      const injected = document.getElementById("botpress-webchat-script");
      const config = document.getElementById("botpress-config-script");
      const bpContainer = document.querySelector("#bp-web-widget-container");

      if (injected) document.body.removeChild(injected);
      if (config) document.body.removeChild(config);
      if (bpContainer) bpContainer.remove();

      // Optional: Clean up global objects if Botpress exposes them
      if (window.botpressWebChat) {
        delete window.botpressWebChat;
      }
    };
  }, []); // Empty dependency array for single execution

  return null; // No UI rendering needed
}
