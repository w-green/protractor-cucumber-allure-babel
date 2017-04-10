var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

require('babel-register')({
  presets: ['es2015'],
});


exports.config = {

    directConnect: true,

    baseUrl: 'http://www.google.com',

    capabilities: {
        'browserName': (process.env.TEST_BROWSER_NAME || 'chrome'),
        'version': (process.env.TEST_BROWSER_VERSION || 'ANY'),
        'marionette': false
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../features/*.feature'
    ],

    exclude: '../features/database.feature',
    resultJsonOutputFile: './reports/json/protractor_report.json',

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        global.expect = chai.expect;
    },

    cucumberOpts: {
        strict: true,
        format: ['pretty'],
        require: ['../stepDefinitions/*.js', '../support/*.js'],
        // tags: '@AllureScenario,@CucumberScenario,@ProtractorScenario'
        // tags: '@AllureScenario',
    }
};