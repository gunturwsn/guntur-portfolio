const normalize = (value: string) => value.replace(/\/+$/, "");

const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

/**
 * SITE_URL (server-only) can be set per-environment. NEXT_PUBLIC_SITE_URL is the public fallback.
 * On Vercel, VERCEL_URL is provided automatically for preview deployments.
 */
export const siteUrl =
  normalize(
    process.env.SITE_URL ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      vercelUrl ??
      "http://localhost:3000"
  ) || "http://localhost:3000";
