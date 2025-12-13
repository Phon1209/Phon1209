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
    "var.til_original": "https://emasuriano.com/til/",

    // common
    "common.name": "Patiphon Loetsuthakun",
    "common.short-bio":
      "I’m a Student studying Information Science and Computer Science. I have an interest in web interfaces and accessibility. Ultimately, I want to promote web accessibility for people who are often left behind. I sometimes write about Data Structures and Algorithms whenever I'm free.",
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

    // About Pages
    "about.title": "About Me",
    "about.long_bio": "",

    // TIL
    "til.title": "Today I learned",
    "til.description": `A collection of short notes/write-ups on what I learn day to day. These are things I think it’s useful but not enough to be a blog post. It will usually be something in the topic of my interest.`,
    "til.topic_of_interest": "\nSee the topic of my interest from the ",
    "til.stole_idea": "\nI stole this idea from ",
    "til.about_page": "about page",
    "til.original_idea": "Ema Suriano's TIL",

    // Aria labels
    "aria.main-navigation": "Main Navigation",
    "aria.language-selector": "Language Selector",

    // Image alts
    "alt.profile-picture": "Portrait photo of Patiphon Loetsuthakun.",
  },
  th: {},
} as const;
