export const config = {
  github: {
    login: "iu34", // github login name, not user name
    repo: "iu34.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "智享出行",
    brand: "黑驴出品",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© iu34",
    copyrightUrl: "https://github.com/iu34",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
