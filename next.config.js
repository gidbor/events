module.exports = {
  compress: true,
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  }
}
