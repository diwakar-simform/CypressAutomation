const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight: 900,

  projectId: 'rc82w7',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
