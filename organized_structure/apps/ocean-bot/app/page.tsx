import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1>Welcome to My Site</h1>

      <Script
        src="https://cdn.botpress.cloud/webchat/v3.1/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2025/07/10/16/20250710161048-3WXS4PPU.js"
        strategy="afterInteractive"
      />
    </>
  );
}
