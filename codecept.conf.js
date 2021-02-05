const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.google.com',
      show: true,
      chrome: {
        args: [
          '--disable-web-security',
          '--no-sandbox',
          '--disable-setuid-sandbox',
        ],
      },
      windowSize: '1920x1080'
    },
    ResembleHelper : {
      require: "codeceptjs-resemblehelper",
      screenshotFolder : "./output/",
      baseFolder: "./screenshots/base/",
      diffFolder: "./screenshots/diff/"
    },
    MockRequestHelper: {
      //require: './index.js'
      require: '@codeceptjs/mock-request'
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/MainPage.js',
    searchResultPage: './pages/SearchResultPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'google_tests',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {}
  }
}