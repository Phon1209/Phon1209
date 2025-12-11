import { Metadata, UIStrings, defaultLanguage, type SupportedLanguage } from "@/i18n/ui";

export function getLanguageFromURL(url: URL): SupportedLanguage {
  //
  return "en";
}

export function useMetadata(lang: keyof typeof Metadata) {
  return function tm(tmkey: keyof typeof Metadata[typeof defaultLanguage]) {
    return Metadata[lang][tmkey] ?? Metadata[defaultLanguage][tmkey];
  };
}

export function useUIStrings(lang: keyof typeof UIStrings) {
  return function t(
    key: keyof typeof UIStrings[typeof defaultLanguage],
    variables?: Record<string, string>
  ) {
    let str = UIStrings[lang][key] ?? UIStrings[defaultLanguage][key] ?? key;
    if (variables) {
      for (const [varKey, varValue] of Object.entries(variables)) {
        str = str.replace(`{${varKey}}`, varValue);
      }
    }
    return str;
  };
}
