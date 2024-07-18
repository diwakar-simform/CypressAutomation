const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rc82w7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
