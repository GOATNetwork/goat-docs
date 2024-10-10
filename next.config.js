module.exports = async () => {
  const nextra = (await import('nextra')).default({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
  });

  return nextra;
};
