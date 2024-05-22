import moment from "moment";

export function buildQueryString(
  params: Record<string, string | number | boolean | undefined>
): string {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      searchParams.append(key, String(value));
    }
  }

  return `?${searchParams.toString()}`;
}

export function formatDateForRequest(date: Date | string): string {
  return moment(date).format("YYYY-MM-DD");
}
