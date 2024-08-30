const { output } = require("codeceptjs");
const { chromium } = require("playwright");
require('dotenv').config();

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: process.env.URL,
      show: false,
      waitForNavigation: 'load',
      // recordHar : {path: 'output.har'}, Enable to record HAR per scenario
      chromium: {
        args: [
          '--no-sandbox',
          '--start-maximized',
        ]
      }
    }
  },
  multiple: {
    basic: {
      browsers: ['chromium', 'firefox']
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './tests/features/*.feature',
    steps: ['./tests/step-definitions/landing-page.steps.js',
      './tests/step-definitions/search-function.steps.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'webAuto'
}