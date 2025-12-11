export const supportedLanguages = {
  en: "English",
  th: "ภาษาไทย",
} as const;
export type SupportedLanguage = keyof typeof supportedLanguages;
export const defaultLanguage = "en" as const;

export const Metadata = {
  en: {
    title: "Patiphon Loetsuthakun",
    description:
      "Personal website of Patiphon Loetsuthakun. A software developer and technology enthusiast.",
    ogImage: "/preview-en.png",
  },
  th: {},
} as const;

export const UIStrings = {
  en: {
    // variable
    "var.host": "IDK yet",

    // common
    "common.name": "Patiphon Loetsuthakun",
    "common.short-bio": "bio",
    "common.loading": "Loading...",
    "common.write-by": "Written by {name}",
    "common.back-to-top": "Back to top",
    "common.skip-to-content": "Skip to main content",

    // navigation
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.til": "TIL",

    // footer
    "footer.copy": "© Patiphon Loetsuthakun 2025 - Today. ",
    "footer.rights": "All rights reserved.",
    "footer.made_with": "Made with Astro and hosted on {host}.",
    "footer.disclaimer":
      "No Large Language Models(LLMs) where used to create any part of the content on this site.",
    "footer.contact": "Follow me elsewhere",
    "footer.github": "GitHub",
    "footer.facebook": "Facebook",

    // Aria labels
    "aria.main-navigation": "Main Navigation",
    "aria.language-selector": "Language Selector",

    // Image alts
    "alt.profile-picture": "Portrait photo of Patiphon Loetsuthakun.",
  },
  th: {},
} as const;
