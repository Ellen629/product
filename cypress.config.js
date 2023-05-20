const { defineConfig } = require("cypress");
require('dotenv').config();
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        downloadFile,
        readdir(folderName) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderName, (err, files) => {
      if (err) {
        return reject(err);
      }
      resolve(files);
    });
  });
},})
    },
    env: {
      globalUrl:process.env.GLOBAL_URL,
      apiUrl: process.env.API_URL,
    },
  },
});

