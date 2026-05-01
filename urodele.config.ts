export const config = {
  github: {
    login: "iu34", // github login name, not user name
    repo: "iu34.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "blog",
    brand: "智享出行",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© 北京智享出行科技发展有限公司",
    copyrightUrl: "https://blog.zxcx.qzz.io",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
