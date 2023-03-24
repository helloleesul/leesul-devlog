const CONFIG = {
  // profile setting (required)
  profile: {
    name: "leesul",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "스스로 올바른 선택을 할 수 있는 사람이 될 것",
    email: "suerish.e@gmail.com",
    linkedin: "",
    github: "helloleesul",
    instagram: "",
  },
  projects: [
    {
      name: `morethan-logss`,
      href: "https://github.com/morethanmin",
    },
  ],

  // blog setting (required)
  blog: {
    title: "LEESUL-DEVLOG",
    description: "개발 공부를 하며 배우고 느낀 것들을 기록합니다.",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://leesul-devlog.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean-leesul.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID || "653be21373eb460d9850a1cbd04698f0",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "G-PBBMF2E881",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification:
        process.env.GOOGLE_SITE_VERIFICATION ||
        "pFCu7_cAN8TpwiqTC8sLmci0fqlEceBxVDuhXKqGSss",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "helloleesul/leesul-devlog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
