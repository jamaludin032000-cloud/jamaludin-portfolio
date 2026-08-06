import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value ?? "id";

  const messages =
    locale === "en"
      ? (await import("../lib/translations/en")).default
      : (await import("../lib/translations/id")).default;

  return { locale, messages };
});