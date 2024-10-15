const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  "chromeWebSecurity": false,
  "pageLoadTimeout": 250000,
  "experimentalSessionAndOrigin": true,
  "defaultCommandTimeout": 10000,
  viewportWidth: 430,
  viewportHeight: 932,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-site-isolation-trials");
          launchOptions.args.push("--incognito");
          return launchOptions;
        }
      });
    },
  },
});
