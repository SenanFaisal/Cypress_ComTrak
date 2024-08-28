const { defineConfig } = require("cypress");
// import "cypress-real-events";

// // module.exports = defineConfig({
// //     "chromeWebSecurity": false,

// //   e2e: {
// //     setupNodeEvents(on, config) {
// //       // implement node event listeners here

// //     },


// //   },
// // });
// "compilerOptions"= {
//     "types": ["cypress", "node", "cypress-real-events"]
//   }

module.exports = defineConfig({
  projectId: "it1mi4",
  ...(on, config) => {
    on("before:browser:launch", (browser, launchOptions) => {
      if (browser.name === "chrome") {
        launchOptions.args.push("--disable-site-isolation-trials");
        launchOptions.args.push("--incognito");
        return launchOptions;
      }
    });
  },
  "chromeWebSecurity": false,
  "pageLoadTimeout": 250000,
  "experimentalSessionAndOrigin": true,
  "defaultCommandTimeout": 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    browser: 'chrome'
  },
});

// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     chromeWebSecurity: false,
//     browserLaunchOptions: {
//       args: ['--disable-web-security', '--disable-site-isolation-trials']
//     }
//   }
// });