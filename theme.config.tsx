import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>GOAT docs</span>,
  project: {
    link: "https://github.com/GOATNetwork/goat-docs",
  },
  docsRepositoryBase: "https://github.com/GOATNetwork/goat-docs/blob/main/",

  footer: {
    text: "GOAT Documentation",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  editLink: {
    text: "✏️ Edit this page on GitHub",
  },
};

export default config;
