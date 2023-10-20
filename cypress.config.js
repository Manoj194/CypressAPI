const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  includeShadowDom: true,
  defaultCommandTimeout:6000,
  screenshotOnRunFailure:true,
  failOnStatusCode: false,

  env: {
    url: "https://davidwalsh.name/demo/multiple-file-upload.php"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
            return config;

    },
  },
});
