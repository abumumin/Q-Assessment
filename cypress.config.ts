const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor",
    browserify.default(config, {
      typescript: require.resolve("typescript"),
    }));
  return config;
}
export default defineConfig({
  e2e: {
    baseUrl: "https://demo.seleniumeasy.com/",
    defaultCommandTimeout: 15000,
    viewportHeight: 938,
    viewportWidth: 1520,
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false,
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
