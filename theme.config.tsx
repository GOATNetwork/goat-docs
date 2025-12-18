import React from "react";
import { DocsThemeConfig, useTheme } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – GOAT Network Docs'
    }
  },
  logo: () => {
    const { resolvedTheme } = useTheme();
    return (
      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {resolvedTheme === "dark" ? (
          <img src="/img/GOATlogo/logo-dark.svg" alt="GOAT Logo Dark" width={146} height={35} />
        ) : (
          <img src="/img/GOATlogo/logo-light.svg" alt="GOAT Logo Light" width={146} height={35} />
        )}
      </span>
    );
  },
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
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://docs.goat.network" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "GOAT Docs"} />
        <meta
          property="og:description"
          content={frontMatter.description || "GOAT Docs for developers"}
        />
        <link
          rel="icon"
          href="/img/icons/favicon.ico"
          type="image/x-icon"
        ></link>
      </>
    );
  },
};

export default config;
