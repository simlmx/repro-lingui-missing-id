/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "fr"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  format: "po",
  compileNamespace: "es",
};
