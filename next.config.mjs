import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

export default withNextra({
  output: 'export',
  // Other Next.js config options here
  images: {
    unoptimized: true,
  },
});
