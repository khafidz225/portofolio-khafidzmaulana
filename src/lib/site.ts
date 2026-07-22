const LOCAL_SITE_URL = "http://localhost:3000";

export const SITE_PROFILE = {
  name: "Khafidz Maulana",
  role: "Mobile Developer",
  specialty: "Flutter",
  statement: "Building mobile experiences for real-world operations.",
} as const;

function normalizeSiteUrl(value?: string) {
  if (!value?.trim()) {
    return LOCAL_SITE_URL;
  }

  const trimmedValue = value.trim().replace(/\/+$/, "");
  const hasProtocol = /^https?:\/\//i.test(trimmedValue);
  const isLocalHost = /^(localhost|127\.0\.0\.1|\[::1\])(?::|\/|$)/i.test(
    trimmedValue,
  );
  const candidate = hasProtocol
    ? trimmedValue
    : `${isLocalHost ? "http" : "https"}://${trimmedValue}`;

  try {
    return new URL(candidate).origin;
  } catch {
    return LOCAL_SITE_URL;
  }
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL,
);

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

export function formatPublishedDate(value: string) {
  const normalizedValue = value.includes("T") ? value : `${value}T00:00:00Z`;
  const date = new Date(normalizedValue);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
