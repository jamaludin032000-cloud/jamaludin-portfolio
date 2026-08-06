import id from "./translations/id";
import en from "./translations/en";

export const dictionaries = {
  id,
  en,
} as const;

export type Language = keyof typeof dictionaries;

export type Dictionary = typeof id;
