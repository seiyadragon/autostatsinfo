import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}

export function getPageSlug(): string {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  const result = pathname?.split("/").pop();

  return result ? result : "";
}

export async function fullDataLoading(table: string) {
  const supabase = createClient();

  const { data, error } = await supabase.from(table).select();

  if (error) {
    console.error(`Error fetching ${table}`, error);
  }

  const result = data || [];

  return result;
}

export async function eqDataLoading(table: string, eq: [key: string, value: string]) {
  const supabase = createClient();

  const { data, error } = await supabase.from(table).select().eq(eq[0], eq[1]);

  if (error) {
    console.error(`Error fetching ${table}`, error);
  }

  const result = data || [];

  return result;
}

