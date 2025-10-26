const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth:1920,
  viewportHeight:1080,
  screenshotOnRunFailure: true,
  screenshotsFolder:"cypress/screenshot",
  videosFolder: "cypress/video",
  video: false,
  watchForFileChanges:  true,
  e2e: {
    baseUrl: 'http://127.0.0.1:8000/',
    setupNodeEvents(on, config) {
      
    },
  },
});
